/*
  storage-supabase.js — local-first storage with background sync to Supabase.

  Design (why it's built this way):
  - Every read/write hits localStorage FIRST and synchronously, so the app never
    blocks or fails on a bad connection (bus, no signal). This preserves the
    instant, offline-capable feel we already have.
  - Writes also enqueue a background push to Supabase. Pushes retry and coalesce;
    if offline, they wait and flush when the connection returns.
  - On startup (and on login), we pull remote state and merge it in, so a fresh
    device or reinstall gets his data back.

  It exposes the SAME method names as the old Store, so app.js is unchanged.
  If Supabase isn't configured (config.js empty) or the user isn't signed in,
  it behaves exactly like the old local-only Store.
*/
const Store = (() => {
  // ----- local keys (unchanged from before, so existing data carries over) -----
  const KEY_TASKS = 'hw.tasks.v1';
  const KEY_SUBJECTS = 'hw.subjects.v1';
  const KEY_SOURCES = 'hw.sources.v1';
  const KEY_SETTINGS = 'hw.settings.v1';
  const KEY_LOG = 'hw.log.v1';
  const KEY_QUEUE = 'hw.syncqueue.v1';      // pending pushes when offline
  const KEY_LOGCURSOR = 'hw.logpushed.v1';  // how many log entries already pushed
  const LOG_CAP = 2000;

  const DEFAULT_SOURCES = [
    {name:'Google Classroom', icon:'laptop', color:'#5bd6a0', url:'https://classroom.google.com'},
    {name:'אתר בית הספר', icon:'globe', color:'#7c9cff', url:''},
    {name:'וואטסאפ', icon:'quote', color:'#5bd6a0', url:''},
    {name:'Google Drive', icon:'book', color:'#ffb454', url:'https://drive.google.com'},
    {name:'מחברת', icon:'pen', color:'#c77dff', url:''},
  ];
  const DEFAULT_SUBJECTS = [
    {name:'גיאומטריה', icon:'triangle', color:'#7c9cff'},{name:'אלגברה', icon:'sigma', color:'#7c9cff'},
    {name:'קולומביה', icon:'integral', color:'#4fd0e3'},{name:'פיזיקה', icon:'atom', color:'#ff8f5e'},
    {name:'אנגלית', icon:'abc', color:'#c77dff'},{name:'עברית', icon:'letter', color:'#ff6b8a'},
    {name:'תנ"ך', icon:'book', color:'#ffb454'},{name:'היסטוריה', icon:'hourglass', color:'#ffb454'},
    {name:'אזרחות', icon:'scale', color:'#5bd6a0'},{name:'גיאוגרפיה', icon:'globe', color:'#5bd6a0'},
    {name:'ביולוגיה', icon:'dna', color:'#5bd6a0'},{name:'כימיה', icon:'flask', color:'#4fd0e3'},
    {name:'מדעים', icon:'microscope', color:'#4fd0e3'},{name:'ספרות', icon:'feather', color:'#ff6b8a'},
    {name:'מדעי המחשב', icon:'code', color:'#7c9cff'},{name:'ערבית', icon:'language', color:'#c77dff'},
  ];

  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  // ----- Supabase client (created only if configured) -----
  let sb = null;         // supabase-js client
  let userId = null;     // current signed-in user id
  const cfg = (typeof window!=='undefined' && window.SUPABASE_CONFIG) || {url:'',anonKey:''};
  const configured = !!(cfg.url && cfg.anonKey);

  // map local key -> remote state key
  const STATE_KEYS = { [KEY_TASKS]:'tasks', [KEY_SUBJECTS]:'subjects', [KEY_SOURCES]:'sources', [KEY_SETTINGS]:'settings' };

  // ---------- background sync queue ----------
  function enqueue(op){
    const q = read(KEY_QUEUE, []);
    // coalesce state writes: keep only the latest per key
    if(op.type==='state'){ const i=q.findIndex(x=>x.type==='state'&&x.key===op.key); if(i>=0) q.splice(i,1); }
    q.push(op); write(KEY_QUEUE, q);
    scheduleFlush();
  }
  let flushTimer=null, flushing=false;
  function scheduleFlush(delay=400){
    if(!sb || !userId) return;
    clearTimeout(flushTimer); flushTimer=setTimeout(flush, delay);
  }
  async function flush(){
    if(flushing || !sb || !userId) return;
    if(typeof navigator!=='undefined' && navigator.onLine===false) return; // wait for connection
    flushing=true;
    try{
      let q = read(KEY_QUEUE, []);
      while(q.length){
        const op = q[0];
        try{
          if(op.type==='state'){
            await sb.from('app_state').upsert({user_id:userId, key:op.key, value:op.value, updated_at:new Date().toISOString()}, {onConflict:'user_id,key'});
          } else if(op.type==='log'){
            // push any log entries not yet pushed
            await pushLogBatch();
          }
        }catch(e){ // network/error: stop, will retry later
          break;
        }
        q = read(KEY_QUEUE, []); q.shift(); write(KEY_QUEUE, q);
      }
    } finally { flushing=false; }
  }

  async function pushLogBatch(){
    const log = read(KEY_LOG, []);
    let cursor = read(KEY_LOGCURSOR, 0);
    if(cursor > log.length) cursor = 0; // log was trimmed; be safe
    const pending = log.slice(cursor);
    if(!pending.length) return;
    const rows = pending.map(e=>({id:e.id, user_id:userId, ts:new Date(e.ts).toISOString(), event:e.event, task_id:e.taskId||null, data:e.data||{}}));
    // upsert on id so retries are idempotent
    const { error } = await sb.from('action_log').upsert(rows, {onConflict:'id'});
    if(error) throw error;
    write(KEY_LOGCURSOR, log.length);
  }

  // ---------- pull remote -> local (on login / startup) ----------
  async function pullRemote(){
    if(!sb || !userId) return;
    try{
      const { data, error } = await sb.from('app_state').select('key,value').eq('user_id', userId);
      if(error) throw error;
      if(data && data.length){
        for(const rowKey of Object.keys(STATE_KEYS)){
          const remoteKey = STATE_KEYS[rowKey];
          const found = data.find(r=>r.key===remoteKey);
          if(found) write(rowKey, found.value);
        }
      } else {
        // first login on a fresh account: push whatever is local up
        for(const localKey of Object.keys(STATE_KEYS)){
          enqueue({type:'state', key:STATE_KEYS[localKey], value:read(localKey, localKey===KEY_SETTINGS?{}:[])});
        }
      }
    }catch(e){ /* offline: keep local, sync later */ }
  }

  // ---------- auth ----------
  async function initAuth(){
    if(!configured) return;
    if(!window.supabase){ console.warn('supabase-js not loaded'); return; }
    sb = window.supabase.createClient(cfg.url, cfg.anonKey, { auth:{ persistSession:true, autoRefreshToken:true }});
    const { data:{ session } } = await sb.auth.getSession();
    if(session){ userId = session.user.id; await onSignedIn(); }
    sb.auth.onAuthStateChange(async (_ev, sess)=>{
      userId = sess ? sess.user.id : null;
      if(userId) await onSignedIn();
      if(typeof window.onAuthChanged==='function') window.onAuthChanged(currentUser());
    });
  }
  async function onSignedIn(){
    await pullRemote();
    await flush();
    if(typeof window.onAuthChanged==='function') window.onAuthChanged(currentUser());
    if(typeof window.afterSync==='function') window.afterSync();
  }
  function currentUser(){
    return userId ? {id:userId} : null;
  }

  if(typeof window!=='undefined'){
    window.addEventListener('online', ()=>scheduleFlush(200));
    // kick off auth once supabase script is present
    if(configured){ (window.supabaseReady || Promise.resolve()).then(initAuth); }
  }

  // ---------- public API (same names as before) ----------
  return {
    // capability flags for the UI
    syncEnabled(){ return configured; },
    isSignedIn(){ return !!userId; },
    currentUser,

    async signInWithGoogle(){
      if(!sb) return;
      await sb.auth.signInWithOAuth({ provider:'google', options:{ redirectTo: window.location.href.split('#')[0] }});
    },
    async signOut(){ if(sb){ await sb.auth.signOut(); userId=null; } },

    async getTasks(){ return read(KEY_TASKS, []); },
    async saveTasks(tasks){ write(KEY_TASKS, tasks); enqueue({type:'state', key:'tasks', value:tasks}); },

    async getSubjects(){
      const s = read(KEY_SUBJECTS, null);
      if (s === null){ write(KEY_SUBJECTS, DEFAULT_SUBJECTS); return DEFAULT_SUBJECTS.slice(); }
      return s;
    },
    async saveSubjects(subs){ write(KEY_SUBJECTS, subs); enqueue({type:'state', key:'subjects', value:subs}); },

    async getSources(){
      const s = read(KEY_SOURCES, null);
      if (s === null){ write(KEY_SOURCES, DEFAULT_SOURCES); return DEFAULT_SOURCES.slice(); }
      return s;
    },
    async saveSources(src){ write(KEY_SOURCES, src); enqueue({type:'state', key:'sources', value:src}); },

    async getSettings(){ return read(KEY_SETTINGS, {theme:'auto', parentEmail:'', parentEmailVerified:false, dailySummary:true}); },
    async saveSettings(s){ write(KEY_SETTINGS, s); enqueue({type:'state', key:'settings', value:s}); },

    async appendLog(entry){
      const log = read(KEY_LOG, []);
      log.push(entry);
      if (log.length > LOG_CAP){ const drop = log.length - LOG_CAP; log.splice(0, drop); const c=read(KEY_LOGCURSOR,0); write(KEY_LOGCURSOR, Math.max(0, c-drop)); }
      write(KEY_LOG, log);
      enqueue({type:'log'});
    },
    async getLog(){ return read(KEY_LOG, []); },

    // let the app trigger a manual sync (e.g. pull-to-refresh) if desired
    async syncNow(){ await pullRemote(); await flush(); },

    // ---------- push notifications (reminders) ----------
    pushSupported(){
      return !!(configured && cfg.vapidPublicKey && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window);
    },
    async pushStatus(){
      if(!this.pushSupported()) return 'unsupported';
      if(Notification.permission === 'denied') return 'denied';
      try{
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        return sub ? 'on' : 'off';
      }catch{ return 'off'; }
    },
    async enablePush(slots){
      if(!this.pushSupported()) throw new Error('unsupported');
      if(!userId) throw new Error('not-signed-in');
      const perm = await Notification.requestPermission();
      if(perm !== 'granted') throw new Error('denied');
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8(cfg.vapidPublicKey),
      });
      const json = sub.toJSON();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Jerusalem';
      const s = slots || {};
      await sb.from('push_subscriptions').upsert({
        user_id: userId,
        endpoint: json.endpoint,
        p256dh: json.keys.p256dh,
        auth: json.keys.auth,
        reminder_tz: tz,
        morning_enabled:   s.morning   !== false,
        afternoon_enabled: s.afternoon !== false,
        evening_enabled:   s.evening   !== false,
        enabled: true,
        updated_at: new Date().toISOString(),
      }, {onConflict:'user_id,endpoint'});
      return true;
    },
    async disablePush(){
      try{
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        if(sub){
          const ep = sub.toJSON().endpoint;
          if(sb && userId) await sb.from('push_subscriptions').delete().eq('user_id',userId).eq('endpoint',ep);
          await sub.unsubscribe();
        }
      }catch{}
      return true;
    },
    // update which of the three daily slots are on (obj: {morning,afternoon,evening} booleans)
    async setReminderSlots(slots){
      if(!sb || !userId) return;
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if(sub){
        await sb.from('push_subscriptions').update({
          morning_enabled:   slots.morning   !== false,
          afternoon_enabled: slots.afternoon !== false,
          evening_enabled:   slots.evening   !== false,
          updated_at:new Date().toISOString()
        }).eq('user_id',userId).eq('endpoint',sub.toJSON().endpoint);
      }
    },
  };
})();

// helper: convert base64url VAPID key to Uint8Array
function urlB64ToUint8(base64String){
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++) arr[i]=raw.charCodeAt(i);
  return arr;
}
