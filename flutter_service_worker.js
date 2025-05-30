'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cd7e13d7a310095d15437f89201fa58f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "acccc6f2f31ab7654d2c392502a0f623",
".git/logs/refs/heads/master": "acccc6f2f31ab7654d2c392502a0f623",
".git/objects/02/aeb627e475cd524efb79ce3e4a43823e481c14": "b9f4493567befb0b20ef65e49876221d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/000028aab7f065b41631f42229dba28487e5f7": "fd420c86bc3e63cb8f5aa94f9aa2ed63",
".git/objects/0c/d2a2109745501c5a428ab40cb2d3d9e6d4e48c": "5f1d95a2ea70fcd2a46a4ce14f0e0b98",
".git/objects/11/7765d27fab77c4ea0ed57dd59a3a24f8dbd4d6": "caaca148a579895286a76593334fb302",
".git/objects/1c/525ef0ca9a1ccd7bab3ed0ffadbaf4e806e9ef": "9c46412e29dd5ed7232b272e8059653f",
".git/objects/1f/eeb0d59b9a60f88a4b9e6f9351ed7e94ebd9b7": "536958b6cf2f48b863bd5c782ec8571c",
".git/objects/2a/fde6f3ff921c2012457498f95a6cd8aafc68dc": "6fe5cf2b2e1349d6151ced1074ca0454",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2e/68fae7cc9954a209b1486da8ad9f35cdaf12a3": "d30faf0608a6e93ef259b71e96f5907e",
".git/objects/30/a502cdda9854084e1a63bd10c39ccc2f4f56c2": "939e44acb7cf5d5b55aec3b0c428ab83",
".git/objects/32/8bcb204898704f9eb2cc3aad2910002a66475a": "551f54340373c276ba6f1e5dca948b6a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/b5d866c49bd6b7cf09e30ae097af6565c05265": "3c5eb83730136ced877ded029ebaf4a5",
".git/objects/39/ec97fba41f6f7b1805dd8e3eeaa5bb3cca90b2": "ce4f59f369cd35ee6b700094bffb83aa",
".git/objects/3a/a31f90f949e501e9e76e905f7f8bf0429900b7": "2195376debf554385a322f9e2cb196a2",
".git/objects/3e/9811c3762972afae16e32e4be121514a406579": "0a12c2faf2aa43398ab88e559d460597",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/b558e0fc93acdb059651067ee0af64bbeed70c": "1961f34b18d1724b63e408faff74b049",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/4a/ededc15730302528125e6f5db6ec4af81ad0b0": "da2423c61404dc79e78096edc9551637",
".git/objects/4b/e36e73a8042479d575829066850f0b085a529c": "539a639dfa168aeadf1126a500bfc129",
".git/objects/4b/f332544f38838359741e9c58958b7dd9803ebe": "9566d831fc012f1344ab16f221cf5b25",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/bdb4b4dbfcabcf2ae13587269ab845ca40db7c": "686c82661ed9bd65d070a9b36fb69fc0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/8f23b68302e796d506d0ce82241f7edf7f3176": "16b9afe3847b3b471b497df7b915c5c5",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/fd674c0f0459316b9b4a3cf2e9d4e866c52368": "aeba6b84471160b3d9fb69f680f63cc4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/6b41666c4c3b64c59f839ea14f76bb38ea3074": "a1421cde0a782a45a09e8837b2ddb7fc",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/9dfb7441eb902a78d346c33d34214b682700fe": "f8cf4ceaef9c956441915678ec32719f",
".git/objects/6b/70f1b5ed0b462a84378abe8982f3c33db86603": "6aa1ceccf8bf4f732414cce53de2d509",
".git/objects/7a/31d845636b81100da1e4a8a1cd974b3d5a8c7b": "0a8c21015bb5808ce3c9c4a6e3a97385",
".git/objects/7c/afebe10103888c4c0112228891bda525979aeb": "8d1bcfee4c0b0dce7184bf6b2c9258e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/af774bc83b858c0dc068510fa1a4ffeef19a39": "37e3c2dfaf077f89464f69412bbb4044",
".git/objects/96/73f7c3015bcffc58298f67c61d31e468d63c20": "c02a0987c336ec0e666e9355b0e58ad3",
".git/objects/9f/ddef2139afccf49754dbce283c5fe9e45bfa83": "5313d0fcd5514a47b59090e2ea2a80d6",
".git/objects/a0/c9b86f64c031230815db9398de4d6a7af40984": "a45e57ab2cc57a8781ba49f9b2298142",
".git/objects/a1/6d5fa5d245ac2823afbaf21f656675d78355af": "dcacc2632dcf053736375f782ebc14d7",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ec906681df023051d80d65fd87cfc860b11659": "a3a6427417a9c70961b74849957895bf",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/ca/af1a87301a562656ec29068aa0da7e128e1947": "eaf31984b353b7bed62430c217d695f4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c0cc09bfe481f0e90369b37f7e579612ec24d5": "78241a7158f5123a069bc23d1dce011d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f7/5252160c48446b65b1d20d157c9d8fb0120776": "e2159592d3d400e315f79f70c08fccbc",
".git/objects/f8/1d8324b504e61c44816e0a95a028898021871a": "18474489b9b794b17ed0fac1b66a058f",
".git/objects/f8/229c4e24812f77e0c3e26d7826d116a64ffbf3": "b31de7837e2a8d5b25a297b8f6940922",
".git/refs/heads/master": "a38a0ce762d0f6594a5f36576e93a030",
"assets/AssetManifest.bin": "620a83bc8e7eac0e117af1f5974f8ae0",
"assets/AssetManifest.bin.json": "970495c4542f528db11cae2d371acdf1",
"assets/AssetManifest.json": "3d3dbfeced0aba1ad7526a1c5499a25d",
"assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"assets/fonts/MaterialIcons-Regular.otf": "fca541a3c6afc946478f239d952029d1",
"assets/lib/assets/appstore.png": "77bdd15e721dbc80b5e2433a8876b8a4",
"assets/lib/assets/images/checked.json": "56b3208ebafe759bd4e2f0c0dee072cc",
"assets/lib/assets/images/coletivas.jpg": "f0f803a92f5f773be241bb2eb4e9758b",
"assets/lib/assets/images/copa.jpg": "a6f6bd865e7f88a829e5cc4af6febacf",
"assets/lib/assets/images/ergonomico.jpg": "94c04beeccccc8f73a8e825e6f7efc40",
"assets/lib/assets/images/externo.jpg": "4fdf4a04c7e46bd3834a2f151b800629",
"assets/lib/assets/images/imageLoad.json": "04ba4c45b45a68e6928a56f1107878fa",
"assets/lib/assets/images/login_background.jpg": "6b4fb7555934df74a79753345b852260",
"assets/lib/assets/images/logo.png": "05ee938277a12ed2f4e8903d7b7b4c21",
"assets/lib/assets/images/qrcodeamarelo.json": "4a7b2c5250159da24110a81497f49a37",
"assets/lib/assets/images/qrcodeChecked.json": "fd177caf7df34f592af4ab291cd10a22",
"assets/lib/assets/images/recepcao.jpg": "808a3f0c98d723b571090ae2e0985e2c",
"assets/lib/assets/images/salao_musculacao.jpg": "f2cd441287b91aa4872ff44b3186df4a",
"assets/lib/assets/images/sala_avaliacao.jpg": "998a1376fe9baf4109d3d15a46ab3c2e",
"assets/lib/assets/images/search.json": "c1019837d0bfa510870180c983890b9a",
"assets/lib/assets/images/x.png": "98c77274ea98cf0b4588f93bfb666561",
"assets/lib/assets/images/x1.png": "4f74e06a0381573245d31aaa9ab4770a",
"assets/lib/assets/playstore.png": "230961f42d5e2960ddf4bb1900ab50fd",
"assets/NOTICES": "c8c19bb99c59bc225b2ebe5d0fbf6304",
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
"flutter_bootstrap.js": "8787bd9d56a9914f767401dc11a5155f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5221a1d3a7a4f62c6b148be367a2c02",
"/": "b5221a1d3a7a4f62c6b148be367a2c02",
"main.dart.js": "0f4b1fca9bfd84b3460aef736313d4fd",
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
