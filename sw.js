//help from https://www.youtube.com/watch?time_continue=3&v=ksXwaWHCW6k
self.addEventListener('install', (event) => {
	console.log("Service Worker is installed");
})
self.addEventListener('activate', (event) => {
	console.log("Service Worker is activated");
})