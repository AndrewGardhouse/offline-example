console.log(self)
self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed');

  // e.waitUntil Delays the event until the Promise is resolved
  // event.waitUntil()
})

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');
  event.waitUntil()
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Activated');
});
