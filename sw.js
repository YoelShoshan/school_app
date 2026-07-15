// Bump this string on every deploy to force a fresh cache.
// Keep this in sync with APP_VERSION in app.js — bumping it forces all clients
// to fetch fresh files instead of serving the old cached build.
const VERSION = '1.3.0';
const CACHE = 'compound-v-' + VERSION;
const ASSETS = ['index.html','styles.css','config.js','storage-supabase.js','app.js','manifest.json','icon-192.png','icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Let the page tell us to activate immediately.
self.addEventListener('message', e => {
  if(e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if(e.request.method!=='GET') return;
  const url = e.request.url;
  if(url.includes('supabase.co') || url.includes('supabase.com') || url.includes('@supabase')){ return; }

  const isSameOrigin = url.startsWith(self.location.origin);
  if(isSameOrigin){
    e.respondWith(
      fetch(e.request).then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
        return res;
      }).catch(()=> caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return res;
    }).catch(()=>hit))
  );
});

// ---- Push notifications (reminders) ----
self.addEventListener('push', e => {
  let payload = {};
  try { payload = e.data ? e.data.json() : {}; } catch { payload = {title:'Compound V', body: e.data ? e.data.text() : ''}; }
  const title = payload.title || 'Compound V';
  const options = {
    body: payload.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    dir: 'rtl', lang: 'he',
    data: { url: payload.url || './' },
    tag: payload.tag || 'compound-v-reminder',
    renotify: true,
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(list=>{
      for(const c of list){ if('focus' in c) return c.focus(); }
      if(clients.openWindow) return clients.openWindow(target);
    })
  );
});
