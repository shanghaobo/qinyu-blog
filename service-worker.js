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
    "revision": "7dfbfafc6f00c46bf178eeba5f6b3a3e"
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
    "url": "assets/js/10.5ff82500.js",
    "revision": "40672d6d0c531f29bf429c61fd8b784f"
  },
  {
    "url": "assets/js/11.e9ff3c0a.js",
    "revision": "521cd04eab9eda7ac98586aa734c8cb0"
  },
  {
    "url": "assets/js/12.63ab8c23.js",
    "revision": "a20064641c0f1fcb403b6d6061b40e6e"
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
    "url": "assets/js/7.899a1b7d.js",
    "revision": "1b7c8eabfd64178095f075ccf9d6f9b1"
  },
  {
    "url": "assets/js/8.fb13fc29.js",
    "revision": "5a5be49c3cb06a47e3d7776dd17c3a21"
  },
  {
    "url": "assets/js/9.b54877e5.js",
    "revision": "aa3e39ed5883769826d83f0b4998d51e"
  },
  {
    "url": "assets/js/app.d99cf068.js",
    "revision": "d2c6e3161987c8e187c449fd625fbfe6"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "d2b89b7d0ae9b97e63c644e5b3998af0"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "bb58dd7a6398d871a935f998a9761ef3"
  },
  {
    "url": "Linux/index.html",
    "revision": "34ff77591a54972a1423e4d5996ed063"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "5bdf8e1744dc5fc0b3cf597e94eef78b"
  },
  {
    "url": "Pictures/index.html",
    "revision": "1133846b41b97eaedd2d931890da8514"
  },
  {
    "url": "Python/index.html",
    "revision": "4bb1f2cdf837ff8856f49511cb76cbdd"
  },
  {
    "url": "Vue/index.html",
    "revision": "f55c816fde787b9aa3c5a2befca2aa4d"
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
