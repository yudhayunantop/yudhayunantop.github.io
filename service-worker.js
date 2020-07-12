importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([{
            url: '/',
            revision: '2'
        },
        {
            url: '/index.html',
            revision: '2'
        },
        {
            url: '/manifest.json',
            revision: '2'
        },
        {
            url: '/nav.html',
            revision: '2'
        },
        {
            url: '/package-lock.json',
            revision: '2'
        },
        {
            url: '/push.js',
            revision: '2'
        },
        {
            url: '/team.html',
            revision: '2'
        },
        {
            url: '/teamDelete.html',
            revision: '2'
        },

        //css
        {
            url: '/css/materialize.min.css',
            revision: '2'
        },
        {
            url: '/css/style.css',
            revision: '2'
        },

        //icon
        {
            url: '/icon/icon-48.png',
            revision: '2'
        },
        {
            url: '/icon/icon-96.png',
            revision: '2'
        },
        {
            url: '/icon/icon-192.png',
            revision: '2'
        },

        //js
        {
            url: '/js/api.js',
            revision: '2'
        },
        {
            url: '/js/db.js',
            revision: '2'
        },
        {
            url: '/js/delete.js',
            revision: '2'
        },
        {
            url: '/js/idb.js',
            revision: '2'
        },
        {
            url: '/js/index.js',
            revision: '2'
        },
        {
            url: '/js/materialize.min.js',
            revision: '2'
        },
        {
            url: '/js/nav.js',
            revision: '2'
        },
        {
            url: '/js/notif.js',
            revision: '2'
        },
        {
            url: '/js/render.js',
            revision: '2'
        },
        {
            url: '/js/team.js',
            revision: '2'
        },
        //page
        {
            url: '/pages/about.html',
            revision: '2'
        },
        {
            url: '/pages/daftarTim.html',
            revision: '2'
        },
        {
            url: '/pages/home.html',
            revision: '2'
        },
        {
            url: '/pages/saved.html',
            revision: '2'
        }
    ]);
    //'./team.html', './teamDelete.html'
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/teams/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'bola-pedia',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200],
                }),
                new workbox.expiration.Plugin({
                    masAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 60,
                }),
            ]
        })
    );
    workbox.routing.registerRoute(
        new RegExp('./team.html'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'bola-pedia3',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200],
                }),
                new workbox.expiration.Plugin({
                    masAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 60,
                }),
            ]
        })
    );
    workbox.routing.registerRoute(
        new RegExp('./teamDelete.html'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'bola-pedia4',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200],
                }),
                new workbox.expiration.Plugin({
                    masAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 60,
                }),
            ]
        })
    );
} else {
    console.log(`Workbox gagal dimuat`);
}

self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'icon/icon-48.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});