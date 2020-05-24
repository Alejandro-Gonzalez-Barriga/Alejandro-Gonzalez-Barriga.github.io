const staticCacheName = 'site-static';
const assets = ['/', '/index.html', '/js/app.js', ''];

//install sw
self.addEventListener('install', (evt) => {
  //console.log('sw has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('catching all assets');
      cache.addAll(assets);
    })
  );
});

//activate event
self.addEventListener('activate', (evt) => {
  console.log('sw has been activated');
});

//fetch event
self.addEventListener('fetch', (evt) => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
