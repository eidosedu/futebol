const CACHE_NAME = 'eidos-treino-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
  // Adicione aqui outros arquivos se tiver (ex: '/style.css')
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
