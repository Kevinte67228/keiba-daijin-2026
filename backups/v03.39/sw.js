// 賽馬大亨 10 2026 終極速查 PWA - Service Worker
// 快取版本號 (每次更新後遞增以強制刷新)
const CACHE_NAME = "wp10-2026-v03.39";

// 首次安裝時快取的核心檔案
const CORE_ASSETS = [
  './',
  './index.html',
  './master_lookup_db.js',
  './core_guides_data.js',
  './yearly_recs_db.js',
  './horse_subtopics_data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ===== Install：預先快取核心資產並立即接管 =====
self.addEventListener('install', event => {
  console.log('[SW] Installing cache:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        console.warn('[SW] Cache addAll partial fail:', err);
      });
    })
  );
  self.skipWaiting();
});

// ===== Activate：徹底清除所有舊版快取並宣告控制權 =====
self.addEventListener('activate', event => {
  console.log('[SW] Activating, purging all old caches...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting stale cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ===== Fetch：Network-First 策略（優先獲取最新版，離線時降級讀取快取）=====
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          return cached || caches.match('./index.html') || caches.match('./');
        });
      })
  );
});
