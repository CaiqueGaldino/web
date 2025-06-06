'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9cb3d0d18d3f0495aa2cc20a6ca0a33b",
"assets/AssetManifest.bin.json": "d45ca7802bcaf374a426209af287a3e7",
"assets/AssetManifest.json": "4676c67cac5a4d66765cdabeab55e557",
"assets/FontManifest.json": "c1bfbd75bf7dcde190724a71232189f4",
"assets/fonts/MaterialIcons-Regular.otf": "c3869fb8862c9c388ac76720d6b7d568",
"assets/lib/assets/appstore.png": "77bdd15e721dbc80b5e2433a8876b8a4",
"assets/lib/assets/fonts/Akira.otf": "4e851bdf1159911bc4b3fbf216eb6d82",
"assets/lib/assets/fonts/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/lib/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/lib/assets/fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/lib/assets/fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/lib/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/lib/assets/fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/lib/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/lib/assets/fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/lib/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/lib/assets/images/background_home.webp": "517806529a57154448d34fd0ce118874",
"assets/lib/assets/images/checked.json": "56b3208ebafe759bd4e2f0c0dee072cc",
"assets/lib/assets/images/coletivas.webp": "77799972976500eb91cb7d356cd4d559",
"assets/lib/assets/images/copa.webp": "976a882581c12eb109c7e48de8e72841",
"assets/lib/assets/images/ergonomico.webp": "ee08bdc49c2f4998a1b555eb480d248e",
"assets/lib/assets/images/externo.webp": "c19d796b08616d3ec129618f96fad17d",
"assets/lib/assets/images/foguete.json": "eab441d366e30b383096e702a538d0f8",
"assets/lib/assets/images/fundo-colorido.webp": "79b08c6eebcab0833b6e5794d841dc80",
"assets/lib/assets/images/fundo-hp.webp": "d94132578867c2cf268a980be25a4d38",
"assets/lib/assets/images/fundo-preto.webp": "90e5c7b75793fa9783f11a097cca8c01",
"assets/lib/assets/images/fundo_web.png": "99970dae36a32021f47e7a9c2f509573",
"assets/lib/assets/images/imageLoad.json": "04ba4c45b45a68e6928a56f1107878fa",
"assets/lib/assets/images/login_background.webp": "170e36bda9be1875dd2e5a30c3e0fe49",
"assets/lib/assets/images/logo.png": "05ee938277a12ed2f4e8903d7b7b4c21",
"assets/lib/assets/images/logo_colorida.png": "4bfa2bd8e313e917df7f946eb8315a43",
"assets/lib/assets/images/qrcodeamarelo.json": "4a7b2c5250159da24110a81497f49a37",
"assets/lib/assets/images/qrcodeChecked.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/lib/assets/images/recepcao.webp": "61eb6b0408604d036f61ab64bc2bfd24",
"assets/lib/assets/images/salao_musculacao.webp": "7c43827a4ee9197324cb9ed34cbc0b7f",
"assets/lib/assets/images/sala_avaliacao.webp": "3bb00bfd60edb97e5fa6db9a0baf7310",
"assets/lib/assets/images/search.json": "c1019837d0bfa510870180c983890b9a",
"assets/lib/assets/images/x.png": "98c77274ea98cf0b4588f93bfb666561",
"assets/lib/assets/images/x1.png": "4f74e06a0381573245d31aaa9ab4770a",
"assets/lib/assets/playstore.png": "230961f42d5e2960ddf4bb1900ab50fd",
"assets/NOTICES": "522d3e2a2b4e71436e2d43317c995c03",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e699ad406589b3230a671a58d10eaea6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5221a1d3a7a4f62c6b148be367a2c02",
"/": "b5221a1d3a7a4f62c6b148be367a2c02",
"main.dart.js": "f03f1077f7ae9ce24fd6d0c2c3137a0d",
"manifest.json": "0584398268525359d5693a1d18f4a3b2",
"version.json": "78b56b0437d81ba76a5c7e04c6f6b199",
"web/.git/COMMIT_EDITMSG": "c108d274685d3477dbaff87ab466a8fd",
"web/.git/config": "112fc930368b67ab44503b60608eed77",
"web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web/.git/FETCH_HEAD": "5fd83ebc60510afa2e331a85fc703212",
"web/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web/.git/index": "eb1f2569c91302c9f025f518f3c342ed",
"web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web/.git/logs/HEAD": "5865c70cdb40ca5a47b39dda05a490d1",
"web/.git/logs/refs/heads/master": "5865c70cdb40ca5a47b39dda05a490d1",
"web/.git/logs/refs/remotes/origin/HEAD": "dbef29cdbd258fbd9d779d0c23ed1542",
"web/.git/logs/refs/remotes/origin/master": "b6562a520c38abd3dc2db54b1cf9cdb7",
"web/.git/objects/71/1d0c4220dee747c50e705412074bb9b3389859": "cdd38f9960f3018eb84068b76abfeb53",
"web/.git/objects/pack/pack-4c06feeda5cb4867edb1a40f217ffed6f56b6b44.idx": "b0dc5dafcd754e3a3e649e3e168711bf",
"web/.git/objects/pack/pack-4c06feeda5cb4867edb1a40f217ffed6f56b6b44.pack": "049211b0998c43aec68aa395ef6ec0eb",
"web/.git/objects/pack/pack-4c06feeda5cb4867edb1a40f217ffed6f56b6b44.rev": "72caea4f95e878167a60e806a5860483",
"web/.git/ORIG_HEAD": "298910860cfdb055ef97880ec538eaa0",
"web/.git/packed-refs": "64d56034b9284fbd6a53fa0f5bc47660",
"web/.git/refs/heads/master": "298910860cfdb055ef97880ec538eaa0",
"web/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"web/.git/refs/remotes/origin/master": "298910860cfdb055ef97880ec538eaa0",
"web/.github/workflows/jekyll-gh-pages.yml": "924ef685306852a6ac8c0388b4d5b5fb",
"web/assets/AssetManifest.bin": "df8eb3e87fd4330b5de0185eb220e6d0",
"web/assets/AssetManifest.bin.json": "8ca12cba861f48a75bf03f04acb49d0a",
"web/assets/AssetManifest.json": "dbce28bb7d5a2ecbce808221041afcf7",
"web/assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"web/assets/fonts/MaterialIcons-Regular.otf": "4e5f6ce1ee9251fca5c727c93e4e64f4",
"web/assets/lib/assets/appstore.png": "77bdd15e721dbc80b5e2433a8876b8a4",
"web/assets/lib/assets/images/background_home.webp": "517806529a57154448d34fd0ce118874",
"web/assets/lib/assets/images/checked.json": "56b3208ebafe759bd4e2f0c0dee072cc",
"web/assets/lib/assets/images/coletivas.webp": "77799972976500eb91cb7d356cd4d559",
"web/assets/lib/assets/images/copa.webp": "976a882581c12eb109c7e48de8e72841",
"web/assets/lib/assets/images/ergonomico.webp": "ee08bdc49c2f4998a1b555eb480d248e",
"web/assets/lib/assets/images/externo.webp": "c19d796b08616d3ec129618f96fad17d",
"web/assets/lib/assets/images/foguete.json": "eab441d366e30b383096e702a538d0f8",
"web/assets/lib/assets/images/fundo-colorido.webp": "79b08c6eebcab0833b6e5794d841dc80",
"web/assets/lib/assets/images/fundo-hp.webp": "d94132578867c2cf268a980be25a4d38",
"web/assets/lib/assets/images/fundo-preto.webp": "90e5c7b75793fa9783f11a097cca8c01",
"web/assets/lib/assets/images/fundo_web.png": "99970dae36a32021f47e7a9c2f509573",
"web/assets/lib/assets/images/imageLoad.json": "04ba4c45b45a68e6928a56f1107878fa",
"web/assets/lib/assets/images/login_background.webp": "170e36bda9be1875dd2e5a30c3e0fe49",
"web/assets/lib/assets/images/logo.png": "05ee938277a12ed2f4e8903d7b7b4c21",
"web/assets/lib/assets/images/qrcodeamarelo.json": "4a7b2c5250159da24110a81497f49a37",
"web/assets/lib/assets/images/qrcodeChecked.json": "fd177caf7df34f592af4ab291cd10a22",
"web/assets/lib/assets/images/recepcao.webp": "61eb6b0408604d036f61ab64bc2bfd24",
"web/assets/lib/assets/images/salao_musculacao.webp": "7c43827a4ee9197324cb9ed34cbc0b7f",
"web/assets/lib/assets/images/sala_avaliacao.webp": "3bb00bfd60edb97e5fa6db9a0baf7310",
"web/assets/lib/assets/images/search.json": "c1019837d0bfa510870180c983890b9a",
"web/assets/lib/assets/images/x.png": "98c77274ea98cf0b4588f93bfb666561",
"web/assets/lib/assets/images/x1.png": "4f74e06a0381573245d31aaa9ab4770a",
"web/assets/lib/assets/playstore.png": "230961f42d5e2960ddf4bb1900ab50fd",
"web/assets/NOTICES": "8c5d8f48d5460c347388cb4a80841ba9",
"web/assets/packages/model_viewer_plus/assets/model-viewer.min.js": "d616006d2f9f75ca4b0bcee8b0fb30c7",
"web/assets/packages/model_viewer_plus/assets/template.html": "24a1f29951029adea5122572451138fc",
"web/assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"web/assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"web/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"web/canvaskit/canvaskit.js": "1e8033ea0c8c804771c1836fd07acb49",
"web/canvaskit/canvaskit.js.symbols": "310951580eb657840fae86f76f653452",
"web/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"web/canvaskit/chromium/canvaskit.js": "10c40b740080c4eb9c1e074307482d39",
"web/canvaskit/chromium/canvaskit.js.symbols": "2bf18b9213f9fc9fb554c3890691f57c",
"web/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"web/canvaskit/skwasm.js": "8cc11b1079ca8735f29263baafbf330a",
"web/canvaskit/skwasm.js.symbols": "2a35929fae90775f43ce38f8bab1697a",
"web/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"web/canvaskit/skwasm_st.js": "9eeb36850f248a8e946442a13aaaa009",
"web/canvaskit/skwasm_st.js.symbols": "ca49a44a388ecfe66ba43dd851d2b76d",
"web/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "18587c590e5c7a76f5c8fc8822445e17",
"web/flutter_bootstrap.js": "4accb93857f8f16dde8a3c11121ef639",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "e561b9fa9a8e660c44c934c206d43de9",
"web/main.dart.js": "7d9284441145f52eaa71581c9ac689a7",
"web/manifest.json": "0584398268525359d5693a1d18f4a3b2",
"web/version.json": "78b56b0437d81ba76a5c7e04c6f6b199"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
