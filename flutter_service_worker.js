'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "715fdc14a2a4f3e39b6fd51589bd3d83",
"assets/AssetManifest.bin.json": "ecd602f67e14bee46410ceb3fe8103ea",
"assets/AssetManifest.json": "268a5c94d55b11fc1d57c20f54165957",
"assets/assets/fonts/ArslanWessam.ttf": "1afcfbf9a48f974a0f4c9f287019e807",
"assets/assets/fonts/Caveat-Bold.ttf": "dbddd6cf09038dd8138f42fc3f2522d3",
"assets/assets/fonts/OrobanElegans-Trial-Black.otf": "8397d3becca19a43c69f37f50580d61b",
"assets/assets/fonts/OrobanElegans-Trial-Regular.otf": "27cbf0955f656bab3401a0005b902881",
"assets/assets/fonts/Peshang_Des_4_Bold.ttf": "acd6aacce0349fb6a1fa74a96b7b5719",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Rabar_013.ttf": "feb65e7e64300884bb9231a641f390b7",
"assets/assets/fonts/Rabar_014.ttf": "4c388e5b5097622cc1c346c7916bdb03",
"assets/assets/fonts/Rabar_021.ttf": "03d026fbc6d28522c0ff23ab50f3ba54",
"assets/assets/fonts/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Salsa-Regular.ttf": "14371573c900b1bac1eeee4740fa4334",
"assets/assets/images/afternoon.png": "8dba590eb64942ff6e5c4bf957fd3665",
"assets/assets/images/background1.png": "35b3bf607fe2f5ae8e5fc020167700f5",
"assets/assets/images/background2.png": "30dd45c706246ef81b03a91a14be15af",
"assets/assets/images/background3.png": "6c4c996129d78ffee8c400faa6e90e02",
"assets/assets/images/backgroundEdupal.png": "af1662e37986aee7d5bbb921fe4bb3d7",
"assets/assets/images/backgroundStudyZone.png": "b9a587dba779123a9a610f8787069e1e",
"assets/assets/images/bigCompass.png": "6c23b80fecaa7e1ba6dfd2741428884f",
"assets/assets/images/bookGroup.png": "5740df8f0904857c664d368f009b9e87",
"assets/assets/images/boyStudyingLaptop.png": "1145a88eafb9c24bcbd1290bdde71406",
"assets/assets/images/brainGroup.png": "56d291cb31e46e47f8e65af31affe257",
"assets/assets/images/calendar.png": "598d83abc72d0bb76edd17f69bd4d903",
"assets/assets/images/careerCompassLogo2.png": "5e6a2548e7c0c5d8a844b517ed35aead",
"assets/assets/images/chatBotProfileImage.png": "6fbfd11324da7325bdef4dd2f739c0fa",
"assets/assets/images/chatbotUsingLaptop.png": "fb9a6c22ca786911aabaae1787386711",
"assets/assets/images/Chemistry.png": "9b39495f3e71b19a4b4fb4239c9c7502",
"assets/assets/images/circels.png": "50b0be4bcb1b31c89071dde4e7b4d593",
"assets/assets/images/circleTimer.png": "0f26a818f1cff88660a3a3f374f82a24",
"assets/assets/images/Clock.png": "e400aad66cacba90554da3cbd18dd8b3",
"assets/assets/images/custom_circle.png": "c17c8ce56a6976743f89ad3e11206793",
"assets/assets/images/darkAppLogo.png": "d4808ff434464d2018a042a482074543",
"assets/assets/images/DarkLogoWithoutName.png": "84a9ee2fdde4481c15ecdc5bcc199b92",
"assets/assets/images/dust.png": "f124ef1e920f3663e9995e6411d31f14",
"assets/assets/images/earphones.png": "698695117abfea480599e93f9b63eb18",
"assets/assets/images/edupal.svg": "afe5cd60e18b35ebc03accf96422140e",
"assets/assets/images/eduPalBanner.png": "7013da21076fecb3e4b16c0f1d36add9",
"assets/assets/images/elementBox.png": "f7a4331eae709cdcda9a488d53405c57",
"assets/assets/images/femaleStudent.png": "6993ccfb7aa8c13777388bb0ad31288f",
"assets/assets/images/Flexibile.png": "2ea166b4193c10534d1bd42d13ded1be",
"assets/assets/images/Geography.png": "bf89208339ac7daad4cd96722dc261ab",
"assets/assets/images/Germany.png": "4a1e3592fbbd449aed15fcd3175bd436",
"assets/assets/images/girlStudying.png": "dbfc3d076971873cf29f756fe359a084",
"assets/assets/images/girlstudying.svg": "753023479a04ffcbb29d2092d30d4273",
"assets/assets/images/girlStudyingLaptop.png": "7dc2057cc6a7c0784de32e27956f533c",
"assets/assets/images/Glossary.png": "fb41b5ee1fc04ddd3c4462fc240c8234",
"assets/assets/images/Group186.png": "7fa63d597ab6397c4af0af43ec670ffa",
"assets/assets/images/hereLaptop.png": "ba6442e88b7de405e93bc484b7d4e6b1",
"assets/assets/images/heroImage.png": "d686bd314b77e753134e44d42a54fddd",
"assets/assets/images/heroLogo.png": "7a98cf7c91eb311e1a8088d8da272b83",
"assets/assets/images/heroPencil.png": "8d91699343aa84e40e9c50047528e362",
"assets/assets/images/hourglass.png": "db31fc4bc1e2f24f309bfbbe49cc38a7",
"assets/assets/images/Italy.png": "78a272c2614daae25000884d1cfd7378",
"assets/assets/images/lightAppLogo.png": "3d9ba198cb03d0329fa160dac547f549",
"assets/assets/images/LightLogoWithoutName.png": "72afd37ee5b4222686b51a9789f36537",
"assets/assets/images/login1.png": "b74fbdc5fc937fa644ac5f0dfa9b9309",
"assets/assets/images/logoCompass.png": "a648fc37944ef5be8641a6c2dd51e01d",
"assets/assets/images/map.png": "e1021edb90dd3a2753e626820d678fef",
"assets/assets/images/maths.png": "88940d138ed77b8c13354dc629b3e643",
"assets/assets/images/Microscope.png": "abdd835f034fa584ec4612519dcaf8d9",
"assets/assets/images/morning.png": "03cc8a093628b6b58a277122a5793419",
"assets/assets/images/musicElement.png": "cc9b6cff66c538d9c9a50171488158cb",
"assets/assets/images/musicPlayer.png": "84c741eae1e6bf566248604c14a511dc",
"assets/assets/images/Night.png": "48e0b4bcfc3a98fbc691a1ff81df2203",
"assets/assets/images/onBoardingImage1.png": "71e44555422286d97cfae6b83c5c6ac9",
"assets/assets/images/onBoardingImage2.png": "a128bcb8d5ff2d82f87db704de293ae5",
"assets/assets/images/onBoardingImage3.png": "815e3a12e374e63df3e39cf29da2087e",
"assets/assets/images/opacity.png": "6768860f9d2beca574ae4856bbb9b56e",
"assets/assets/images/OrobanElegans-Trial-Black.otf": "8397d3becca19a43c69f37f50580d61b",
"assets/assets/images/owl.png": "a8cbd93a033018edd580f02fb5fd3016",
"assets/assets/images/peerToPeer.png": "0e8d5f2e4d1f9554cb9d20925242725d",
"assets/assets/images/peerToPeerCircles.png": "84d4a775313e61741526736d92a7467f",
"assets/assets/images/Physics.png": "8719767d81062ee8e066abe6e71342b0",
"assets/assets/images/pilotHat.png": "8e7feb572dc9aa229883c8edcd9946b8",
"assets/assets/images/pilotHatGroup.png": "7e68d67cd363d379dc8fcfc4b435c0bb",
"assets/assets/images/Sari.png": "d42781492469a3b9d071482dbd407795",
"assets/assets/images/sari2.png": "ae7547132eebe4effd8df16a0335aee8",
"assets/assets/images/signup1.png": "62f823cc683e9a5099fa85f8cee0da61",
"assets/assets/images/Spain.png": "47ab5a48da3a538dbc0e601302a804f2",
"assets/assets/images/studyBuddyAiLogo.png": "691e9348d81ba2bee4cb78f4ce259abc",
"assets/assets/images/studyBuddyElement.png": "6b530d671b6f08c706182905e68e057b",
"assets/assets/images/studyBuddyElement2.png": "0b1a521152061eb4963db944e755c81b",
"assets/assets/images/studyPlanLogo.png": "38665d616f9f405cb548f5b81aee39f1",
"assets/assets/images/transparentDarkLogo.png": "da9f1faa656b5f7713d9d9e6003138ac",
"assets/assets/images/transparentLightLogo.png": "68fb782a8c83d3865398fb1ec041ebde",
"assets/assets/images/trophy.png": "cfe644ddeb0fecfc51042b8dcf8fe6d4",
"assets/assets/images/UAE.png": "ffc58b835443c6ffb8be59be2ae4010b",
"assets/assets/images/undraw_bookmarks_i66k.svg": "7f143f8f47e5158993cc58c17803eaa5",
"assets/assets/images/USA.png": "68302afb225b822c1c5f695bf573c698",
"assets/assets/lottie/Coming.json": "e1cad0788dfeb5fea2df0850d50ed0b9",
"assets/assets/lottie/ComingSoon.json": "1875bb1082098a485630592bdb28359e",
"assets/assets/music1.mp3": "c6c0421158d02cc81a9b556f2935cbc6",
"assets/FontManifest.json": "deeec56de5aa7060726fc384fe154246",
"assets/fonts/MaterialIcons-Regular.otf": "bede2286287ed0e100367461c5d90e69",
"assets/NOTICES": "91eab0b3a1f201f8eefe2ee543581ba5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2f3d47cdd1570ea5884f87c1ac87d88f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "417ba1823670062d8660edba2d021344",
"/": "417ba1823670062d8660edba2d021344",
"main.dart.js": "51bc49427e7682c002ad1f5d52d186a3",
"manifest.json": "596417f085868f5aad9e9ba4df89c7b6",
"version.json": "5db5308aade63ef52618861b3e35cfb9"};
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
