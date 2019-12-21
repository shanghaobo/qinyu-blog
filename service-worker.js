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
    "revision": "960b3d66a6e13893da4d82c325fdd2cd"
  },
  {
    "url": "assets/css/0.styles.14d94b30.css",
    "revision": "78b42944bc58285d05bfb820f551b610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6f86815a.js",
    "revision": "36cce515f4884917104da5539732ec61"
  },
  {
    "url": "assets/js/10.f989912d.js",
    "revision": "86cc4a6a61b2846ff7d565806e243ab0"
  },
  {
    "url": "assets/js/11.e560054b.js",
    "revision": "7aba0730b8397eab4b7fdfb2fd49376e"
  },
  {
    "url": "assets/js/12.64a358ed.js",
    "revision": "3cba90d02efbc3bce0fb6480b946fcff"
  },
  {
    "url": "assets/js/13.d381c53c.js",
    "revision": "8ddd52c967858aeb60195caced1aba70"
  },
  {
    "url": "assets/js/14.7474e537.js",
    "revision": "20491a4bd1267c3aea9507b2752754fb"
  },
  {
    "url": "assets/js/3.406d0a2b.js",
    "revision": "9edb7e8877be89d80add7d7f165e2602"
  },
  {
    "url": "assets/js/4.0ffadbc9.js",
    "revision": "ef9f231f4eb9fd164fcb638665045471"
  },
  {
    "url": "assets/js/5.f072e904.js",
    "revision": "f232f53ffc30dd0ed4d509dfcff49cb1"
  },
  {
    "url": "assets/js/6.f6127446.js",
    "revision": "e4791f67c8f72a6bc1993ca9911d9c34"
  },
  {
    "url": "assets/js/7.bbc75a84.js",
    "revision": "5cfe084d478da7172f1977f7c465d057"
  },
  {
    "url": "assets/js/8.e445e5a3.js",
    "revision": "5b0da0e97179fd85f3219a7713c427ae"
  },
  {
    "url": "assets/js/9.9f74d939.js",
    "revision": "a08023bc44a5a7fe3b5159a7f48ba86e"
  },
  {
    "url": "assets/js/app.2594bdd0.js",
    "revision": "4876cae7974e5aac28b055325ba376ba"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "512065c472c6dbd1018d1a60890c4c08"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "3fec876b39430993671d4a3fbd37e3a1"
  },
  {
    "url": "Linux/index.html",
    "revision": "aee3ac95cf6a0bc3d059acdc30d357cf"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "62a5c92b147fad965ab1e9f420501aa3"
  },
  {
    "url": "Pictures/index.html",
    "revision": "5f37055fb9c80127c4e3871214414771"
  },
  {
    "url": "Python/index.html",
    "revision": "54c348b2ff276b33e55f6e8e22f0c042"
  },
  {
    "url": "Vue/index.html",
    "revision": "06c23c93632e3300b4215c90dfed5111"
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
