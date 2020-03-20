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
    "url": "assets/css/0.styles.7e4eea28.css",
    "revision": "f26411c0efae9b4bbbbe16faacadfd00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dc85c490.js",
    "revision": "84b0306f023c98756ba14c6be7cde543"
  },
  {
    "url": "assets/js/10.041dd692.js",
    "revision": "f25290003e1e41abdcd9027b34544812"
  },
  {
    "url": "assets/js/11.65f08dc5.js",
    "revision": "baf6e9a4e9abfd670b87867b4245bbc2"
  },
  {
    "url": "assets/js/12.63b0fbe2.js",
    "revision": "ed255c2f36af4f53b3034c3602adba24"
  },
  {
    "url": "assets/js/13.80fdffe0.js",
    "revision": "f20a1493f20a453f70826e69a725b154"
  },
  {
    "url": "assets/js/14.85e91b0c.js",
    "revision": "e6468558fab5063b2d2847d78fd4cca6"
  },
  {
    "url": "assets/js/3.8a7c74bc.js",
    "revision": "f56203c5eb6d5afc98ed924b2ea113e8"
  },
  {
    "url": "assets/js/4.585f3f3b.js",
    "revision": "95ba572aaa64a01f8009a91b1893c6f7"
  },
  {
    "url": "assets/js/5.a728b934.js",
    "revision": "4c8bd5a85d39146cc4d378193493cfc3"
  },
  {
    "url": "assets/js/6.bf820ed5.js",
    "revision": "8ce720438e0a670101e053ac338099b2"
  },
  {
    "url": "assets/js/7.35ef10d9.js",
    "revision": "781182ab507b27bfed412442f193e3c4"
  },
  {
    "url": "assets/js/8.099cf1b0.js",
    "revision": "36e7effbd59d5681ed7a0d424e9c59bc"
  },
  {
    "url": "assets/js/9.6115bef8.js",
    "revision": "c746a3d6456117a2b3d65a988de46be8"
  },
  {
    "url": "assets/js/app.317192f3.js",
    "revision": "fddb560b1dc07b0e252ec35c423188bd"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "3fbdb1b516e25749bd65087531a9bc60"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "ea1d88957505088f497a5d0a7c091d0d"
  },
  {
    "url": "Linux/index.html",
    "revision": "e1c891b159271ab490cc29402795d948"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "4e06e85e9c295cf072a84eeef0effc2c"
  },
  {
    "url": "Pictures/index.html",
    "revision": "ce47efbff5961ccaf8d991d02cc66cb8"
  },
  {
    "url": "Python/index.html",
    "revision": "5b4e058e1a14ed321b0d1e52a2b6a8a1"
  },
  {
    "url": "Vue/index.html",
    "revision": "220b4dec1fc66b402de8bc687b41fd43"
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
