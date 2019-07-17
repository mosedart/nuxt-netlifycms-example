importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/107f9680d2bff5d2000f.js",
    "revision": "05018642d0ed5fe8188dce17710b685b"
  },
  {
    "url": "/_nuxt/4094ea78a70bb5774bc6.js",
    "revision": "b70a9d37ea21fd61a42bdbe35d5d95ec"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/6e82c2f55945ec85fb98.css",
    "revision": "858e558899ea619a81dd982b4e182f5d"
  },
  {
    "url": "/_nuxt/7296a843f0263ac85b85.js",
    "revision": "cdf0b2e415ad3bfda4b7da503ce31faf"
  },
  {
    "url": "/_nuxt/76ab6cc5ac043e52de1d.js",
    "revision": "df3f8763c131d99053583c3a39e9e5f1"
  },
  {
    "url": "/_nuxt/b8bd881cf20afac39428.js",
    "revision": "f411479719b8ccdd4b43554f23735450"
  },
  {
    "url": "/_nuxt/bd7be52789d058dae035.js",
    "revision": "dea63ccdc86a68de9b8c05a92dbaea4d"
  },
  {
    "url": "/_nuxt/c81bc1d13a624cbc25c8.css",
    "revision": "bee7f259c15a65f07cba2f47d3354ebc"
  },
  {
    "url": "/_nuxt/e59ca5cb3b2ccd968607.js",
    "revision": "d508157136776d24bdccadafbfe74c9b"
  },
  {
    "url": "/_nuxt/fc6cde20c5726c9b67dc.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/fe8f4e3ad710d150b96f.js",
    "revision": "734af526bbd37eb21ceaa52ff18d3ce3"
  },
  {
    "url": "/_nuxt/ff698bcfd0cb1169d0e0.js",
    "revision": "1bb11f9d14ad51c2ec9a4f271b457d24"
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
