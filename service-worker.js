// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
	'/',
	'/index.html',
	'/main.js',
	'/main.css',
	'https://images.unsplash.com/photo-1465205568425-23fdd3805e49?dpr=1&auto=format&crop=entropy&fit=crop&w=1440&h=960&q=80',
  'https://fonts.googleapis.com/css?family=Poiret+One',
  '/cat.png'
]

// self.addEventListener('install', function(event) {
//   console.log('ServiceWorker Installed');
//
//   // e.waitUntil delays treating the active worker as installed/activated until the passed Promise resolves successfully.
//   event.waitUntil(
//     // opens the cache
//     caches.open(cacheName).then(function(cache) {
//       // adds the files to the cache
//       return cache.addAll(cacheFiles);
//     })
//   )
// })
//
// self.addEventListener('activate', function(event) {
//   console.log('ServiceWorker Activated');
//   // Get all the cache keys (cacheName)
//   event.waitUntil(
//     // MDN: The keys() method of the caches (CacheStorage) interface returns a Promise
//     // that will resolve with an array containing strings corresponding
//     // to all of the named Cache objects tracked by the CacheStorage object.
//     // Use this method to iterate over a list of all Cache objects.
//     caches.keys().then(function(cacheNames) {
//       // MDN: The Promise.all(iterable) method returns a promise
//       // that resolves when all of the promises in the iterable argument have resolved,
//       // or rejects with the reason of the first passed promise that rejects
//       return Promise.all(cacheNames.map(function(thisCacheName) {
//         // If the you have updated your cache (v2),
//         // this will remove all other caches
//         if (thisCacheName !== cacheName) {
//
// 					// Delete that cached file
// 					console.log('ServiceWorker Removing Cached Files from Cache - ', thisCacheName);
// 					return caches.delete(thisCacheName);
// 				}
//       }))
//     })
//   )
// });
//
// // A fetch event fires every time any resource controlled by a service worker is fetched,
//
// self.addEventListener('fetch', function(event) {
//   console.log('ServiceWorker Fetch', event.request.url);
//   event.respondWith(
//     // MDN: The match() method of the CacheStorage interface
//     // checks if a given Request is a key in any of the Cache objects
//     // that the CacheStorage object tracks
//     // and returns a Promise that resolves to the matching Response.
//
//     // Here we are checking if the request is in the cache
//     caches.match(event.request).then(function(response) {
//       if (response) {
//         console.log('ServiceWorker Found in Cache', event.request.url, response);
//         // Return the cached version
//         return response;
//       }
//
//       // If the request is NOT in the cache, fetch and cache
//       var requestClone = event.request.clone();
//       fetch(requestClone).then(function(response) {
//
//         if ( !response ) {
//           console.log("[ServiceWorker] No response from fetch ")
//           return response;
//         }
//
//         var responseClone = response.clone();
//
//         //  Open the cache
//         caches.open(cacheName).then(function(cache) {
//
//           // Put the fetched response in the cache
//           cache.put(event.request, responseClone);
//           console.log('ServiceWorker Cached New Data', event.request.url);
//
//           return response;
//         });
//       })
//       .catch(function(error) {
//         console.log('ServiceWorker Error Fetching & Caching New Data', error);
//       });
//     })
//   )
// });
