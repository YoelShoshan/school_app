// Bump this string on every deploy to force a fresh cache.
// Keep this in sync with APP_VERSION in app.js — bumping it forces all clients
// to fetch fresh files instead of serving the old cached build.
const VERSION = '1.3.1';
const CACHE = 'compound-v-' + VERSION;
const ASSETS = ['index.html','styles.css','config.js','storage-supabase.js','app.js','manifest.json','icon-192.png','icon-512.png'];

self.addEventListener('install', e => {
  // cache:'reload' so a new SW version never populates its cache from stale
  // HTTP-cached copies of the files.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(a =>
        fetch(new Request(a, {cache:'reload'}))
          .then(res => res.ok ? c.put(a, res) : null)
          .catch(()=>null)
      )))
      .then(()=>self.skipWaiting())
  );
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
    // IMPORTANT: cache:'reload' makes this bypass the browser's *HTTP* cache.
    // Without it, a plain fetch() can be served a stale file by the HTTP cache
    // even though we're "network-first" — which is how an installed PWA can keep
    // showing an old build no matter how many times you clear the SW caches.
    const req = new Request(e.request.url, {
      cache: 'reload',
      credentials: 'same-origin',
      headers: e.request.headers,
      mode: e.request.mode === 'navigate' ? 'same-origin' : e.request.mode,
      redirect: 'follow',
    });
    e.respondWith(
      fetch(req).then(res=>{
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
