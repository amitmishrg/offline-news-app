importScripts("precache-manifest.9711b93600e959afa3768b136c858d1d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {

    workbox.setConfig({ debug: false });

    // You can alter the cache names by altering all or some of these pieces of information:
    workbox.core.setCacheNameDetails({
        prefix: 'news-app',
        suffix: 'v1',
        precache: 'custom-precache-name',
        runtime: 'custom-runtime-name'
    });

    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

    workbox.routing.registerRoute(
        new RegExp('.*\.js'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'news-app-js-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        // Use cache but update in the background ASAP
        workbox.strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'news-app-css-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        // Use the cache if it's available
        workbox.strategies.cacheFirst({
            // Use a custom cache name
            cacheName: 'news-app-image-cache',
            plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            })
            ],
        })
    );

    // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'news-app-google-fonts-stylesheets',
        })
    );

    // Cache the underlying font files with a cache-first strategy for 1 year.
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
            ],
        })
    );


    // Cache all the api calls
    workbox.routing.registerRoute(
        new RegExp('https://newsapis.herokuapp.com/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'news-app-api-calls',
            plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200, 404]
            })
            ]
        })
    );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
