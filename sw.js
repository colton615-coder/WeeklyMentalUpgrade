const CACHE_NAME = 'wl-upgrade-v1';
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  event.respondWith((async () => {
    try {
      const net = await fetch(req);
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, net.clone());
      return net;
    } catch (e) {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      if (cached) return cached;
      // fallback to index for navigations
      if (req.mode === 'navigate') {
        return cache.match('./') || new Response('<!doctype html><title>Offline</title><h1>Offline</h1>', {headers:{'Content-Type':'text/html'}});
      }
      throw e;
    }
  })());
});
