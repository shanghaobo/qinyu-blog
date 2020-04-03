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
    "url": "assets/css/0.styles.59269240.css",
    "revision": "f26411c0efae9b4bbbbe16faacadfd00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.075061d6.js",
    "revision": "84b0306f023c98756ba14c6be7cde543"
  },
  {
    "url": "assets/js/10.134e1aee.js",
    "revision": "b886145dfcfe88ebf0e066b73a847615"
  },
  {
    "url": "assets/js/11.78ad562d.js",
    "revision": "baf6e9a4e9abfd670b87867b4245bbc2"
  },
  {
    "url": "assets/js/12.0723be70.js",
    "revision": "a70523933a2e70786750c7b5e6322059"
  },
  {
    "url": "assets/js/13.348302ce.js",
    "revision": "f20a1493f20a453f70826e69a725b154"
  },
  {
    "url": "assets/js/14.543af43f.js",
    "revision": "e6468558fab5063b2d2847d78fd4cca6"
  },
  {
    "url": "assets/js/3.b1504376.js",
    "revision": "f56203c5eb6d5afc98ed924b2ea113e8"
  },
  {
    "url": "assets/js/4.231eb89b.js",
    "revision": "95ba572aaa64a01f8009a91b1893c6f7"
  },
  {
    "url": "assets/js/5.cf42fc86.js",
    "revision": "4c8bd5a85d39146cc4d378193493cfc3"
  },
  {
    "url": "assets/js/6.43cb9167.js",
    "revision": "8ce720438e0a670101e053ac338099b2"
  },
  {
    "url": "assets/js/7.2bb78bbe.js",
    "revision": "781182ab507b27bfed412442f193e3c4"
  },
  {
    "url": "assets/js/8.fd38b221.js",
    "revision": "36e7effbd59d5681ed7a0d424e9c59bc"
  },
  {
    "url": "assets/js/9.c4b3ebd6.js",
    "revision": "c746a3d6456117a2b3d65a988de46be8"
  },
  {
    "url": "assets/js/app.fe56c966.js",
    "revision": "4886fe30add894d1e718192379e28969"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "6b34d273daa9f5adbaa3c790373b8b20"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "10b7eb2fee1d1455b51a45cc713a7485"
  },
  {
    "url": "Linux/index.html",
    "revision": "086dc33bc73fbb1afb5fb837a40942e3"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "8f37bd687e80232decee50111310eb8c"
  },
  {
    "url": "Pictures/index.html",
    "revision": "423957f0df97a186813729403373fa5e"
  },
  {
    "url": "Python/index.html",
    "revision": "0196f1a35a3f3622daf5777eeb3abc87"
  },
  {
    "url": "Vue/index.html",
    "revision": "33130f862500c1a21d14400cb0a44090"
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
