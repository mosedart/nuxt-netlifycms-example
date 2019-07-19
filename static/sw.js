importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/26ad8b6bbb14ed00d762.js",
    "revision": "b3705d6cdec6ad673c093d66c96dfb93"
  },
  {
    "url": "/_nuxt/2cb810793f60228c34e4.js",
    "revision": "7ff575437b0b25035d5d7b2a53ee13a8"
  },
  {
    "url": "/_nuxt/4146671d63c2ead0ae0f.js",
    "revision": "e150c012f45553f43df46e202c76cace"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/4c8e1dda8190cb762f0d.js",
    "revision": "9c4198c4be7145149f4389d65cb28653"
  },
  {
    "url": "/_nuxt/4ffcf5834ac587b2e7fb.css",
    "revision": "33a73bd52c661968d54cf0f80937680f"
  },
  {
    "url": "/_nuxt/62e00af99ff95dbcc782.js",
    "revision": "11b62e5eec5b5181e5849b5965f84b85"
  },
  {
    "url": "/_nuxt/7e0bce28ef92518de0f7.js",
    "revision": "14623d42f17dda44d353ab46ae4b9ab8"
  },
  {
    "url": "/_nuxt/8980d0642ea235c9847a.js",
    "revision": "412c1e3b17993a0ab15e12b3794bf3a9"
  },
  {
    "url": "/_nuxt/bc9257edd48a47f1a750.js",
    "revision": "8c070bfefc64ae9785362bd7188c9f04"
  },
  {
    "url": "/_nuxt/d889500511504a8145ac.js",
    "revision": "f44087bf03c732b479a913b89e611f2d"
  },
  {
    "url": "/_nuxt/e0dca7bd9a503e0f43b4.css",
    "revision": "191959581356062d4ec655049c4b82a3"
  },
  {
    "url": "/_nuxt/fc6cde20c5726c9b67dc.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
