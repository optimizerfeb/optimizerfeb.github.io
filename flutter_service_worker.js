'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6b5205f65619cfe5ded9c28b5903ccea",
"index.html": "3e62d9ca991df05a39e1f9bee3463d26",
"/": "3e62d9ca991df05a39e1f9bee3463d26",
"main.dart.js": "f8757eadf84b3c29227d0acf74770d7b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"march.png": "6a870fc006faf0151d0ca3c4e1818627",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd2873af0f0a16bc4f0ab70b9243f8df",
".git/ORIG_HEAD": "62a72fd6e180d7a141682d85848295c6",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/0d/44af8e6c01a5f20e43adb4f76877dc8f0959be": "e408eb29d6852978382ebfa83ebf91bf",
".git/objects/59/38c0b061095155a747d9883c6aad301aabe1e7": "ce9a96fc713e1626b8419905fc5c883b",
".git/objects/3e/b01ca7f48f7ff72d2db7654ff7dbd00e6c334a": "d19029a91ae5f00adea15ed9b60f7d0a",
".git/objects/9b/805fdc0bfd4bd40164952afbf43c82b00cd967": "7a4228b095d424eaf313be2b2dd59153",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/3c/a8a41f4ec7b0f1c2c08bd395654583d9e3793f": "cb586ef9a977c474159c912f69efa4e6",
".git/objects/51/544f875b86de363e9c829e255090babff339de": "8bb8b5c53914df6d0c6cf8210da6de9a",
".git/objects/58/84959075949a5fcfa32e4d18ddca0d45e834b3": "1c04f6ef24ec8b3313d23766af938d78",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/a3/9f26a2ab951919911f718144f49ce4d782f6ee": "5cf2da64dc13cc43a91cf4a8a090c94b",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/e4f9834e5d202142c490ba7b97675268a74f5b": "99b72a4ab76d7b1646f6dab9eb04764e",
".git/objects/d8/a620b03c369e3ffdabfc2d25dcbec331ba0a26": "46205763b07ff2326043829701cbcabc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/cf/fb35a31bcfefbeee9a638679d39cdcaba127b1": "7b1160ae70b8ace4bf84d828f76c5e42",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/272ee06b3620d6d02fd0e1eb87c8e64e25cdb1": "b96d9d2f367eff754a987c176f7bb830",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-d6fa3fb32c83cbf1b119ebb8ccd8742af9f7e6c2.idx": "236745cd9039b64975d95b9a211cbec2",
".git/objects/pack/pack-d6fa3fb32c83cbf1b119ebb8ccd8742af9f7e6c2.pack": "8a2881b56760da0a33807e40d980c6ac",
".git/objects/pack/pack-073afd37e5de062e70522ca65bc5c8c22f136651.idx": "24da8eb600cc2b0d87cc3e077164b332",
".git/objects/pack/pack-073afd37e5de062e70522ca65bc5c8c22f136651.pack": "7ff70c2c9c154d3fa93e33ddb0ba31b8",
".git/objects/16/31e25d5b4b9abec933a91ffc9e93f993d13e93": "73fefa27635f77a054fce4c3f9362fd9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/4500248bbfb7f32e1e0494a9ed6cb66d816554": "a5e7ff8a4765c81fdf74d26a3d85b1a9",
".git/objects/89/693023406c5273c2cd0162a2fe3755799d5cac": "3f098a83bbecacb49690d55b2a562306",
".git/objects/1f/2a32becba85bd5dea4eacf34e1045133b9689c": "fb045709619e9341a6e582fed207b071",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/44/383229be610358cd787341a066efa97932400d": "4fc25f5cb95619c9b07a84d6e54778d7",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/b62af64198ebb0cf8faabb003264072b4d1069": "e1c91460884e8a9a3dcea1dbaa12b737",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/c8b636d67e036b9ad67b99d6a1d869e65fe66e": "ec0d06056687815b065b6bb2b2ceaa6a",
".git/objects/9f/bdeef8184867c230c5f98355112cdc8a6b1dd7": "33f601ad2f04c35bb328bbefe9d186d0",
".git/objects/38/99af4de1db9933ad54a8ada74943345dbd5884": "58124870b5ccf9afb15742a481c1ed01",
".git/objects/9a/0817b9fcef7dc81055d67d8621147f0a9fd1f8": "061b9b39dc7793a4a839c3f762e389ca",
".git/objects/36/2434bd0dbc463c7e875e26d2c0f61426ed0d0e": "2eecca6b2f331a061e3d61ff82dbec1b",
".git/objects/09/318c1b4a115d2bd6dcc5ea959cc6f0400828c8": "a21856d51ee1662ecfc3e5286cb08425",
".git/objects/31/f7d3e90f7dde3a885d1a36d8caab51c89d6c89": "d6f52b2c08c532d00ee94d4d911de7b7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/ea60d5922c6b04625b67dc6c59405fd877ebbb": "09d3ba1f14fb6691fb0ff0325d07ab14",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/37/4c4a3cc824fb51886248355c9300deb4586d4a": "9602e053d79125ea590b2337a1dfb07e",
".git/objects/08/ee5d3631d2605485eb137dbda85e8a1d86a5a7": "1ad4bf4089972a175b4229be42fd8d5f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/55/e5e7f01339b18fb3d7d319d356589ab9ea914e": "41aec4ced6f5d94c2628c6d1015f787a",
".git/objects/0a/ef7163de7f8e6d1734cdc8aae7f1a1495ff090": "cdfea52cf02cda55e8b945a1c3b53a4e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/b1/04bd206272ec0d167d37bed79693cac6b884b7": "8f7532a861e0a6e74f36cd3d1e59de45",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/7eb3d2987d265cc93f4459eec23acc0037a7da": "039542276fb5f80dd92ab27457b391b1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/1552edf198db537abfd3ba796688d13a3d01b7": "f6fc7866957ce7da4a9b0e4bce3b928b",
".git/objects/ef/6b37ce94b8574acce31c7c4ddce25c2891a346": "fd7994e762940e7c12e2f215d19cdb4a",
".git/objects/ea/f4a3eff6bf15bdf9efcd48ea875a8c7c6810d9": "74f7606325605565597ec7e526ec06b6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/58b0bea0fed0fdb59482ab3a2d7fce9ff29f27": "81cc47ce15c3ae52f365b0259beeee41",
".git/objects/f7/1de70bb9ef65e3b9dcbe5e51b2625a55982f14": "93be11d8fc3b3c0533a69104fcc88ab4",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/383ae07fa2df4a9f8736919e9be021d37fdba2": "ffadbe9fd45b4c008ae629e67dd4933c",
".git/objects/e9/1b1cd9ac700943a908b7069815332e5824891b": "4fe6daa0dfacf796d51800da7a0b614f",
".git/objects/2c/d3523516ce98a24d733d9572347b9a6a49d86f": "2a23b0cd2c6b10357b035ccd76ae39cf",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/8d/833615f112cc05392ecd7814da7ac249ca2089": "71da1f1782f20e3779ab544238f1bd5f",
".git/objects/8c/a2035e0f8389bc4df3557e8e4560e5b71017ab": "756ae8aa8c0ee33efa8a914e61a7510a",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2b/afdecdf92564f4b97a65db436903f789e02292": "504a50eaae011b80286e68bacaad7463",
".git/objects/7a/9369021d7aeaffaca7f706667d5a4cde042460": "abb6404e932821f0612ad3cf7fe98104",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/8fb97b28735bea15c991ae77e7da17d94b4fdf": "8301f3db0fd718b71eb2f42f8f597774",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afaf25b0379c32d7a8f8a0a33eee3568",
".git/logs/refs/heads/main": "afaf25b0379c32d7a8f8a0a33eee3568",
".git/logs/refs/remotes/origin/main": "9ea71d291a17fcc70405f6c7c997009c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "30913919620e80e387bcf0b3466f0f9f",
".git/refs/remotes/origin/main": "7ed98c0d9039e67100a018315f1f5fa4",
".git/index": "1fecba115b8f87075f7d9709bf188c5a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "1229518066da4a388ebe2b445b83b56a",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/index%202": "5560ec9d22ed8138d9d8c4c4d8d9c13b",
"assets/images/marchcode.png": "03b9bf679c8a04e86daa3740e50b51ca",
"assets/images/torus.png": "78cc510f4134421f547fe73f9dbcc4b3",
"assets/images/march.png": "6a870fc006faf0151d0ca3c4e1818627",
"assets/images/raytrace.png": "25ab798eb47c0a9450327d60ebd1195b",
"assets/AssetManifest.json": "494046ac47c2b4403bb2643d44ff0cce",
"assets/NOTICES": "a9cc1f64a9dc56e6ce81212bc7b230f4",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e8590fc4c1f69a0e5b8a5b7c0714dfbf",
"assets/fonts/MaterialIcons-Regular.otf": "53d41a47e3835d528f476f538beddb1e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
