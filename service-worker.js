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
    "revision": "98f06dbb2aff71dd86b351ae16984029"
  },
  {
    "url": "assets/css/0.styles.529be1f8.css",
    "revision": "42f020d6ce58456fa6eccb67c255676d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.714f38bb.js",
    "revision": "7764161983f93cc7d82e2451eba87e7e"
  },
  {
    "url": "assets/js/10.ebbde38d.js",
    "revision": "8f007b600452f4b2dd8bfcc44d9f5851"
  },
  {
    "url": "assets/js/11.969abb56.js",
    "revision": "075c78efc00cc2dbe6439f35add9be7f"
  },
  {
    "url": "assets/js/12.1d10fd9a.js",
    "revision": "596ad5e6e21e267f619545c4e19f6061"
  },
  {
    "url": "assets/js/13.425a65f3.js",
    "revision": "44c9cc62e934869b7466ff2d00380976"
  },
  {
    "url": "assets/js/14.65108ad5.js",
    "revision": "b53626db0bf5af6198ab7eb0f37b3b0a"
  },
  {
    "url": "assets/js/3.451f8177.js",
    "revision": "03b7c7c48f2b560a5f9ddbffe54a2f72"
  },
  {
    "url": "assets/js/4.cca3d2a2.js",
    "revision": "fd94d918f31eb2fd9ad6213a720c7ae3"
  },
  {
    "url": "assets/js/5.1a9913f1.js",
    "revision": "c725cc338b9b4bf8cba2cf1f2e28cc74"
  },
  {
    "url": "assets/js/6.dbb38253.js",
    "revision": "2a0d779e7d2106e9e0b1ed92d910ee9e"
  },
  {
    "url": "assets/js/7.35c5c598.js",
    "revision": "c8a0f14b2be9f2035e9c4489359f4b68"
  },
  {
    "url": "assets/js/8.724e0469.js",
    "revision": "efff7baf60f565b4b3169cf7f188add4"
  },
  {
    "url": "assets/js/9.e38a7069.js",
    "revision": "e78f7ee16d76cfe069d1f6961e6d0ec0"
  },
  {
    "url": "assets/js/app.78e8c499.js",
    "revision": "990a647a8633d6fa096628cb95c63aea"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "540c291a1d48d569121295030ab19fcb"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "bc2b8e0dad7cbb7009e705db70905e13"
  },
  {
    "url": "Linux/index.html",
    "revision": "e0b9a2b4457dcb7aa965055be2fc128e"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "33677167992659173ae075dd374289d5"
  },
  {
    "url": "Pictures/index.html",
    "revision": "3b9321256f76576ec49322f25faadb6d"
  },
  {
    "url": "Python/index.html",
    "revision": "5be5679adf14a0b57d75a68af78f03b3"
  },
  {
    "url": "Vue/index.html",
    "revision": "6b3563ed0198e9b825a15ee64caa6815"
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
