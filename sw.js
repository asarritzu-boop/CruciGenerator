const CACHE_NAME = 'cruciverba-biblico-v1';
const ASSETS = [
  './',
  './index.html',
  './glossario.js',
  './icona-192.png',
  './icona-512.png',
  './manifest.json'
];


// Installa il Service Worker e salva i file in cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste: se offline, usa i file in cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
