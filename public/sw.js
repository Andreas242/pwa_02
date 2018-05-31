self.addEventListener('install', function(event) {
    console.log('[service worker] installing sw', event );
})

self.addEventListener('activate', function(event) {
    console.log('[service worker] activating sw', event);
    return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
    console.log('[service worker] fetching something', event );
    event.respondWith(fetch(event.request));
})

