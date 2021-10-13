let appShellFiles = [
  'assets/data/data.json',
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
];

const covers = [
  'assets/covers/El abrazo mas largo del mundo.jfif',
  'assets/covers/El David - Para toda la vida.png',
  'assets/covers/Evil Angel Breaking Benjamin.jfif',
  'assets/covers/Fire that burns - Circa waves.jpg',
  'assets/covers/Halloween lofi mix.jfif',
  'assets/covers/Life goes on - Olive Free.jfif',
  'assets/covers/Lofi hip hop.jfif',
  'assets/covers/My dark disquiet - Poets of the fall.jfif',
  'assets/covers/New Albion 1.jfif',
  'assets/covers/Por mi mexico.jfif',
  'assets/covers/Rise against - Architects.jpg',
  'assets/covers/The joker and the thief.jfif',
];

const songs = [
  'assets/songs/Breaking Benjamin- Evil Angel.mp3',
  'assets/songs/Circa Waves - Fire That Burns.mp3',
  'assets/songs/El David - Para toda la vida.mp3',
  'assets/songs/El_David_-_El abrazo mas largo del mundo.mp3',
  'assets/songs/New Albion 1.mp3',
  'assets/songs/Oliver_Tree_-_Life_Goes_On_Music_Video.mp3',
  'assets/songs/Poets_of_the_Fall_-_My_Dark_Disquiet.mp3',
  'assets/songs/Por mi mexico.mp3',
  'assets/songs/Rise_Against_-_Architects.mp3',
  'assets/songs/Soothing Breeze - asian lofi hip hop.mp3',
  'assets/songs/Trick Or Treat _ halloween.mp3',
  'assets/songs/Wolfmother - Joker_and_the_Thief.mp3',
];

let cacheName = 'bloom-id-1';

appShellFiles = appShellFiles.concat(covers).concat(songs);

async function openCache(cacheName, files) {
  const cache = await caches.open(cacheName);
  await cache.addAll(files);
}

self.addEventListener('install', function (event) {
  event.waitUntil(openCache(cacheName, appShellFiles));
});

async function getResource(request, cacheName) {
  let requestCopy = request;
  if (request.match('/browse')) {
    requestCopy = request.replace('/browse', '');
  }

  const response = await caches.match(requestCopy);
  if (response) {
    return response
  }

  const networkResponse = await fetch(requestCopy);
  const cache = await caches.open(cacheName);
  cache.put(requestCopy, networkResponse.clone());
  return networkResponse;
}

self.addEventListener('fetch', function(event) {
  event.respondWith(getResource(event.request, cacheName));
})