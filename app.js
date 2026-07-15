/* ---------- icons (inline SVG, stroke-based) ---------- */
const I = {
  plus:'<path d="M12 5v14M5 12h14"/>',
  gear:'<path d="M10.3 3.3a1 1 0 0 1 1 -.9h1.4a1 1 0 0 1 1 .9l.2 1.6a7 7 0 0 1 1.6 .9l1.5-.6a1 1 0 0 1 1.2 .4l.7 1.2a1 1 0 0 1-.2 1.3l-1.2 1a7 7 0 0 1 0 1.8l1.2 1a1 1 0 0 1 .2 1.3l-.7 1.2a1 1 0 0 1-1.2 .4l-1.5-.6a7 7 0 0 1-1.6 .9l-.2 1.6a1 1 0 0 1-1 .9h-1.4a1 1 0 0 1-1-.9l-.2-1.6a7 7 0 0 1-1.6-.9l-1.5 .6a1 1 0 0 1-1.2-.4l-.7-1.2a1 1 0 0 1 .2-1.3l1.2-1a7 7 0 0 1 0-1.8l-1.2-1a1 1 0 0 1-.2-1.3l.7-1.2a1 1 0 0 1 1.2-.4l1.5 .6a7 7 0 0 1 1.6-.9z"/><circle cx="12" cy="12" r="2.6"/>',
  chevR:'<path d="M15 6l-6 6 6 6"/>',
  chevL:'<path d="M9 6l6 6-6 6"/>',
  check:'<path d="M5 12l5 5L20 6"/>',
  cal:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M9 3v4M15 3v4"/>',
  trash:'<path d="M5 7h14M10 7V5h4v2M6 7l1 12h10l1-12"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  inbox:'<path d="M4 13h4l2 3h4l2-3h4M5 6h14l1 7v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5z"/>',
  download:'<path d="M12 4v10m0 0l-4-4m4 4l4-4M5 19h14"/>',
  camera:'<path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2a1 1 0 0 0 .84-.46l.92-1.42A1 1 0 0 1 9.3 4.7h5.4a1 1 0 0 1 .84.42l.92 1.42a1 1 0 0 0 .84.46h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/><circle cx="12" cy="12.5" r="3.2"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  /* subject icons */
  triangle:'<path d="M12 4l8 15H4z"/>',
  sigma:'<path d="M17 5H7l5 7-5 7h10"/>',
  integral:'<path d="M9 19c0 1.5 1 2 2 2s2-.8 2-3V6c0-2.2 1-3 2-3s2 .5 2 2"/>',
  atom:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  abc:'<path d="M3 17l2.5-8L8 17M3.7 14h3.6M13 9v8M13 9h2a2 2 0 0 1 0 4h-2m0 0h2.3a2 2 0 0 1 0 4H13M21 11a2 2 0 0 0-4 0v3a2 2 0 0 0 4 0"/>',
  letter:'<path d="M5 18L10 6l5 12M6.5 14h7M17 9v9M17 9h2.5a2.2 2.2 0 0 1 0 4.5H17"/>',
  book:'<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M18 16H7a2 2 0 0 0-2 2"/>',
  hourglass:'<path d="M7 4h10M7 20h10M8 4c0 4 8 4 8 8s-8 4-8 8M16 4c0 4-8 4-8 8s8 4 8 8"/>',
  scale:'<path d="M12 4v16M7 20h10M6 8h12M6 8l-2.5 5a2.5 2.5 0 0 0 5 0zM18 8l-2.5 5a2.5 2.5 0 0 0 5 0z"/>',
  globe:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/>',
  dna:'<path d="M8 3c0 4 8 6 8 9s-8 5-8 9M16 3c0 4-8 6-8 9s8 5 8 9M8.5 7h7M8.5 17h7M10 5h4M10 19h4"/>',
  flask:'<path d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3M7.5 15h9"/>',
  microscope:'<path d="M6 20h12M9 20v-2M8 4l3 3-2 2-3-3zM10 6l4 4-3.5 3.5a4 4 0 0 1-5-5M13 15a5 5 0 0 1 3 5"/>',
  feather:'<path d="M20 4a6 6 0 0 0-8.5 0L5 10.5V19h8.5L20 12.5A6 6 0 0 0 20 4zM5 19L15 9M10 10h4v4"/>',
  code:'<path d="M9 8l-5 4 5 4M15 8l5 4-5 4"/>',
  language:'<path d="M4 5h8M8 3v2M6 5c0 4-2 7-4 8M7 5c0 3 2 6 4 7M13 20l4-9 4 9M14.5 16h5"/>',
  calculator:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4M8 19h4"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6z"/>',
  ruler:'<path d="M4 16L16 4l4 4L8 20zM8 8l2 2M11 5l2 2M14 12l2 2M11 15l2 2"/>',
  pi:'<path d="M5 8h14M9 8v9M15 8v7a1.5 1.5 0 0 0 3 0"/>',
  brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V5a2.5 2.5 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1"/>',
  leaf:'<path d="M5 20c0-8 6-14 14-14 0 8-6 14-14 14zM5 20c3-5 6-8 10-10"/>',
  molecule:'<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="8" r="2.4"/><circle cx="12" cy="17" r="2.4"/><path d="M7.7 7.7l3 6.6M16.2 9.6l-3 5.2M8.1 6.6l7.6 1"/>',
  test_tube:'<path d="M8 3h8M14 3v13a2.5 2.5 0 0 1-5 0V3M9 12h5"/>',
  earth:'<circle cx="12" cy="12" r="9"/><path d="M4 9c3 1 5-1 7 0s4 2 6 1M5 15c2-1 4 0 6-1s3-2 6-1"/>',
  mountain:'<path d="M3 20l6-11 4 6 2-3 6 8zM9 9l2 3"/>',
  map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
  palette:'<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-.5-2 1-2h2a4 4 0 0 0 4-4c0-5-4-8-9-8z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/>',
  music:'<path d="M9 18V5l10-2v13M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM19 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>',
  running:'<circle cx="15" cy="5" r="2"/><path d="M13 21l1.5-6-3-2 1-5 3 2 2 2M8 12l3-1M6 21l3-5"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6c3 2 3 10 0 12M18 6c-3 2-3 10 0 12"/>',
  laptop:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 20h20M9 20l.5-4M15 20l-.5-4"/>',
  chip:'<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
  star:'<path d="M12 3l2.6 5.6L21 9.4l-4.5 4.3L17.6 21 12 17.8 6.4 21l1.1-7.3L3 9.4l6.4-.8z"/>',
  pen:'<path d="M4 20l4-1L19 8a2 2 0 0 0-3-3L5 16zM14 7l3 3"/>',
  quote:'<path d="M7 7H4v4a3 3 0 0 0 3 3V7zM17 7h-3v4a3 3 0 0 0 3 3V7z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  clockwork:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
};
const ICON_CHOICES = ['triangle','sigma','integral','pi','calculator','compass','ruler','atom','molecule','test_tube','flask','dna','leaf','microscope','brain','abc','letter','book','quote','pen','feather','language','hourglass','clock','scale','globe','earth','map','mountain','laptop','code','chip','bulb','music','palette','running','ball','star','target'];

/* ====== App name — change this one line to rename the app ====== */
const APP_NAME = 'Compound V';   /* options you liked: 'SchoolNinja', 'SchoolHero', 'Skewl' */

/* ====== Version — bump this on every release, and match CACHE in sw.js ====== */
const APP_VERSION = '1.7.0';
const MAX_IMAGES = 5;

/* subject colors — value is the accent hex; the icon background is a soft tint of it */
const COLORS = ['#7c9cff','#ff8f5e','#5bd6a0','#ffb454','#c77dff','#ff6b8a','#4fd0e3'];
const DEFAULT_COLOR = '#7c9cff';
const tint = hex => { const h=hex.replace('#',''); const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16); return `rgba(${r},${g},${b},.16)`; };
const svg = (name, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${I[name]||''}</svg>`;

const TYPES = [
  {k:'homework', label:'שיעורי בית', icon:'book'},
  {k:'big', label:'עבודה גדולה', icon:'feather'},
  {k:'quiz', label:'בוחן', icon:'clock'},
  {k:'test', label:'מבחן', icon:'scale'},
];
const typeMeta = k => TYPES.find(t=>t.k===k) || TYPES[0];
const typeIcon = k => ({homework:'book', big:'feather', quiz:'clock', test:'scale'})[k];
const finishLabel = k => k==='test'?'תאריך המבחן' : k==='quiz'?'תאריך הבוחן' : 'להגיש עד';

/* ---------- date helpers ---------- */
const midnight = d => { const x=new Date(d); x.setHours(0,0,0,0); return x; };
const TODAY = midnight(new Date());
const addDays = (base,n) => { const d=new Date(base); d.setDate(d.getDate()+n); return midnight(d); };
const daysBetween = d => Math.round((midnight(d)-TODAY)/86400000);
const fmtDate = d => new Date(d).toLocaleDateString('he-IL',{day:'numeric',month:'short'});
const toISO = d => { const x=new Date(d); x.setMinutes(x.getMinutes()-x.getTimezoneOffset()); return x.toISOString().slice(0,10); };

function distLabel(d){
  const n = daysBetween(d);
  if(n<0) return {txt:'עבר הזמן', cls:'red'};
  if(n===0) return {txt:'היום', cls:'red'};
  if(n===1) return {txt:'מחר', cls:'amber'};
  if(n<=2) return {txt:'בעוד '+n+' ימים', cls:'amber'};
  return {txt:'בעוד '+n+' ימים', cls:''};
}

/* ---------- app state ---------- */
let TASKS = [];
let SUBJECTS = [];
let SOURCES = [];
let SETTINGS = {};
let nav = {screen:'home'};
let draft = {};

const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function boot(){
  TASKS = await Store.getTasks();
  SUBJECTS = await Store.getSubjects();
  SOURCES = await Store.getSources();
  SETTINGS = await Store.getSettings();
  applyTheme(SETTINGS.theme || 'auto');
  render();
}

function applyTheme(mode){
  const root = document.documentElement;
  if(mode==='auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);
}
async function setTheme(mode){
  SETTINGS.theme = mode;
  await Store.saveSettings(SETTINGS);
  applyTheme(mode);
  render();
}

/*
  Navigation + Android/browser back handling.

  We keep our own screen stack. For the OS back button we use a single "sentinel"
  history entry rather than trying to mirror the whole stack into history —
  mirroring desyncs badly, because history.go(-n) does not reliably deliver n
  popstate events, and the two stacks drift apart.

  How it works: whenever we're above home, exactly one sentinel entry sits on the
  history stack. An OS back press consumes it and fires popstate; we then pop our
  own stack one level and immediately re-arm the sentinel if we're still above
  home. At home there is no sentinel, so back exits the app — the expected
  Android behaviour at the root.
*/
let navStack = [{screen:'home'}];
let sentinelArmed = false;

function armSentinel(){
  if(!sentinelArmed){
    try{ history.pushState({cv:true}, '', location.href.split('#')[0]); sentinelArmed = true; }catch(_){}
  }
}

function go(screen, extra={}){
  nav = {screen, ...extra};
  navStack.push(nav);
  armSentinel();
  render();
}

// On-screen back buttons.
function goBack(){
  if(navStack.length > 1){
    navStack.pop();
    nav = navStack[navStack.length-1];
    if(navStack.length === 1 && sentinelArmed){
      // returning to home: consume our sentinel so OS-back exits from home
      sentinelArmed = false;
      try{ history.back(); }catch(_){}
    }
    render();
  }
}

// After a completed action: collapse straight back to home.
function goHomeReset(){
  navStack = [{screen:'home'}];
  nav = navStack[0];
  if(sentinelArmed){
    sentinelArmed = false;
    try{ history.back(); }catch(_){}
  }
  render();
}

window.addEventListener('popstate', ()=>{
  // Our sentinel was consumed by a real back press (or by our own history.back(),
  // in which case sentinelArmed is already false and the UI is already correct).
  if(!sentinelArmed) return;
  sentinelArmed = false;
  if(navStack.length > 1){
    navStack.pop();
    nav = navStack[navStack.length-1];
    render();
    if(navStack.length > 1) armSentinel();   // still above home: re-arm
  }
});

/* append an event to the action log, in the backend's shape */
function logAction(event, task, extra={}){
  const entry = {
    id: newId(),
    ts: Date.now(),
    event,
    taskId: task ? task.id : null,
    data: Object.assign({
      subject: task ? task.subject : undefined,
      type: task ? task.type : undefined,
      finish: task ? task.finish : undefined,
      given: task ? task.given : undefined,
    }, extra)
  };
  Store.appendLog(entry);
}

/* ---------- render ---------- */
function render(){
  const map = {home:Home, subject:SubjectPick, type:TypePick, date:DatePick, detail:Detail, settings:Settings, done:DoneHistory, editsub:EditSubject, editsrc:EditSource, digest:DigestPreview};
  app.innerHTML = (map[nav.screen]||Home)();
  app.querySelector('.screen')?.classList.add('fade');
  // Landing on a just-added task: put the cursor in the note field so he can
  // type straight away (or just tap back — nothing is required).
  if(nav.screen==='detail' && nav.fresh){
    const ta = document.getElementById('notesarea');
    if(ta){ ta.focus({preventScroll:false}); }
    nav.fresh = false;   // only auto-focus once, not on every re-render
  }
  if(nav.screen==='detail') fillImages();
}

function header(title, {back=null, gear=false, sub=null}={}){
  return `<div class="hdr ${sub?'':'bordered'}">
    ${back!==null?`<button class="iconbtn" onclick="goBack()" aria-label="חזרה">${svg('chevR')}</button>`:''}
    <div style="flex:1;min-width:0">
      <div class="ttl">${esc(title)}</div>
      ${sub?`<div class="sub">${esc(sub)}</div>`:''}
    </div>
    ${gear?`<button class="iconbtn" onclick="go('settings')" aria-label="הגדרות">${svg('gear')}</button>`:''}
  </div>`;
}

function subjectIcon(name){
  const s = SUBJECTS.find(x=>x.name===name);
  return s ? s.icon : 'book';
}
function subjectColor(name){
  const s = SUBJECTS.find(x=>x.name===name);
  return (s && s.color) ? s.color : DEFAULT_COLOR;
}
function subjectTico(name, size){
  const c = subjectColor(name);
  const st = size ? `width:${size}px;height:${size}px;` : '';
  return `<div class="tico" style="${st}background:${tint(c)};color:${c}">${svg(subjectIcon(name))}</div>`;
}

/* ---------- HOME ---------- */
function Home(){
  const live = TASKS.filter(t=>!t.done).sort((a,b)=> new Date(a.finish)-new Date(b.finish));
  const statusLine = homeStatus(live);
  let listHTML;
  if(live.length===0){
    listHTML = `<div class="empty">${svg('inbox')}<div>אין משימות קרובות.<br>הוסף משהו כשמקבלים אותו בכיתה.</div></div>`;
  } else {
    // group: overdue+today+tomorrow => "עכשיו", up to 7 => "השבוע", rest => "בהמשך"
    const groups = {now:[], week:[], later:[]};
    live.forEach(t=>{ const n=daysBetween(t.finish); if(n<=1) groups.now.push(t); else if(n<=7) groups.week.push(t); else groups.later.push(t); });
    const gLabel = {now:'עכשיו', week:'השבוע', later:'בהמשך'};
    listHTML = Object.entries(groups).filter(([_,arr])=>arr.length).map(([k,arr])=>`
      <div class="daygroup">
        <div class="glabel">${gLabel[k]}</div>
        ${arr.map(taskRow).join('')}
      </div>`).join('');
  }
  // The install path differs by browser: iOS/Safari uses the Share menu,
  // Chrome/Android (and desktop Chrome/Edge) use the three-dot menu.
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const installText = isIOS
    ? `לחץ על כפתור השיתוף בדפדפן ואז בחר "הוסף למסך הבית".`
    : `לחץ על 3 הנקודות בדפדפן למעלה ואז בחר "התקן אפליקציה" / "התקן למסך הבית".`;
  const installHint = !window.matchMedia('(display-mode: standalone)').matches
    ? `<div class="installbar">${svg('download')}<div><b>התקן את האפליקציה:</b> ${installText}</div></div>` : '';
  return `<div class="screen">
    ${heroHeader(statusLine)}
    <div class="body">
      ${installHint}
      ${listHTML}
    </div>
    <div class="fab-wrap"><button class="fab" onclick="startAdd()">${svg('plus')}הוספת משימה</button></div>
  </div>`;
}

function heroHeader(statusLine){
  return `<div class="cvhead">
    <div class="cvglow"></div>
    <button class="iconbtn cvgear" onclick="go('settings')" aria-label="הגדרות">${svg('gear')}</button>
    <div class="cvrow">
      ${vialSVG()}
      <div class="cvtitle">
        <div class="cvname">COMPOUND <span class="v">V</span></div>
        <div class="cvsub">${esc(statusLine)}</div>
      </div>
    </div>
    <div class="cvver">v${APP_VERSION}</div>
  </div>`;
}

function vialSVG(){
  return `<svg class="cvvial" viewBox="0 0 46 58" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="serumg" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stop-color="#0891b2"/><stop offset=".45" stop-color="#22d3ee"/><stop offset="1" stop-color="#67e8f9"/>
      </linearGradient>
      <linearGradient id="glassg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".22"/><stop offset=".5" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff" stop-opacity=".08"/>
      </linearGradient>
      <clipPath id="vialclip"><path d="M15 12h16v34a8 8 0 0 1-16 0z"/></clipPath>
    </defs>
    <rect x="13" y="2" width="20" height="5" rx="1.5" fill="#7dd3fc"/>
    <rect x="16" y="6" width="14" height="4" fill="#38bdf8" opacity=".5"/>
    <path d="M15 11h16v35a8 8 0 0 1-16 0z" fill="#0a1524" stroke="#2dd4bf" stroke-width="1.4" stroke-opacity=".7"/>
    <g clip-path="url(#vialclip)">
      <g class="liq">
        <rect x="14" y="27" width="18" height="21" fill="url(#serumg)"/>
      </g>
      <ellipse cx="23" cy="27" rx="9" ry="1.8" fill="#a5f3fc" opacity=".9"/>
      <g class="bubbles">
        <circle cx="21" r="1.4" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="3.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.15;.85;1" dur="3.6s" repeatCount="indefinite"/>
          <animate attributeName="r" values="0.7;1.4;1.2" keyTimes="0;.3;1" dur="3.6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="25" r="1" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="4.4s" begin="1.3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.85;.85;0" keyTimes="0;.15;.85;1" dur="4.4s" begin="1.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="23" r="1.7" fill="#e0fbff">
          <animate attributeName="cy" values="45;27" dur="4s" begin="2.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.15;.85;1" dur="4s" begin="2.2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="0.8;1.7;1.4" keyTimes="0;.3;1" dur="4s" begin="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="19" r="0.9" fill="#cffafe">
          <animate attributeName="cy" values="45;27" dur="4.8s" begin=".7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.8;.8;0" keyTimes="0;.15;.85;1" dur="4.8s" begin=".7s" repeatCount="indefinite"/>
        </circle>
      </g>
    </g>
    <path d="M15 11h16v35a8 8 0 0 1-16 0z" fill="url(#glassg)"/>
    <path d="M18 14v30" stroke="#ffffff" stroke-opacity=".4" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function homeStatus(live){
  const overdue = live.filter(t=>daysBetween(t.finish)<0).length;
  const today = live.filter(t=>daysBetween(t.finish)===0).length;
  if(live.length===0) return 'הכול רגוע — אין הגשות קרובות';
  const parts=[];
  if(today) parts.push(today===1?'משימה אחת להיום':`${today} משימות להיום`);
  if(overdue) parts.push(overdue===1?'אחת עברה את הזמן':`${overdue} עברו את הזמן`);
  if(parts.length) return parts.join(' · ');
  const next = live[0]; const n = daysBetween(next.finish);
  return n===1 ? 'הכי קרוב: מחר' : `הכי קרוב: בעוד ${n} ימים`;
}

function taskRow(t){
  const d = distLabel(t.finish); const m = typeMeta(t.type);
  // Top line: subject · type · date · status pill (all identity info at a glance).
  // Second line: the note, with the full row width so it isn't cut off early.
  const note = (t.notes||'').trim().split('\n')[0].trim();
  return `<div class="task" onclick="go('detail',{id:'${t.id}'})">
    ${subjectTico(t.subject)}
    <div class="tmid">
      <div class="trow1">
        <span class="tsub">${esc(t.subject)}</span>
        <span class="tsep">·</span>
        <span class="ttype">${m.label}</span>
        <span class="tdate">${fmtDate(t.finish)}</span>
        <span class="pill ${d.cls}">${d.txt}</span>
      </div>
      ${note ? `<div class="tnote">${esc(note)}</div>` : ''}
    </div>
  </div>`;
}

/* ---------- ADD FLOW ---------- */
function startAdd(){ draft={}; go('subject'); }

function SubjectPick(){
  const cards = SUBJECTS.map(s=>{
    const c = s.color || DEFAULT_COLOR;
    return `<button class="subcard" onclick="pickSubject('${esc(s.name).replace(/'/g,"\\'")}')">
      <span style="color:${c}">${svg(s.icon)}</span><span>${esc(s.name)}</span>
    </button>`;
  }).join('');
  return `<div class="screen">
    ${header('איזה מקצוע?',{back:'home'})}
    <div class="body"><div class="pad"><div class="grid2">${cards}</div></div></div>
  </div>`;
}
function pickSubject(name){ draft.subject=name; go('type'); }

function TypePick(){
  const cards = TYPES.map(t=>`
    <button class="typecard" onclick="pickType('${t.k}')">${svg(t.icon)}${t.label}</button>`).join('');
  return `<div class="screen">
    ${header(draft.subject,{back:'subject'})}
    <div class="body"><div class="pad"><div class="typelist">${cards}</div></div></div>
  </div>`;
}
function pickType(k){ draft.type=k; go('date'); }

function DatePick(){
  const m = typeMeta(draft.type);
  const q = (draft.type==='test'||draft.type==='quiz') ? 'מתי זה?' : 'מתי צריך להגיש?';
  return `<div class="screen">
    ${header(draft.subject, {back:'type', sub:m.label})}
    <div class="body"><div class="pad">
      <div class="qlabel">${q}</div>
      <div class="grid2">
        <button class="datebtn" onclick="saveTask(0)">היום</button>
        <button class="datebtn" onclick="saveTask(1)">מחר</button>
        <button class="datebtn" onclick="saveTask(2)">בעוד יומיים</button>
        <button class="datebtn" onclick="saveTask(7)">שבוע הבא</button>
      </div>
      <button class="pickdate" onclick="openDatePicker(event)">${svg('cal')}בחירת תאריך מדויק
        <input type="date" id="exactdate" onchange="if(this.value)saveExact(this.value)">
      </button>
    </div></div>
  </div>`;
}

function newId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
async function commitTask(finishDate){
  const t = {id:newId(), subject:draft.subject, type:draft.type, given:toISO(TODAY), finish:toISO(finishDate), done:false, createdAt:Date.now()};
  TASKS.push(t);
  await Store.saveTasks(TASKS);
  logAction('add', t);
  // Land on the new task's detail so the note can be written straight away —
  // notes now show on the home rows, so they're worth inviting.
  // Collapse the add-flow stack to [home, detail] so back from here goes home
  // rather than replaying subject/type/date. We reuse the sentinel that's
  // already armed (do NOT history.back() here — its popstate is async and
  // would race with the render, bouncing us off the detail screen).
  nav = {screen:'detail', id:t.id, fresh:true};
  navStack = [{screen:'home'}, nav];
  render();
  // no toast here — the on-screen banner already confirms the save, and the
  // toast overlapped the buttons.
}
function saveTask(n){ commitTask(addDays(TODAY,n)); }
function saveExact(v){ commitTask(new Date(v+'T00:00:00')); }
function openDatePicker(e){
  e.preventDefault();
  const inp = document.getElementById('exactdate');
  if(!inp) return;
  if(typeof inp.showPicker === 'function'){
    try { inp.showPicker(); return; } catch(_){}
  }
  inp.focus(); inp.click();
}

/* ---------- DETAIL ---------- */
function Detail(){
  const t = TASKS.find(x=>x.id===nav.id);
  if(!t) return Home();
  const m = typeMeta(t.type); const d = distLabel(t.finish);
  const chosen = t.sources || [];
  const chips = SOURCES.map(s=>{
    const on = chosen.includes(s.name);
    const c = s.color || DEFAULT_COLOR;
    return `<button class="srcchip ${on?'on':''}" style="${on?`border-color:${c};background:${tint(c)};color:${c}`:''}" onclick="toggleSource('${t.id}','${esc(s.name).replace(/'/g,"\\'")}')">
      <span style="color:${on?c:'var(--ink-dim)'};display:grid;place-items:center">${svg(s.icon)}</span>${esc(s.name)}</button>`;
  }).join('');
  // any chosen source that has a URL gets an open link
  const openable = SOURCES.filter(s=>chosen.includes(s.name) && s.url);
  const openLinks = openable.length ? `<div class="opensrc">${openable.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener" class="openlink" style="color:${s.color||DEFAULT_COLOR}">${svg('globe')}פתיחת ${esc(s.name)}</a>`).join('')}</div>` : '';
  const notes = t.notes || '';
  const freshBanner = nav.fresh ? `<div class="freshbar">${svg('check')}<span>המשימה נשמרה. אפשר להוסיף פרטים, או לחזור למסך הראשי.</span></div>` : '';
  return `<div class="screen">
    ${header('משימה',{back:'home'})}
    <div class="body">
      ${freshBanner}
      <div class="dhead">
        <div class="tico" style="width:52px;height:52px;background:${tint(subjectColor(t.subject))};color:${subjectColor(t.subject)}">${svg(subjectIcon(t.subject))}</div>
        <div><div class="dsub">${esc(t.subject)}</div><div class="dtype">${m.label}</div></div>
      </div>
      <div class="drow"><span class="dk">${finishLabel(t.type)}</span>
        <span class="dv edit" onclick="openFinishPicker(event)">${fmtDate(t.finish)} · ${d.txt} <span class="hint">· שינוי</span>
          <input type="date" id="finishdate" value="${toISO(t.finish)}" onchange="if(this.value)editFinish('${t.id}',this.value)">
        </span></div>
      <div class="drow"><span class="dk">תאריך קבלה</span>
        <span class="dv edit" onclick="openGivenPicker(event)">${fmtDate(t.given)} <span class="hint">· שינוי</span>
          <input type="date" id="givendate" value="${toISO(t.given)}" onchange="if(this.value)editGiven('${t.id}',this.value)">
        </span></div>

      <div class="sectlabel">איפה החומר?</div>
      <div class="srcchips">${chips}</div>
      ${openLinks}

      <div class="sectlabel">פרטים והערות</div>
      <div class="pad" style="padding-top:4px">
        ${notes ? `
          <div class="notesview" id="notesview">${linkify(notes)}</div>
          <button class="btn ghost" style="margin-top:2px" onclick="startEditNotes('${t.id}')">${svg('pen')}עריכת ההערות</button>
          <div id="noteseditor" style="display:none">
            <textarea class="notesarea" id="notesarea" oninput="autoGrow(this)">${esc(notes)}</textarea>
            <button class="btn ghost" style="margin-top:6px" onclick="saveNotes('${t.id}')">${svg('check')}שמירה</button>
          </div>
        ` : `
          <textarea class="notesarea" id="notesarea" placeholder="קישור לחומר, מה צריך להכין, דגשים למבחן..." oninput="autoGrow(this)"></textarea>
          <button class="btn ghost" style="margin-top:6px" onclick="saveNotes('${t.id}')">${svg('check')}שמירת הערות</button>
        `}
      </div>

      <div class="sectlabel">תמונות</div>
      <div class="pad" style="padding-top:4px">
        <div class="imgstrip" id="imgstrip"></div>
        ${(t.images||[]).length < MAX_IMAGES ? `
          <button class="btn ghost" onclick="pickImage('${t.id}')">${svg('camera')}הוספת תמונה</button>
          <input type="file" id="imgInput" accept="image/*" capture="environment" style="display:none" onchange="onImagePicked('${t.id}', this)">
          <div style="font-size:12px;color:var(--ink-faint);margin-top:6px">תמונה של הלוח, דף עבודה וכו'. עד ${MAX_IMAGES} תמונות.</div>
        ` : `<div style="font-size:12.5px;color:var(--ink-faint)">הגעת למקסימום (${MAX_IMAGES} תמונות).</div>`}
      </div>

      <div class="detailactions">
        <button class="backbtn" onclick="goBack()">${svg('chevR')}<span>חזרה למסך הראשי</span></button>
        <div class="donerow">
          <button class="donebtn" onclick="markDone('${t.id}')">${svg('check')}<span>המשימה הושלמה!</span></button>
          <span class="donenote">המשימה תעבור ל"בוצע"</span>
        </div>
        <div class="dangerzone">
          <button class="linkbtn" onclick="askDelete('${t.id}')">מחיקת המשימה</button>
        </div>
      </div>
    </div>
  </div>`;
}
function linkify(text){
  return esc(text).replace(/(https?:\/\/[^\s<]+)/g, u=>`<a href="${u}" target="_blank" rel="noopener">${u}</a>`).replace(/\n/g,'<br>');
}
async function toggleSource(id, name){
  const t = TASKS.find(x=>x.id===id); if(!t) return;
  t.sources = t.sources || [];
  const i = t.sources.indexOf(name);
  let added;
  if(i>=0){ t.sources.splice(i,1); added=false; } else { t.sources.push(name); added=true; }
  await Store.saveTasks(TASKS);
  logAction(added?'source_add':'source_remove', t, {source:name});
  render();
}
async function saveNotes(id){
  const t = TASKS.find(x=>x.id===id); if(!t) return;
  const had = !!(t.notes && t.notes.trim());
  t.notes = document.getElementById('notesarea').value;
  await Store.saveTasks(TASKS);
  logAction(had?'notes_edit':'notes_add', t);
  render(); toast('נשמר');
}
function autoGrow(el){ el.style.height='auto'; el.style.height=(el.scrollHeight)+'px'; }

/* ---------- images ---------- */
function pickImage(taskId){ document.getElementById('imgInput')?.click(); }

async function onImagePicked(taskId, input){
  const file = input.files && input.files[0];
  if(!file) return;
  input.value = '';                       // allow re-picking the same file
  const t = TASKS.find(x=>x.id===taskId); if(!t) return;
  t.images = t.images || [];
  if(t.images.length >= MAX_IMAGES){ toast(`עד ${MAX_IMAGES} תמונות`); return; }
  toast('מעבד תמונה…');
  try{
    const rec = await Store.addImage(taskId, file);
    t.images.push({id:rec.id, localKey:rec.localKey, pending:true, addedAt:Date.now()});
    await Store.saveTasks(TASKS);
    logAction('image_add', t, {imageId:rec.id, size:rec.size});
    render();
    toast(Store.isSignedIn && Store.isSignedIn() ? 'נוספה' : 'נשמרה במכשיר · תעלה כשיהיה חיבור');
  }catch(e){
    toast('לא ניתן לטעון את התמונה');
  }
}

// thumbnails are filled after render (URLs are async: signed remote or local blob)
async function fillImages(){
  const strip = document.getElementById('imgstrip');
  if(!strip) return;
  const t = TASKS.find(x=>x.id===nav.id);
  const imgs = (t && t.images) || [];
  if(!imgs.length){ strip.innerHTML=''; return; }
  strip.innerHTML = imgs.map(im=>`
    <div class="thumb" data-id="${im.id}">
      <div class="thumbload"></div>
      ${im.pending?'<span class="pendingdot" title="ממתינה להעלאה"></span>':''}
    </div>`).join('');
  for(const im of imgs){
    const url = await Store.imageUrl(im, t.id);
    const el = strip.querySelector(`.thumb[data-id="${im.id}"]`);
    if(el && url){
      el.style.backgroundImage = `url("${url}")`;
      el.querySelector('.thumbload')?.remove();
      el.onclick = ()=>viewImage(t.id, im.id, url);
    }
  }
}

function viewImage(taskId, imgId, url){
  const wrap = document.createElement('div');
  wrap.className = 'lightbox';
  wrap.innerHTML = `
    <img src="${url}" alt="">
    <button class="lbclose" aria-label="סגירה">${svg('x')}</button>
    <button class="lbdel">${svg('trash')} מחיקת התמונה</button>`;
  wrap.onclick = (e)=>{ if(e.target===wrap) wrap.remove(); };
  wrap.querySelector('.lbclose').onclick = ()=>wrap.remove();
  wrap.querySelector('.lbdel').onclick = async ()=>{
    wrap.remove();
    await removeImage(taskId, imgId);
  };
  document.body.appendChild(wrap);
}

async function removeImage(taskId, imgId){
  const t = TASKS.find(x=>x.id===taskId); if(!t || !t.images) return;
  const img = t.images.find(i=>i.id===imgId); if(!img) return;
  await Store.deleteImage(taskId, img);
  t.images = t.images.filter(i=>i.id!==imgId);
  await Store.saveTasks(TASKS);
  logAction('image_remove', t, {imageId:imgId});
  render(); toast('נמחקה');
}

// the storage layer calls this when a queued upload completes
window.onImagesChanged = function(){ if(nav.screen==='detail') fillImages(); };

/*
  buildDigest(dayStart, dayEnd) -> the object the daily email will render.
  Server-side, the scheduled job will build this exact structure from the
  synced log + tasks and email it to the parent. Here we build it locally so
  the summary is previewable now.
*/
async function buildDigest(dayStart, dayEnd){
  const log = await Store.getLog();
  const inDay = log.filter(e => e.ts>=dayStart && e.ts<dayEnd);

  // ---- ACTIONS TODAY (summarized: net changes, not every fiddle) ----
  const added = inDay.filter(e=>e.event==='add');
  const done = inDay.filter(e=>e.event==='done');
  const deleted = inDay.filter(e=>e.event==='delete');
  // for the assigned-vs-logged gap on things added today
  const addedWithGap = added.map(e=>{
    const gap = Math.round((midnight(new Date(e.data.finish)) - midnight(new Date(e.data.given)))/86400000);
    return {subject:e.data.subject, type:e.data.type, finish:e.data.finish, sameDayLogged: true, gap};
  });

  // ---- STATUS NOW ----
  const open = TASKS.filter(t=>!t.done);
  const overdue = open.filter(t=>daysBetween(t.finish)<0)
    .map(t=>({subject:t.subject, type:t.type, finish:t.finish, daysLate: -daysBetween(t.finish)}));
  const dueTomorrow = open.filter(t=>daysBetween(t.finish)===1)
    .map(t=>({subject:t.subject, type:t.type, finish:t.finish}));
  const dueToday = open.filter(t=>daysBetween(t.finish)===0)
    .map(t=>({subject:t.subject, type:t.type, finish:t.finish}));

  return {
    date: new Date(dayStart).toISOString().slice(0,10),
    actions: {
      addedCount: added.length,
      doneCount: done.length,
      deletedCount: deleted.length,
      added: addedWithGap,
      done: done.map(e=>({subject:e.data.subject, type:e.data.type})),
    },
    status: {
      openCount: open.length,
      overdue, dueToday, dueTomorrow,
    }
  };
}
function startEditNotes(id){
  const view = document.getElementById('notesview');
  const btn = view && view.nextElementSibling;
  const editor = document.getElementById('noteseditor');
  if(view) view.style.display='none';
  if(btn) btn.style.display='none';
  if(editor){ editor.style.display='block'; const ta=document.getElementById('notesarea'); autoGrow(ta); ta.focus(); }
}
async function markDone(id){ const t=TASKS.find(x=>x.id===id); if(t){t.done=true;t.doneAt=Date.now(); logAction('done', t);} await Store.saveTasks(TASKS); goHomeReset(); toast('כל הכבוד'); }
async function editGiven(id,v){ const t=TASKS.find(x=>x.id===id); if(t){const old=t.given; t.given=toISO(new Date(v+'T00:00:00')); logAction('edit_given', t, {from:old, to:t.given});} await Store.saveTasks(TASKS); render(); }
async function editFinish(id,v){
  const t=TASKS.find(x=>x.id===id);
  if(t){ const old=t.finish; t.finish=toISO(new Date(v+'T00:00:00')); logAction('edit_finish', t, {from:old, to:t.finish}); }
  await Store.saveTasks(TASKS); render(); toast('התאריך עודכן');
}
// hidden-input date pickers need showPicker(); a bare click on a transparent
// input doesn't reliably open the native picker (esp. desktop Chrome).
function openFinishPicker(e){
  const inp = document.getElementById('finishdate');
  if(!inp) return;
  if(typeof inp.showPicker === 'function'){ try{ inp.showPicker(); e.preventDefault(); return; }catch(_){} }
  inp.focus(); inp.click();
}
function openGivenPicker(e){
  const inp = document.getElementById('givendate');
  if(!inp) return;
  if(typeof inp.showPicker === 'function'){ try{ inp.showPicker(); e.preventDefault(); return; }catch(_){} }
  inp.focus(); inp.click();
}
/*
  Deletion is the only irreversible action in the app and sits near other
  buttons, so it always asks first and names the task — an accidental tap
  should never lose his record. It also points out that "completed" is usually
  what he wants instead, since that keeps the task in history.
*/
function askDelete(id){
  const t = TASKS.find(x=>x.id===id); if(!t) return;
  const m = typeMeta(t.type);
  const wrap = document.createElement('div');
  wrap.className = 'modalwrap';
  wrap.innerHTML = `
    <div class="modal">
      <div class="modaltitle">למחוק את המשימה?</div>
      <div class="modalbody"><b>${esc(t.subject)}</b> · ${m.label}<br>
        <span style="color:var(--ink-faint);font-size:13px">${fmtDate(t.finish)}</span></div>
      <div class="modalnote">אי אפשר לבטל מחיקה. אם סיימת אותה — עדיף "המשימה הושלמה!", כך היא נשמרת בהיסטוריה.</div>
      <div class="modalbtns">
        <button class="mbtn cancel" onclick="closeModal()">ביטול</button>
        <button class="mbtn danger" onclick="confirmDelete('${t.id}')">מחיקה</button>
      </div>
    </div>`;
  wrap.onclick = (e)=>{ if(e.target===wrap) closeModal(); };
  document.body.appendChild(wrap);
}
function closeModal(){ const m=document.querySelector('.modalwrap'); if(m) m.remove(); }
async function confirmDelete(id){ closeModal(); await delTask(id); }
async function delTask(id){ const t=TASKS.find(x=>x.id===id); if(t) logAction('delete', t); TASKS=TASKS.filter(x=>x.id!==id); await Store.saveTasks(TASKS); goHomeReset(); toast('נמחק'); }

/* ---------- SETTINGS ---------- */
function Settings(){
  const rows = SUBJECTS.map((s,i)=>`
    <div class="setrow" onclick="editSubject(${i})" style="cursor:pointer">
      <span class="sname"><span style="color:${s.color||DEFAULT_COLOR};display:grid;place-items:center">${svg(s.icon)}</span>${esc(s.name)}</span>
      <span class="dv" style="color:var(--ink-faint)">${svg('chevL')}</span>
    </div>`).join('');
  const doneCount = TASKS.filter(t=>t.done).length;
  const srcRows = SOURCES.map((s,i)=>`
    <div class="setrow" onclick="editSource(${i})" style="cursor:pointer">
      <span class="sname"><span style="color:${s.color||DEFAULT_COLOR};display:grid;place-items:center">${svg(s.icon)}</span>${esc(s.name)}${s.url?`<span style="color:var(--ink-faint);font-weight:400;font-size:12px">מקושר</span>`:''}</span>
      <span class="dv" style="color:var(--ink-faint)">${svg('chevL')}</span>
    </div>`).join('');
  return `<div class="screen">
    ${header('הגדרות',{back:'home'})}
    <div class="body">
      <div class="sectlabel">מקצועות</div>
      <div class="addrow">
        <input class="inp" id="newsub" placeholder="שם מקצוע חדש" onkeydown="if(event.key==='Enter')addSubject()">
        <button class="addbtn" onclick="addSubject()">הוספה</button>
      </div>
      <div id="iconpickwrap" style="padding:0 18px"></div>
      ${rows}
      <div class="sectlabel">מקורות · "איפה החומר?"</div>
      ${srcRows}
      <div class="setrow" onclick="addSourceScreen()" style="cursor:pointer;color:var(--accent)">
        <span class="sname"><span style="color:var(--accent);display:grid;place-items:center">${svg('plus')}</span>הוספת מקור</span>
      </div>
      <div class="sectlabel">כללי</div>
      <div class="seg" role="group" aria-label="ערכת נושא">
        <button class="${(SETTINGS.theme||'auto')==='light'?'on':''}" onclick="setTheme('light')">בהיר</button>
        <button class="${(SETTINGS.theme||'auto')==='dark'?'on':''}" onclick="setTheme('dark')">כהה</button>
        <button class="${(SETTINGS.theme||'auto')==='auto'?'on':''}" onclick="setTheme('auto')">אוטומטי</button>
      </div>
      <div class="setrow" onclick="go('done')" style="cursor:pointer">
        <span class="sname">${svg('check')}משימות שבוצעו</span>
        <span class="dv" style="color:var(--ink-faint);font-weight:500">${doneCount} ${svg('chevL')}</span>
      </div>

      <div class="sectlabel">חשבון וסנכרון</div>
      ${accountSection()}

      <div class="sectlabel">תזכורות</div>
      <div id="reminders-section" class="pad" style="padding-top:4px">
        <div style="font-size:13px;color:var(--ink-dim)">טוען…</div>
      </div>

      <div class="sectlabel">סיכום יומי להורה</div>
      <div class="pad" style="padding-top:4px">
        <div style="font-size:13px;color:var(--ink-dim);margin-bottom:10px;line-height:1.5">
          מייל עם סיכום יומי (מה עשית היום ומה מצב המשימות) יישלח להורה. שבו יחד והזינו את הכתובת פעם אחת.
        </div>
        <input class="inp" id="parentemail" value="${esc(SETTINGS.parentEmail||'')}" placeholder="אימייל של הורה" dir="ltr" style="width:100%;margin-bottom:8px" inputmode="email">
        <button class="btn ghost" onclick="saveParentEmail()">${svg('check')}שמירת כתובת</button>
        ${SETTINGS.parentEmail ? `
          <div style="font-size:12.5px;color:var(--ink-faint);margin-top:10px;display:flex;align-items:center;gap:6px">
            ${SETTINGS.parentEmailVerified ? svg('check')+'הכתובת אושרה' : svg('clock')+'ממתין לאישור (כשהסנכרון יופעל)'}
          </div>
          <div style="font-size:12.5px;color:var(--ink-dim);margin-top:2px">סיכום יומי נשלח ל: <span dir="ltr">${esc(SETTINGS.parentEmail)}</span></div>
        ` : ''}
        <button class="btn ghost" style="margin-top:10px" onclick="go('digest')">${svg('quote')}תצוגה מקדימה של הסיכום</button>
      </div>

      <div class="sectlabel">גרסה</div>
      <div class="pad" style="padding-top:4px;padding-bottom:30px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <span style="font-size:14px;color:var(--ink-dim)">גרסה מותקנת</span>
          <span style="font-size:14px;font-weight:600" dir="ltr">v${APP_VERSION}</span>
        </div>
        <button class="btn ghost" onclick="forceUpdate()">${svg('download')}בדיקת עדכון וריענון</button>
        <div style="font-size:12px;color:var(--ink-faint);margin-top:8px;line-height:1.5">
          מוריד את הגרסה האחרונה ומרענן. הנתונים נשמרים.
        </div>
      </div>
    </div>
  </div>`;
}

/*
  Force-update: the service worker caches the app files, so a new deploy can keep
  serving the old build until the cache turns over. This clears it deliberately:
  unregister the SW, delete its caches, then hard-reload from the network.
  Task data lives in localStorage (and the cloud), so it is NOT touched.
*/
async function forceUpdate(){
  toast('מוריד עדכון…');
  try{
    if('serviceWorker' in navigator){
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if(window.caches){
      const keys = await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
    // Also punch through the browser's HTTP cache for the core files — clearing
    // SW caches alone isn't enough if the HTTP cache still holds old copies.
    await Promise.all(['index.html','app.js','styles.css','storage-supabase.js','config.js','sw.js']
      .map(f => fetch(f + '?cb=' + Date.now(), {cache:'reload'}).catch(()=>null)));
  }catch(e){ /* proceed to reload regardless */ }
  // cache-busting reload so the browser refetches index.html itself
  const url = location.href.split('#')[0].split('?')[0] + '?u=' + Date.now();
  location.replace(url);
}
async function saveParentEmail(){
  const v = document.getElementById('parentemail').value.trim();
  if(v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ toast('כתובת לא תקינה'); return; }
  SETTINGS.parentEmail = v;
  SETTINGS.parentEmailVerified = false; // will require a confirm click once backend can send
  await Store.saveSettings(SETTINGS);
  render(); toast('נשמר');
}

function accountSection(){
  // Sync not configured yet (config.js empty) — explain, stay local.
  if(!Store.syncEnabled || !Store.syncEnabled()){
    return `<div class="pad" style="padding-top:4px">
      <div style="font-size:13px;color:var(--ink-dim);line-height:1.5">
        הסנכרון עדיין לא מוגדר. האפליקציה עובדת מקומית במכשיר הזה. כשה־Supabase יחובר, אפשר יהיה להתחבר ולסנכרן בין מכשירים.
      </div>
    </div>`;
  }
  if(Store.isSignedIn && Store.isSignedIn()){
    return `<div class="pad" style="padding-top:4px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="color:var(--green);display:grid;place-items:center">${svg('check')}</span>
        <span style="font-size:14.5px">מחובר · הנתונים מסתנכרנים</span>
      </div>
      <button class="btn ghost" onclick="doSignOut()">התנתקות</button>
    </div>`;
  }
  return `<div class="pad" style="padding-top:4px">
    <div style="font-size:13px;color:var(--ink-dim);line-height:1.5;margin-bottom:12px">
      התחבר כדי לשמור את הנתונים בענן ולסנכרן בין מכשירים (וכדי שהסיכום היומי יישלח).
    </div>
    <button class="btn" onclick="doSignInGoogle()">${svg('globe')}התחברות עם Google</button>
  </div>`;
}
async function doSignInGoogle(){ if(Store.signInWithGoogle) await Store.signInWithGoogle(); }
async function doSignOut(){ if(Store.signOut){ await Store.signOut(); render(); toast('התנתקת'); } }

// Supabase layer calls these when auth changes or a sync completes.
window.onAuthChanged = function(){ if(nav.screen==='settings') render(); };
window.afterSync = async function(){
  // remote data may have replaced local; refresh in-memory copies and re-render
  TASKS = await Store.getTasks();
  SUBJECTS = await Store.getSubjects();
  SOURCES = await Store.getSources();
  SETTINGS = await Store.getSettings();
  render();
};
let pendingIcon = 'book';
let pendingColor = DEFAULT_COLOR;
function addSubject(){
  const el=document.getElementById('newsub'); const v=el.value.trim();
  if(!v) return;
  SUBJECTS.push({name:v, icon:pendingIcon, color:pendingColor});
  Store.saveSubjects(SUBJECTS);
  pendingIcon='book'; pendingColor=DEFAULT_COLOR; render();
  toast('נוסף');
}
function removeSubject(i){ SUBJECTS.splice(i,1); Store.saveSubjects(SUBJECTS); render(); }

/* ---------- EDIT SUBJECT ---------- */
function editSubject(i){
  const s = SUBJECTS[i];
  pendingIcon = s.icon; pendingColor = s.color || DEFAULT_COLOR;
  go('editsub',{editIndex:i});
}
function EditSubject(){
  const i = nav.editIndex; const s = SUBJECTS[i];
  if(!s) return Settings();
  return `<div class="screen">
    ${header('עריכת מקצוע',{back:'settings'})}
    <div class="body">
      <div class="pad">
        <div style="font-size:12px;color:var(--ink-dim);margin:2px 0 8px">שם</div>
        <input class="inp" id="editname" value="${esc(s.name)}" style="width:100%;margin-bottom:6px">
        <div id="editpickwrap"></div>
      </div>
      <div class="dactions">
        <button class="btn" onclick="saveSubjectEdit()">${svg('check')}שמירה</button>
        <button class="btn ghost" onclick="removeSubjectAndBack()">מחיקת המקצוע</button>
      </div>
    </div>
  </div>`;
}
async function saveSubjectEdit(){
  const i = nav.editIndex; const s = SUBJECTS[i];
  const name = document.getElementById('editname').value.trim();
  const oldName = s.name;
  if(name) s.name = name;
  s.icon = pendingIcon; s.color = pendingColor;
  await Store.saveSubjects(SUBJECTS);
  if(name && name!==oldName){
    TASKS.forEach(t=>{ if(t.subject===oldName) t.subject=name; });
    await Store.saveTasks(TASKS);
  }
  go('settings'); toast('נשמר');
}
async function removeSubjectAndBack(){
  SUBJECTS.splice(nav.editIndex,1);
  await Store.saveSubjects(SUBJECTS);
  go('settings'); toast('נמחק');
}

/* ---------- ADD / EDIT SOURCE ---------- */
function addSourceScreen(){
  pendingIcon='globe'; pendingColor=DEFAULT_COLOR;
  go('editsrc',{srcIndex:-1});
}
function editSource(i){
  const s = SOURCES[i];
  pendingIcon = s.icon; pendingColor = s.color || DEFAULT_COLOR;
  go('editsrc',{srcIndex:i});
}
function EditSource(){
  const i = nav.srcIndex; const isNew = i<0;
  const s = isNew ? {name:'',url:'',icon:'globe',color:DEFAULT_COLOR} : SOURCES[i];
  return `<div class="screen">
    ${header(isNew?'מקור חדש':'עריכת מקור',{back:'settings'})}
    <div class="body">
      <div class="pad">
        <div style="font-size:12px;color:var(--ink-dim);margin:2px 0 8px">שם</div>
        <input class="inp" id="srcname" value="${esc(s.name)}" placeholder="למשל: Google Classroom" style="width:100%;margin-bottom:14px">
        <div style="font-size:12px;color:var(--ink-dim);margin:2px 0 8px">קישור (לא חובה)</div>
        <input class="inp" id="srcurl" value="${esc(s.url||'')}" placeholder="https://..." dir="ltr" style="width:100%;margin-bottom:6px">
        <div style="font-size:12px;color:var(--ink-faint);margin-bottom:4px">אם תוסיף קישור, לחיצה על המקור במשימה תוכל לפתוח אותו ישירות</div>
        <div id="editpickwrap"></div>
      </div>
      <div class="dactions">
        <button class="btn" onclick="saveSource()">${svg('check')}שמירה</button>
        ${isNew?'':`<button class="btn ghost" onclick="removeSource()">מחיקת המקור</button>`}
      </div>
    </div>
  </div>`;
}
async function saveSource(){
  const name = document.getElementById('srcname').value.trim();
  let url = document.getElementById('srcurl').value.trim();
  if(!name) { toast('צריך שם'); return; }
  if(url && !/^https?:\/\//i.test(url)) url = 'https://'+url;
  const obj = {name, url, icon:pendingIcon, color:pendingColor};
  if(nav.srcIndex<0) SOURCES.push(obj); else SOURCES[nav.srcIndex]=obj;
  await Store.saveSources(SOURCES);
  go('settings'); toast('נשמר');
}
async function removeSource(){
  const removed = SOURCES[nav.srcIndex];
  SOURCES.splice(nav.srcIndex,1);
  await Store.saveSources(SOURCES);
  // also untag it from any tasks
  TASKS.forEach(t=>{ if(t.sources) t.sources = t.sources.filter(n=>n!==removed.name); });
  await Store.saveTasks(TASKS);
  go('settings'); toast('נמחק');
}

/* ---------- DONE HISTORY ---------- */
function DoneHistory(){
  const done = TASKS.filter(t=>t.done).sort((a,b)=>(b.doneAt||0)-(a.doneAt||0));
  let body;
  if(done.length===0){
    body = `<div class="empty">${svg('check')}<div>עדיין אין משימות שבוצעו.</div></div>`;
  } else {
    body = done.map(t=>{
      const gap = Math.round((midnight(t.finish)-midnight(t.given))/86400000);
      const m = typeMeta(t.type);
      return `<div class="task" style="cursor:default">
        <div class="tico" style="color:var(--green)">${svg('check')}</div>
        <div class="tmid"><div class="tsub">${esc(t.subject)}</div><div class="ttype">${m.label} · התקבל ${fmtDate(t.given)}</div></div>
      </div>`;
    }).join('');
  }
  return `<div class="screen">${header('משימות שבוצעו',{back:'settings'})}<div class="body">${body}</div></div>`;
}

/* ---------- DIGEST PREVIEW (what the parent's daily email will contain) ---------- */
function DigestPreview(){
  // async fill
  setTimeout(async ()=>{
    const start = TODAY.getTime();
    const end = start + 86400000;
    const dg = await buildDigest(start, end);
    const el = document.getElementById('digestbody');
    if(el) el.innerHTML = renderDigest(dg);
  },0);
  return `<div class="screen">
    ${header('הסיכום היומי',{back:'settings', sub:'כך ייראה המייל שיישלח להורה'})}
    <div class="body"><div id="digestbody"><div class="empty">${svg('quote')}<div>בונה תצוגה…</div></div></div></div>
  </div>`;
}
function renderDigest(dg){
  const typeLabel = k => (TYPES.find(t=>t.k===k)||{}).label || k;
  const line = (txt) => `<div style="font-size:14.5px;color:var(--ink);padding:6px 0;border-bottom:1px solid var(--line)">${txt}</div>`;
  const gapText = g => g<0 ? `הוגדר להגשה ${-g} ימים לפני שהתקבל` : g===0 ? 'להגשה היום' : `${g} ימים עד ההגשה`;

  let actionsHTML;
  const a = dg.actions;
  if(a.addedCount===0 && a.doneCount===0){
    actionsHTML = `<div style="color:var(--ink-faint);font-size:14px;padding:6px 0">לא היו פעולות היום.</div>`;
  } else {
    actionsHTML = '';
    if(a.addedCount) actionsHTML += `<div style="font-weight:600;font-size:13px;color:var(--ink-dim);margin:8px 0 2px">הוסיף (${a.addedCount}):</div>` +
      a.added.map(x=>line(`${esc(x.subject)} · ${typeLabel(x.type)} — <span style="color:var(--ink-dim)">${gapText(x.gap)}</span>`)).join('');
    if(a.doneCount) actionsHTML += `<div style="font-weight:600;font-size:13px;color:var(--ink-dim);margin:10px 0 2px">סימן כבוצע (${a.doneCount}):</div>` +
      a.done.map(x=>line(`${esc(x.subject)} · ${typeLabel(x.type)}`)).join('');
  }

  const s = dg.status;
  let statusHTML = '';
  statusHTML += `<div style="font-weight:600;font-size:13px;color:var(--ink-dim);margin:8px 0 2px">פתוח כרגע: ${s.openCount}</div>`;
  if(s.overdue.length) statusHTML += `<div style="font-weight:600;font-size:13px;color:var(--red);margin:10px 0 2px">עבר הזמן (${s.overdue.length}):</div>` +
    s.overdue.map(x=>line(`${esc(x.subject)} · ${typeLabel(x.type)} — <span style="color:var(--red)">${x.daysLate} ימים באיחור</span>`)).join('');
  if(s.dueToday.length) statusHTML += `<div style="font-weight:600;font-size:13px;color:var(--amber);margin:10px 0 2px">להיום (${s.dueToday.length}):</div>` +
    s.dueToday.map(x=>line(`${esc(x.subject)} · ${typeLabel(x.type)}`)).join('');
  if(s.dueTomorrow.length) statusHTML += `<div style="font-weight:600;font-size:13px;color:var(--amber);margin:10px 0 2px">למחר (${s.dueTomorrow.length}):</div>` +
    s.dueTomorrow.map(x=>line(`${esc(x.subject)} · ${typeLabel(x.type)}`)).join('');
  if(!s.overdue.length && !s.dueToday.length && !s.dueTomorrow.length) statusHTML += `<div style="color:var(--green);font-size:14px;padding:6px 0">אין משימות דחופות 👍</div>`;

  const to = SETTINGS.parentEmail ? `<div style="font-size:12px;color:var(--ink-faint);margin-bottom:14px" dir="ltr">אל: ${esc(SETTINGS.parentEmail)}</div>` : `<div style="font-size:12.5px;color:var(--amber);margin-bottom:14px">עדיין לא הוגדרה כתובת הורה בהגדרות</div>`;

  return `<div class="pad">
    <div style="background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:18px">
      <div style="font-weight:700;font-size:17px;margin-bottom:4px">Compound V — סיכום יומי</div>
      <div style="font-size:12.5px;color:var(--ink-faint);margin-bottom:12px">${dg.date}</div>
      ${to}
      <div class="sectlabel" style="padding:0 0 4px">מה קרה היום</div>
      ${actionsHTML}
      <div class="sectlabel" style="padding:14px 0 4px">איפה הדברים עומדים</div>
      ${statusHTML}
    </div>
  </div>`;
}

/* ---------- toast ---------- */
let toastT;
function toast(msg){
  let el=document.querySelector('.toast');
  if(!el){ el=document.createElement('div'); el.className='toast'; document.body.appendChild(el); }
  el.textContent=msg; requestAnimationFrame(()=>el.classList.add('show'));
  clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),1600);
}

/* render color + icon pickers wherever a picker wrap exists (add or edit) */
const _origRender = render;
render = function(){
  _origRender();
  const wrap = document.getElementById('iconpickwrap') || document.getElementById('editpickwrap');
  if(wrap){ wrap.innerHTML = pickerHTML(); }
  const rem = document.getElementById('reminders-section');
  if(rem){ fillReminders(rem); }
};

async function fillReminders(el){
  if(!Store.pushSupported || !Store.pushSupported()){
    el.innerHTML = `<div style="font-size:13px;color:var(--ink-dim);line-height:1.5">תזכורות יופעלו לאחר חיבור הסנכרון והתחברות. הן שולחות התראה לטלפון גם כשהאפליקציה סגורה.</div>`;
    return;
  }
  if(!Store.isSignedIn || !Store.isSignedIn()){
    el.innerHTML = `<div style="font-size:13px;color:var(--ink-dim);line-height:1.5">התחבר (למעלה) כדי להפעיל תזכורות.</div>`;
    return;
  }
  const status = await Store.pushStatus();
  if(status==='denied'){
    el.innerHTML = `<div style="font-size:13px;color:var(--amber);line-height:1.5">ההתראות חסומות בהגדרות הדפדפן/הטלפון. יש לאשר התראות עבור האתר כדי להפעיל תזכורות.</div>`;
    return;
  }
  const slots = SETTINGS.reminderSlots || {morning:true, afternoon:true, evening:true};
  if(status==='on'){
    const slotRow = (key, label, time) => `
      <div class="setrow" style="cursor:pointer" onclick="toggleSlot('${key}')">
        <span class="sname">${slots[key]!==false?`<span style="color:var(--green);display:grid;place-items:center">${svg('check')}</span>`:`<span style="color:var(--ink-faint);display:grid;place-items:center">${svg('clock')}</span>`}${label} · ${time}</span>
        <span class="switch ${slots[key]!==false?'on':''}"></span>
      </div>`;
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;padding:0 0 4px">
        <span style="color:var(--green);display:grid;place-items:center">${svg('check')}</span>
        <span style="font-size:14.5px">תזכורות פעילות</span>
      </div>
      <div style="font-size:12.5px;color:var(--ink-dim);margin-bottom:6px">שלוש תזכורות יומיות. אפשר לכבות כל אחת בנפרד:</div>
      ${slotRow('morning','בוקר','07:15')}
      ${slotRow('afternoon','צהריים','16:30')}
      ${slotRow('evening','ערב','20:00')}
      <button class="btn ghost" style="margin-top:14px" onclick="turnOffReminders()">כיבוי כל התזכורות</button>`;
  } else {
    el.innerHTML = `
      <div style="font-size:13px;color:var(--ink-dim);line-height:1.5;margin-bottom:12px">
        קבל תזכורות לטלפון (גם כשהאפליקציה סגורה): בוקר (07:15), צהריים (16:30) וערב (20:00), רק כשיש משהו לדווח.
      </div>
      <button class="btn" onclick="turnOnReminders()">${svg('clock')}הפעלת תזכורות</button>`;
  }
}
async function turnOnReminders(){
  try{
    const slots = SETTINGS.reminderSlots || {morning:true, afternoon:true, evening:true};
    await Store.enablePush(slots);
    SETTINGS.reminderSlots = slots;
    await Store.saveSettings(SETTINGS);
    toast('תזכורות הופעלו'); render();
  }catch(e){
    const m = String(e.message||e);
    if(m==='denied') toast('צריך לאשר התראות');
    else if(m==='not-signed-in') toast('צריך להתחבר קודם');
    else toast('לא ניתן להפעיל תזכורות');
  }
}
async function turnOffReminders(){ await Store.disablePush(); toast('תזכורות כובו'); render(); }
async function toggleSlot(key){
  const slots = Object.assign({morning:true, afternoon:true, evening:true}, SETTINGS.reminderSlots||{});
  slots[key] = slots[key]===false ? true : false;
  SETTINGS.reminderSlots = slots;
  await Store.saveSettings(SETTINGS);
  if(Store.setReminderSlots) await Store.setReminderSlots(slots);
  render();
}
function pickerHTML(){
  const colors = COLORS.map(c=>`<div class="coloropt ${c===pendingColor?'sel':''}" onclick="setPendingColor('${c}')" style="background:${c}"></div>`).join('');
  const icons = ICON_CHOICES.map(ic=>`<div class="iconopt ${ic===pendingIcon?'sel':''}" onclick="setPendingIcon('${ic}')" style="${ic===pendingIcon?`color:${pendingColor};border-color:${pendingColor}`:''}">${svg(ic)}</div>`).join('');
  return `
    <div style="font-size:12px;color:var(--ink-dim);margin:10px 0 8px">צבע</div>
    <div class="colorpick">${colors}</div>
    <div style="font-size:12px;color:var(--ink-dim);margin:14px 0 8px">סמל</div>
    <div class="iconpick" id="iconpickgrid">${icons}</div>`;
}
function setPendingColor(c){
  pendingColor=c;
  document.querySelectorAll('.coloropt').forEach(el=>el.classList.remove('sel'));
  event.currentTarget.classList.add('sel');
  const sel=document.querySelector('.iconopt.sel');
  if(sel){ sel.style.color=c; sel.style.borderColor=c; }
}
function setPendingIcon(ic){
  pendingIcon=ic;
  document.querySelectorAll('.iconopt').forEach(el=>{el.classList.remove('sel');el.style.color='';el.style.borderColor='';});
  const el=event.currentTarget; el.classList.add('sel'); el.style.color=pendingColor; el.style.borderColor=pendingColor;
}

boot();
