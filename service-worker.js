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
    "revision": "0131a861b29579888554b97ddc3fdec5"
  },
  {
    "url": "assets/css/0.styles.93f4b407.css",
    "revision": "f16fda9e4f293e626e14bcd99861de90"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.38cf4764.js",
    "revision": "b788133487c65d55ce348e0db7de8c5e"
  },
  {
    "url": "assets/js/10.8faa27c1.js",
    "revision": "76a4bcdc96a9dcca5317518949607dc7"
  },
  {
    "url": "assets/js/11.1d2682c7.js",
    "revision": "c9436e1e489d70c838faf9c77955e036"
  },
  {
    "url": "assets/js/12.ef77983a.js",
    "revision": "9959576fb719ebb3bd287acde4dd4037"
  },
  {
    "url": "assets/js/13.b40b02da.js",
    "revision": "fa95f4a8fe7f4f297e80842344c23b08"
  },
  {
    "url": "assets/js/3.b920bf94.js",
    "revision": "5da078a49c34ce65736759fb527ae18e"
  },
  {
    "url": "assets/js/4.ab1dd277.js",
    "revision": "faecc76f22f2991cb63be94a014c84ea"
  },
  {
    "url": "assets/js/5.41538fbc.js",
    "revision": "7d7dd2221edbd0aad9388b47b070eab8"
  },
  {
    "url": "assets/js/6.97eaefe6.js",
    "revision": "12c75de0eb93b333c0122d2fa2b88d2b"
  },
  {
    "url": "assets/js/7.e570b62c.js",
    "revision": "55151491b47f9ed79f6771cab796e8c9"
  },
  {
    "url": "assets/js/8.4de1af36.js",
    "revision": "384975b6fd733d8f5bc305a68591727d"
  },
  {
    "url": "assets/js/9.6e770fae.js",
    "revision": "74a1b2977b6168575811b99e72c705fd"
  },
  {
    "url": "assets/js/app.077d374f.js",
    "revision": "87946bc2f95b3f32069ad5deab7f4108"
  },
  {
    "url": "images/InputClickDemo.gif",
    "revision": "ea71b7e6e8c885a930b6d61a56f0c6f0"
  },
  {
    "url": "index.html",
    "revision": "c70ebbb008f1c38bc50ab6885fb8cbb3"
  },
  {
    "url": "InfiniteSplitTable.html",
    "revision": "d0c895b9cb5324410c703e8713f57a25"
  },
  {
    "url": "Linux/index.html",
    "revision": "3589b0a4465ee192a0b8c8cd25e0c34b"
  },
  {
    "url": "logo.png",
    "revision": "ec36832328aac2ccb425bcb2bf5e1428"
  },
  {
    "url": "Other/index.html",
    "revision": "d35248aa5e2694595a99504743ff6899"
  },
  {
    "url": "Pictures/index.html",
    "revision": "92aca3f8ec259b709400faa63b203054"
  },
  {
    "url": "Python/index.html",
    "revision": "6c9216024d4cbfd54d76818c3301fbe6"
  },
  {
    "url": "Vue/index.html",
    "revision": "feee79ef7ac299d420156f220546ff25"
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
