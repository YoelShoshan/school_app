const CACHE = 'hw-app-v2';
const ASSETS = ['index.html','styles.css','config.js','storage-supabase.js','app.js','manifest.json','icon-192.png','icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if(e.request.method!=='GET') return;
  const url = e.request.url;
  // never cache Supabase API/auth or the supabase-js CDN — always go to network
  if(url.includes('supabase.co') || url.includes('supabase.com') || url.includes('@supabase')){
    return; // let the browser handle it normally
  }
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return res;
    }).catch(()=>hit))
  );
});
