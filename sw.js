
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('valor-peso-oblivion').then(cache => {
      return cache.addAll([
        '/valor-peso-oblivion/',
        '/valor-peso-oblivion/index.html',
        '/valor-peso-oblivion/manifest.json',
        '/valor-peso-oblivion/sw.js',
        '/valor-peso-oblivion/icon-192.png',
        '/valor-peso-oblivion/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
