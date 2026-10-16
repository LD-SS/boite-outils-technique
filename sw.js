/* Service worker — Boîte à outils technique
   Stratégie « réseau d'abord » : en ligne, on charge toujours la dernière version publiée
   (et on met la copie locale à jour) ; hors ligne, on sert la copie locale.
   Changer CACHE à chaque modification de la liste des fichiers. */
const CACHE = 'boite-outils-v1';
const FICHIERS = [
  './', './index.html', './manifest.json', './favicon.ico',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok){ const copie = res.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
        return res;
      })
      .catch(() => caches.match(req, {ignoreSearch: true})
        .then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
