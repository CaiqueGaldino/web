'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2931586fa8984339e82665166430f0f9",
".git/config": "cfe390f57a3c20a01d654ecef909b965",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29369feda51d93fe75f89f71c63e0d97",
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
".git/index": "120f957891a5538e44f0e49339b75421",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "87de363f163989d0ba6eb33e9924e6ba",
".git/logs/refs/heads/master": "87de363f163989d0ba6eb33e9924e6ba",
".git/logs/refs/remotes/origin/master": "dcf52ba3e4d16029c816959178ba87c5",
".git/objects/02/87a529c6305beae5e1a1c69efb29fab90d99a0": "f9d025d93a0e29a0672cbf4832c0206c",
".git/objects/02/aeb627e475cd524efb79ce3e4a43823e481c14": "b9f4493567befb0b20ef65e49876221d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/000028aab7f065b41631f42229dba28487e5f7": "fd420c86bc3e63cb8f5aa94f9aa2ed63",
".git/objects/08/3248fac797593e82a387548427824bf46a4a27": "ef8d52b3d340c39baf229983737f8bee",
".git/objects/0c/d2a2109745501c5a428ab40cb2d3d9e6d4e48c": "5f1d95a2ea70fcd2a46a4ce14f0e0b98",
".git/objects/0c/d7e329c9bc9e023e2e5f7ac27346e6da7f8634": "8850edf355eb78b08ed20cd67729d003",
".git/objects/0d/341ead1a3aa358f02b8f12440f9869b3420f78": "fd4cd4be80a8eaa38841db0a77ed3dc0",
".git/objects/0e/bd768bf2aa9d1fa618e323e1ac433522e144cb": "fe43f3d78818c964bc3150da69c6c405",
".git/objects/10/f11bc139859195811bb279c39a40a90b9fb97b": "34b54f970bf4339a17e93cbc83dbbc96",
".git/objects/11/7765d27fab77c4ea0ed57dd59a3a24f8dbd4d6": "caaca148a579895286a76593334fb302",
".git/objects/14/5420178f7ad73eb614347f59ad456dcfbff3aa": "eeeda6f67fb099e0c63de877e2e52ce5",
".git/objects/15/aafd1a2fa0cf0b2c34ec3433c410210e4da767": "3ed23c41602704bedbe8cf1c56ecabfb",
".git/objects/17/4b01398fd817936f1b75bf1652ac759c2bb593": "a3d29a3e4be57881c3b265aaaee78841",
".git/objects/1a/4c902723eb5b73deec26c46907b5508c4ac384": "46e433ce29b4da75c767210a9f6c341d",
".git/objects/1c/525ef0ca9a1ccd7bab3ed0ffadbaf4e806e9ef": "9c46412e29dd5ed7232b272e8059653f",
".git/objects/1c/8bf4ca10083d9477810bf309ad9501a8452c2f": "4d2ba8168db1145408181ba5c5d44e58",
".git/objects/1c/c2a7321e3dda5539ad7851d4d8d37d0fd3cc58": "3377cfb20a6f5c67624142f7c6c68407",
".git/objects/1c/fa5891cb714a00fbdae9054b54ce99c56d2e65": "4eaf79737d2868b254bc90bb5343bc63",
".git/objects/1f/eeb0d59b9a60f88a4b9e6f9351ed7e94ebd9b7": "536958b6cf2f48b863bd5c782ec8571c",
".git/objects/20/8d8dac7f12e4a4cd9ef09277e9f5ca6902917a": "39d0aa8a80b759b66840f27b3577a1b1",
".git/objects/24/c4ef365b46ea2c3dfb774eb7f9b684ff0b2a83": "12ad4f617c93833fc3e8f71358d426f0",
".git/objects/2a/fde6f3ff921c2012457498f95a6cd8aafc68dc": "6fe5cf2b2e1349d6151ced1074ca0454",
".git/objects/2b/03bbc0efc764e973ff3f042b54025f425fa0ea": "f383ceb5b0508c22c3b55a960343cb44",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2c/8c19ebfb9144084f0aa6e6fa698e2fd323cf88": "8a576c0c789b556dda764b59e044bcf6",
".git/objects/2e/68fae7cc9954a209b1486da8ad9f35cdaf12a3": "d30faf0608a6e93ef259b71e96f5907e",
".git/objects/30/22cb93bb0c6b829b00921af97cb11e2b90b5b3": "e0607f52e36ea7bff13023ab3a10ff06",
".git/objects/30/a502cdda9854084e1a63bd10c39ccc2f4f56c2": "939e44acb7cf5d5b55aec3b0c428ab83",
".git/objects/32/8bcb204898704f9eb2cc3aad2910002a66475a": "551f54340373c276ba6f1e5dca948b6a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/63388ba052c3f265b803ca1d602197d633a63e": "52a765c90610d5c8a56ea30ed9859f2e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/b5d866c49bd6b7cf09e30ae097af6565c05265": "3c5eb83730136ced877ded029ebaf4a5",
".git/objects/39/ec97fba41f6f7b1805dd8e3eeaa5bb3cca90b2": "ce4f59f369cd35ee6b700094bffb83aa",
".git/objects/3a/a31f90f949e501e9e76e905f7f8bf0429900b7": "2195376debf554385a322f9e2cb196a2",
".git/objects/3e/9811c3762972afae16e32e4be121514a406579": "0a12c2faf2aa43398ab88e559d460597",
".git/objects/3f/eb58b8b15f947f8270a3915b4a235d32f34bca": "24cba7ee6931384eaa1cf40cac6722b6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/289ad4a5784fef01b71352a4584852cf1cfdaf": "6fe81d3ef99459d635993d3c248148e7",
".git/objects/43/b558e0fc93acdb059651067ee0af64bbeed70c": "1961f34b18d1724b63e408faff74b049",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/48/9fb0e9e2c4d1bbcd6d74494b47033d2cd5b3bc": "702504c0b05d795316040aea20b39ad6",
".git/objects/48/e91de04518fa94fb9a76e2c53ca53d98b7839e": "d7c4da2af763e3cc472de6e3abd9508a",
".git/objects/4a/ededc15730302528125e6f5db6ec4af81ad0b0": "da2423c61404dc79e78096edc9551637",
".git/objects/4b/e36e73a8042479d575829066850f0b085a529c": "539a639dfa168aeadf1126a500bfc129",
".git/objects/4b/f332544f38838359741e9c58958b7dd9803ebe": "9566d831fc012f1344ab16f221cf5b25",
".git/objects/4c/0899f04f071e64326bbed6c52c31782455f796": "33e1fc2cb23c75c329a520b9b4d2e8d8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/43bc19614ae20c3db62739d431fb3fd7c5088d": "97c7ea8b4e34372e10ce4b6ceeff88a8",
".git/objects/4f/9dd6a35b538a9b70862e6e4c00922d35440d6e": "0feb1c3a3e045d73f14032cd9ce3a1f4",
".git/objects/50/800e2b444c2058c0bce535497acce8d02352d5": "b5bb3436551328a11f2a1d8c977f5106",
".git/objects/52/bdb4b4dbfcabcf2ae13587269ab845ca40db7c": "686c82661ed9bd65d070a9b36fb69fc0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/8f23b68302e796d506d0ce82241f7edf7f3176": "16b9afe3847b3b471b497df7b915c5c5",
".git/objects/57/9c6c7ecda32f9004210b960218741300ec30b4": "406c4b0184f00d702daa4f6c8a47eb7a",
".git/objects/58/01ea73a5f5e3dad9f08b521381d5bd64eea8c9": "c14b7cd1f7fab5cebb420b62aca019e2",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/fd674c0f0459316b9b4a3cf2e9d4e866c52368": "aeba6b84471160b3d9fb69f680f63cc4",
".git/objects/5f/7e7a9e2915ab7a8f80c8f62e44dd02722606a1": "e547c9b5918f2e2944c3c0355f98bb7a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/6b41666c4c3b64c59f839ea14f76bb38ea3074": "a1421cde0a782a45a09e8837b2ddb7fc",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/9dfb7441eb902a78d346c33d34214b682700fe": "f8cf4ceaef9c956441915678ec32719f",
".git/objects/69/c12dec34b3b467e470709eb88a786ca097ab78": "868aab89a166a7fe82c2fe2a56ab32ee",
".git/objects/6a/155c3fc6b7790476b58c1226760ec8afb7e8bd": "cba1e236de92b3330d30365687483fb7",
".git/objects/6b/70f1b5ed0b462a84378abe8982f3c33db86603": "6aa1ceccf8bf4f732414cce53de2d509",
".git/objects/6b/e06cda1549a1f2f36e12bc8a501fad7de9e924": "5590df8260f833f7481e15d64ce874f1",
".git/objects/6c/139ae5357dae25e2a14d429ba56d71fc1ebf20": "41e057de1912034e84f10386a473c7b8",
".git/objects/6c/477551aef959137468e2955006cba438a87ede": "cf66dfc6ed0beb2419a27159d596963f",
".git/objects/6e/55096a5bd8d3d40a651e26494263475dd1ffd0": "8db268f224fdb9420db810715b869ede",
".git/objects/72/f61ab154488988ff2a3878e236626c798080ce": "e22d79edcd3f99f7c7ce0f6f955b9dd6",
".git/objects/76/062318eb3cd3d529ed400fb2616846087cfc62": "e0537df7d7296870dfffad2a2ad2a231",
".git/objects/77/5eb00f8e9eefe06bbeb28fa63dacf3540f759a": "a71670e8030c7e74dfdfb3d2e03fd80e",
".git/objects/7a/31d845636b81100da1e4a8a1cd974b3d5a8c7b": "0a8c21015bb5808ce3c9c4a6e3a97385",
".git/objects/7b/d53a58eeea7383b45f8dc26d1c7a3a0116109e": "a7010b9552737e6563e785b9138c3355",
".git/objects/7c/07000b0a71c3e4efc001e4b41f964a11f4e0e8": "a955286bc3e13d152c44b9f06732bb92",
".git/objects/7c/91f3aa4370de4b4a68a6bec202da87a95825d6": "cd329e0a4e98a83ce1bbc0e6fa22a63b",
".git/objects/7c/afebe10103888c4c0112228891bda525979aeb": "8d1bcfee4c0b0dce7184bf6b2c9258e7",
".git/objects/7e/5bc131b3d32b1c41744977958d06934e240824": "67e5e89af0d922947216adf2da8c7df5",
".git/objects/7f/b91599b9e3b573d9aa3b8cd8425a69c58ec0b9": "7e922ee77bfb770cb406d0d0cbb2ae59",
".git/objects/7f/cd9d240c8fb92386fb69334e947246b8ef603c": "c999b53f76cc0b33ba7b8753ef36b8ee",
".git/objects/83/86cc928e73264adcb35e06e22c708457daef0c": "3176012d880c727c4b191f89dcdc99ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/54ff4d88cb9977d49817cf6807ba455462b22d": "723a535e32b825be645af9826ac19a64",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/573a93c13cb1c142981c129014b41f35a28eca": "06b655b140f890b93b197a7e87142ca1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/8e89737a373db071765fb16c074983ca25f9b9": "d7900f3104b63dfb1972402dfd5fe7ae",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/af774bc83b858c0dc068510fa1a4ffeef19a39": "37e3c2dfaf077f89464f69412bbb4044",
".git/objects/95/6a9144230b928cab4231fc78b40a261591568c": "9fbc584e72c671d2010da42a64ad552b",
".git/objects/96/73f7c3015bcffc58298f67c61d31e468d63c20": "c02a0987c336ec0e666e9355b0e58ad3",
".git/objects/99/1140a7f2b875e7aa14b2c23fb1b56cc2567f57": "ac8e1253523e82407cfb47c1eeb706d3",
".git/objects/9a/c8d96975a36b8f7c352c9dbf7702337850ccdf": "2d6654cecca88c3381f7f07234644410",
".git/objects/9f/8c4da5dbb8b9367811c6267ddcfecdf3acefa7": "d37b1d3ccce8a3ced59af1957143a991",
".git/objects/9f/ddef2139afccf49754dbce283c5fe9e45bfa83": "5313d0fcd5514a47b59090e2ea2a80d6",
".git/objects/a0/c9b86f64c031230815db9398de4d6a7af40984": "a45e57ab2cc57a8781ba49f9b2298142",
".git/objects/a1/6d5fa5d245ac2823afbaf21f656675d78355af": "dcacc2632dcf053736375f782ebc14d7",
".git/objects/a3/788f829ac6f34cd14075ad1b1e6c8c11946499": "8a77eadd7094730062eb859efd3e8a1c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/0bf9b6749db7475f64e0a93ec22ab7bbc2d693": "324de5f87ea7a85ab4ba449d754caa68",
".git/objects/aa/ec906681df023051d80d65fd87cfc860b11659": "a3a6427417a9c70961b74849957895bf",
".git/objects/b1/a7c70a8fba449046e8b86a767fb252d93597ff": "3b4850254b1706e1fd4201039ba5f074",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b6/a25135794a774566c14180f18f9e69cf4deef3": "74ba291e3accc8b2a4830f57c1411414",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5a5d87672a7aecf7354fb6c3936404c9316012": "2a9a33ed9aaafdcfea6e13d4b5353fb3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bf/6d9d2a3cf47c7ad096c779dd74db29e43de741": "3687827f0345af50c606a91b9cea5ca1",
".git/objects/c4/ceb9e6caec7dfd866a7fb16e12708ee9cab083": "001f46d9167783e9ecb9a4961cdf5d7b",
".git/objects/c6/8eee9613d6469b2581be24ad50f401f3787780": "b5ec95272b0727d41b528e7b7d48052b",
".git/objects/ca/af1a87301a562656ec29068aa0da7e128e1947": "eaf31984b353b7bed62430c217d695f4",
".git/objects/cc/2cbde3525ff5694b384787de94d7c451ee70c5": "c2a265c448bc608bde895d79fb548bb2",
".git/objects/cf/067205c83000527e97b4fbdab153975614b7af": "f28d9b7ee2339306e66cd59288193711",
".git/objects/cf/a6bb6b55063585220392f5b5a8a8de2f1ea45d": "c7f2e57495350139aa4741310eae5457",
".git/objects/d1/7989ba1ff245fe03361fafb187023742ed73ad": "7b13604a1647a09a5e6f5adff0ff5277",
".git/objects/d2/3e6dbea022224fa04017ac858878c36de47689": "a79b007cb119785357624aacb98aef70",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/692e976733f7f0317d935579dfea6890bc68bc": "fbfafc4d1b71cd0aec670b9da9b21354",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/bc2b23d7c3a04c5d5529c97232db2a684f79ed": "a83aef1ae5186237bf2587f80ed65eff",
".git/objects/e6/50e7d35f21b40c3edc636bc0ee84825dc237c5": "733f1130a5a5830bf7dc32943a7b0431",
".git/objects/ea/59110a2865e54b9e2cd05ffbd94657ed3d17e2": "04851466e5f19dd2c4cbfb9beb63b174",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c0cc09bfe481f0e90369b37f7e579612ec24d5": "78241a7158f5123a069bc23d1dce011d",
".git/objects/ee/edf130967dadc337408fe56aba55f39a870504": "35450f493107309bca80181105372ffc",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/ec36fe9b37f474f5defd2e2a8a511a787a2cf7": "557ff020ea580da93a3f33da10b01958",
".git/objects/f7/5252160c48446b65b1d20d157c9d8fb0120776": "e2159592d3d400e315f79f70c08fccbc",
".git/objects/f7/a50e4eb7b90e181f9c582cd42f5c549d8d96fe": "dbc252432283bf57687795bf6bcbbe40",
".git/objects/f8/1d8324b504e61c44816e0a95a028898021871a": "18474489b9b794b17ed0fac1b66a058f",
".git/objects/f8/229c4e24812f77e0c3e26d7826d116a64ffbf3": "b31de7837e2a8d5b25a297b8f6940922",
".git/objects/f9/1ab5dfd08053c94d7c64b4f18c3bbe16c6ad6c": "545a976eda3745edab1dc49b98790fb8",
".git/objects/fe/82aa8479a4dfb220b44a87518de441049115b7": "7a8db1ae4e61f075a663c66b3c1e216e",
".git/ORIG_HEAD": "aa69a8a550cc378313bd3b462cc968b7",
".git/refs/heads/master": "6cef2a3a5eaff4fefc0ca5e93e839bcb",
".git/refs/remotes/origin/master": "6cef2a3a5eaff4fefc0ca5e93e839bcb",
".github/workflows/jekyll-gh-pages.yml": "924ef685306852a6ac8c0388b4d5b5fb",
"assets/AssetManifest.bin": "df8eb3e87fd4330b5de0185eb220e6d0",
"assets/AssetManifest.bin.json": "8ca12cba861f48a75bf03f04acb49d0a",
"assets/AssetManifest.json": "dbce28bb7d5a2ecbce808221041afcf7",
"assets/FontManifest.json": "6bf336df0398e988fcea0edf135a0499",
"assets/fonts/MaterialIcons-Regular.otf": "4e5f6ce1ee9251fca5c727c93e4e64f4",
"assets/lib/assets/appstore.png": "77bdd15e721dbc80b5e2433a8876b8a4",
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
"flutter_bootstrap.js": "370c960ece04b56915e560499d406e15",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5221a1d3a7a4f62c6b148be367a2c02",
"/": "b5221a1d3a7a4f62c6b148be367a2c02",
"main.dart.js": "a2ffedceb7123b3d35d12f2f37cb82fa",
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
