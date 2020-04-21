/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f3e5e510929febeb60c1b2413f8d2c66"
  },
  {
    "url": "assets/css/0.styles.fddf2f1e.css",
    "revision": "42f020d6ce58456fa6eccb67c255676d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.af180a3c.js",
    "revision": "7764161983f93cc7d82e2451eba87e7e"
  },
  {
    "url": "assets/js/10.918e8f5b.js",
    "revision": "8f007b600452f4b2dd8bfcc44d9f5851"
  },
  {
    "url": "assets/js/11.b8bd7748.js",
    "revision": "075c78efc00cc2dbe6439f35add9be7f"
  },
  {
    "url": "assets/js/12.c7681d08.js",
    "revision": "56f9bf4313a8fbd764a7ea026a2364fc"
  },
  {
    "url": "assets/js/13.e0f74013.js",
    "revision": "44c9cc62e934869b7466ff2d00380976"
  },
  {
    "url": "assets/js/14.e2b4a818.js",
    "revision": "b53626db0bf5af6198ab7eb0f37b3b0a"
  },
  {
    "url": "assets/js/3.9228472d.js",
    "revision": "03b7c7c48f2b560a5f9ddbffe54a2f72"
  },
  {
    "url": "assets/js/4.48a1577f.js",
    "revision": "fd94d918f31eb2fd9ad6213a720c7ae3"
  },
  {
    "url": "assets/js/5.57e273a0.js",
    "revision": "c725cc338b9b4bf8cba2cf1f2e28cc74"
  },
  {
    "url": "assets/js/6.034bd4bb.js",
    "revision": "2a0d779e7d2106e9e0b1ed92d910ee9e"
  },
  {
    "url": "assets/js/7.548264f3.js",
    "revision": "c8a0f14b2be9f2035e9c4489359f4b68"
  },
  {
    "url": "assets/js/8.ca36bf63.js",
    "revision": "efff7baf60f565b4b3169cf7f188add4"
  },
  {
    "url": "assets/js/9.417f5811.js",
    "revision": "e78f7ee16d76cfe069d1f6961e6d0ec0"
  },
  {
    "url": "assets/js/app.877c98e4.js",
    "revision": "a31e3ff1407716360164b5b008c0967d"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "3a1d1f2fe34a2bd8ff5e6b4a88c461c6"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "4e06a403b0b67a643328ea137efd4272"
  },
  {
    "url": "Linux/index.html",
    "revision": "a80da9969f76a1374f67418ee8a31db8"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "e7f3c3c57ddde5d6abab083aff646473"
  },
  {
    "url": "Pictures/index.html",
    "revision": "e21ffb814cb258f9804cfec69ddce478"
  },
  {
    "url": "Python/index.html",
    "revision": "3763bc49642da433804b9e5eee9f73e5"
  },
  {
    "url": "Vue/index.html",
    "revision": "e2ce428c694a18d8da8633106ceda1b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
