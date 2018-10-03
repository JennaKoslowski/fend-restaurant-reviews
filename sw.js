//install service worker
self.addEventListener('install', event => {
	console.log("Service Worker is installed");

	event.waitUntil(
		caches.open('v1').then(function(cache){
			return cache.addAll(['/',
				'/index.html',
				'/css/styles.css',
				'/restaurant.html',
				'/js/dbhelper.js',
				'/data/restaurants.json',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg']);
		})
		);
});

//activate event listener
self.addEventListener('activate', event => {
	console.log("Service Worker is activated");
})

//fetch events
self.addEventListener('fetch', event => {
	//event.respondWith(
	//	fetch.(event.request)
	//	).catch();
});