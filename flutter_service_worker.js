'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "6772a94bbbab691e5d908bf4eff13282",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/02/aeb627e475cd524efb79ce3e4a43823e481c14": "b9f4493567befb0b20ef65e49876221d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0d/341ead1a3aa358f02b8f12440f9869b3420f78": "fd4cd4be80a8eaa38841db0a77ed3dc0",
".git/objects/10/f11bc139859195811bb279c39a40a90b9fb97b": "34b54f970bf4339a17e93cbc83dbbc96",
".git/objects/17/a5b580c97605e40e1c8a8fac2cc429bcadf56d": "2704e9ce848c3877c28883eb198d6b5f",
".git/objects/1c/842e2187d8651bfe26475612826275b377dd51": "885ef564e96457590d35f2ce29456bd3",
".git/objects/1c/8bf4ca10083d9477810bf309ad9501a8452c2f": "4d2ba8168db1145408181ba5c5d44e58",
".git/objects/1c/fa5891cb714a00fbdae9054b54ce99c56d2e65": "4eaf79737d2868b254bc90bb5343bc63",
".git/objects/2e/68fae7cc9954a209b1486da8ad9f35cdaf12a3": "d30faf0608a6e93ef259b71e96f5907e",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/34/63388ba052c3f265b803ca1d602197d633a63e": "52a765c90610d5c8a56ea30ed9859f2e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/ac1aed677dbb1e9a334047f369f7839114d39a": "88624f1764e3acaee3032150f5f45216",
".git/objects/39/b5d866c49bd6b7cf09e30ae097af6565c05265": "3c5eb83730136ced877ded029ebaf4a5",
".git/objects/3e/220727eadb05da54a16297e8e5d3748d7a506a": "ea5e11e1551ba320f84414cd8790b386",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/cf9354209c61afb8de69991c27a4277687356d": "6ad1286a328c2ef8f75e3eef4f145e6a",
".git/objects/4a/ededc15730302528125e6f5db6ec4af81ad0b0": "da2423c61404dc79e78096edc9551637",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/55/8580f13c16044022b9a46fd2eaec3e9af2d6a8": "69fa04c1636b626092305bae58da1361",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/01ea73a5f5e3dad9f08b521381d5bd64eea8c9": "c14b7cd1f7fab5cebb420b62aca019e2",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/fd674c0f0459316b9b4a3cf2e9d4e866c52368": "aeba6b84471160b3d9fb69f680f63cc4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/65/41e9d87e656f7b341c853abb4ced9a6397ef39": "e73ebf51faff6dfce005f934b38c2ed4",
".git/objects/69/9dfb7441eb902a78d346c33d34214b682700fe": "f8cf4ceaef9c956441915678ec32719f",
".git/objects/6a/b943e68d91b106db9759b2a69133de96cb0d00": "1567a419b487077568c43b7182564c55",
".git/objects/6b/70f1b5ed0b462a84378abe8982f3c33db86603": "6aa1ceccf8bf4f732414cce53de2d509",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/7c/91f3aa4370de4b4a68a6bec202da87a95825d6": "cd329e0a4e98a83ce1bbc0e6fa22a63b",
".git/objects/7d/b561ecb410b6aa241e706f41a62773a48f3c94": "0102df1f619aec14f27987bbce2d614d",
".git/objects/7f/b91599b9e3b573d9aa3b8cd8425a69c58ec0b9": "7e922ee77bfb770cb406d0d0cbb2ae59",
".git/objects/7f/cd9d240c8fb92386fb69334e947246b8ef603c": "c999b53f76cc0b33ba7b8753ef36b8ee",
".git/objects/83/86cc928e73264adcb35e06e22c708457daef0c": "3176012d880c727c4b191f89dcdc99ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f496ea72ce4bd04bedbf8fe0639eb59efd185e": "188905fbbafb32b1ef6b4809394d54f5",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/2319fa905749d37f7caa52e0d1b54406091d1d": "af7c39ed905a83b96c2fa62e13ad356c",
".git/objects/9f/8c4da5dbb8b9367811c6267ddcfecdf3acefa7": "d37b1d3ccce8a3ced59af1957143a991",
".git/objects/a1/6d5fa5d245ac2823afbaf21f656675d78355af": "dcacc2632dcf053736375f782ebc14d7",
".git/objects/a2/0f04686183603b381215847110c33de6000fc1": "8a635ca3e907a27bbc38dc1b076b0f8f",
".git/objects/a5/99244e79446216fc0b5b1cf70a21b1e5cff53d": "af51b1f42185b31cb4a431ebfb58391b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ec906681df023051d80d65fd87cfc860b11659": "a3a6427417a9c70961b74849957895bf",
".git/objects/ad/0741b4a478bd391cdb606839109312c1a08982": "fdc457a5b748e7543e9f3d19f497f8dd",
".git/objects/b1/fe505b540cae198bca850a65eef1ddd7ffb018": "b8dbe1dcb8ef744633b7b29319915fbc",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/c4/ceb9e6caec7dfd866a7fb16e12708ee9cab083": "001f46d9167783e9ecb9a4961cdf5d7b",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/5fdb37ecc06afa3fe17248e1f742e07c43f36c": "a9f744b5d04c04d43ab6ac876881006e",
".git/objects/ca/af1a87301a562656ec29068aa0da7e128e1947": "eaf31984b353b7bed62430c217d695f4",
".git/objects/ce/6e784df3601616dcf4415dd6570a65572264d2": "adc6d823109a6fcd13c43cb28e38b717",
".git/objects/cf/a6bb6b55063585220392f5b5a8a8de2f1ea45d": "c7f2e57495350139aa4741310eae5457",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/acf773d7edba23b15d2754b0c600027a927930": "ef04700c88d5038eb6be131187e4e76d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f8/1d8324b504e61c44816e0a95a028898021871a": "18474489b9b794b17ed0fac1b66a058f",
".git/objects/f8/229c4e24812f77e0c3e26d7826d116a64ffbf3": "b31de7837e2a8d5b25a297b8f6940922",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/fe/82aa8479a4dfb220b44a87518de441049115b7": "7a8db1ae4e61f075a663c66b3c1e216e",
".github/workflows/deploy.yml": "918f1e521cf31a6cf1d5fc9fdd3b5c44",
"assets/AssetManifest.bin": "9cb3d0d18d3f0495aa2cc20a6ca0a33b",
"assets/AssetManifest.bin.json": "d45ca7802bcaf374a426209af287a3e7",
"assets/AssetManifest.json": "4676c67cac5a4d66765cdabeab55e557",
"assets/FontManifest.json": "c1bfbd75bf7dcde190724a71232189f4",
"assets/fonts/MaterialIcons-Regular.otf": "9be3786d0454be860aff1a3dae6bba5c",
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
"flutter_bootstrap.js": "bbc92c1be98442a3432d74ae8020912b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5221a1d3a7a4f62c6b148be367a2c02",
"/": "b5221a1d3a7a4f62c6b148be367a2c02",
"main.dart.js": "4983ebfb003eb8b468872513369a1e59",
"manifest.json": "0584398268525359d5693a1d18f4a3b2",
"version.json": "78b56b0437d81ba76a5c7e04c6f6b199",
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
