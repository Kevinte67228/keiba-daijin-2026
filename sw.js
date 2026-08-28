// 賽馬大亨 10 2026 終極速查 PWA - Service Worker
// 快取版本號 (每次更新後遞增以強制刷新)
const CACHE_NAME = 'keiba-lookup-v22';

// 首次安裝時快取的核心檔案
const CORE_ASSETS = [
  './',
  './index.html',
  './core_guides_data.js',
  './yearly_recs_db.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ===== Install：預先快取核心資產 =====
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

// ===== Activate：清除舊版快取 =====
self.addEventListener('activate', event => {
  console.log('[SW] Activating, clearing old caches...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

// ===== Fetch：Cache-First 策略（優先離線快取）=====
self.addEventListener('fetch', event => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // 快取命中，直接回傳，背景同時嘗試更新
        return cached;
      }

      // 快取未命中，從網路取得並存入快取
      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
          return response;
        })
        .catch(() => {
          // 完全離線時，回傳主頁
          return caches.match('./index.html') || caches.match('./');
        });
    })
  );
});
