const CACHE_NAME = 'redux-pwa';
const urlsToCache = [
// Ajoutez d'autres ressources statiques que vous souhaitez mettre en cache

  '/',
  '/index.html',
  '/manifest.json',
  './src/store.js',
  './src/Components/Compare.js', 
  './src/Copomponents/NewValues.js',
  './src/index.css',
  './src/App.css',
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du service worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepte les requêtes réseau et les gère depuis le cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // S'il y a une réponse en cache, on la renvoie
        if (response) {
          return response;
        }
        // Sinon, on effectue la requête réseau
        return fetch(event.request);
      })
  );
});
