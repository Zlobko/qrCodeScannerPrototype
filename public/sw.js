importScripts('/_nuxt/utils/db-sw.js');

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  const apiUrl = 'https://6443d57990738aa7c078a5c0.mockapi.io/api/data/objects';

  if (event.request.url.startsWith(apiUrl)) {
    event.respondWith(fetchAndCache(event.request));
  }
});

async function fetchAndCache(request) {
  const cache = await caches.open('api-cache');
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    
    // Store data in IndexedDB
    const data = await response.clone().json();
    for (const item of data) {
      await self.addToDB(item);
    }

    return response;
  } catch (error) {
    console.error('Failed to fetch and cache:', error);
    throw error;
  }
}