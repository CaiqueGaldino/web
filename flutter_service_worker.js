'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d7e18d4b7324f02bbac9fcd21709f7e9",
"assets/AssetManifest.bin.json": "05499fffef4adad14eb082968429a84b",
"assets/AssetManifest.json": "b05a483a55cdc602a342f1f4e930c49a",
"assets/assets/appstore.png": "77bdd15e721dbc80b5e2433a8876b8a4",
"assets/assets/fonts/Akira.otf": "4e851bdf1159911bc4b3fbf216eb6d82",
"assets/assets/fonts/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/assets/fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/background_home.webp": "517806529a57154448d34fd0ce118874",
"assets/assets/images/checked.json": "56b3208ebafe759bd4e2f0c0dee072cc",
"assets/assets/images/coletivas.webp": "77799972976500eb91cb7d356cd4d559",
"assets/assets/images/copa.webp": "976a882581c12eb109c7e48de8e72841",
"assets/assets/images/ergonomico.webp": "ee08bdc49c2f4998a1b555eb480d248e",
"assets/assets/images/externo.webp": "c19d796b08616d3ec129618f96fad17d",
"assets/assets/images/foguete.json": "eab441d366e30b383096e702a538d0f8",
"assets/assets/images/fundo-colorido.webp": "79b08c6eebcab0833b6e5794d841dc80",
"assets/assets/images/fundo-hp.webp": "d94132578867c2cf268a980be25a4d38",
"assets/assets/images/fundo-preto.webp": "90e5c7b75793fa9783f11a097cca8c01",
"assets/assets/images/fundo_web.png": "99970dae36a32021f47e7a9c2f509573",
"assets/assets/images/imageLoad.json": "04ba4c45b45a68e6928a56f1107878fa",
"assets/assets/images/login_background.webp": "170e36bda9be1875dd2e5a30c3e0fe49",
"assets/assets/images/logo.png": "05ee938277a12ed2f4e8903d7b7b4c21",
"assets/assets/images/logo_colorida.png": "4bfa2bd8e313e917df7f946eb8315a43",
"assets/assets/images/qrcodeamarelo.json": "4a7b2c5250159da24110a81497f49a37",
"assets/assets/images/qrcodeChecked.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/assets/images/recepcao.webp": "61eb6b0408604d036f61ab64bc2bfd24",
"assets/assets/images/salao_musculacao.webp": "7c43827a4ee9197324cb9ed34cbc0b7f",
"assets/assets/images/sala_avaliacao.webp": "3bb00bfd60edb97e5fa6db9a0baf7310",
"assets/assets/images/search.json": "c1019837d0bfa510870180c983890b9a",
"assets/assets/images/unidade.webp": "69b95971db7c608578e598594b73b73c",
"assets/assets/images/x.png": "98c77274ea98cf0b4588f93bfb666561",
"assets/assets/images/x1.png": "4f74e06a0381573245d31aaa9ab4770a",
"assets/assets/playstore.png": "230961f42d5e2960ddf4bb1900ab50fd",
"assets/FontManifest.json": "fac338875b6683bfb56bb7b436659334",
"assets/fonts/MaterialIcons-Regular.otf": "200e89cb9cc7b88f8e17c1f1b0c4599f",
"assets/NOTICES": "4e2ad9274ee5fe1d05a05e6574e0066e",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "438de12f2a6471cb4813a9e5006e31d7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "22222c78589d94eefc073320d3b5dbdd",
"icons/Icon-192.png": "220d848fc46ac1c12302dd551deeb419",
"icons/Icon-512.png": "aa10f7f6c7aa0e0d1f25af2c57ad6930",
"icons/Icon-maskable-192.png": "220d848fc46ac1c12302dd551deeb419",
"icons/Icon-maskable-512.png": "aa10f7f6c7aa0e0d1f25af2c57ad6930",
"index.html": "b5221a1d3a7a4f62c6b148be367a2c02",
"/": "b5221a1d3a7a4f62c6b148be367a2c02",
"main.dart.js": "1f54394ccd6d7ee3e145b0dca8b0d74a",
"manifest.json": "0584398268525359d5693a1d18f4a3b2",
"version.json": "78b56b0437d81ba76a5c7e04c6f6b199"};
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
