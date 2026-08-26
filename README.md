# 🏇 賽馬大亨 10 2026（Winning Post 10 2026）8大資料庫互動速查 PWA App

[![PWA Live](https://img.shields.io/badge/PWA-Live%20Online-brightgreen?style=for-the-badge&logo=pwa)](https://kevinte67228.github.io/keiba-daijin-2026/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages%20Deployed-orange?style=for-the-badge&logo=github)](https://kevinte67228.github.io/keiba-daijin-2026/)

專為光榮特庫摩（KOEI TECMO）賽馬模擬名作**《賽馬大亨 10 2026》（Winning Post 10 2026）**量身打造的跨平台互動速查 Web App / PWA（Progressive Web App）。

收錄 **15,381 匹全史實馬資料庫** 與 **7 大年度推薦名駒分類**，支援 100% 離線使用、毫秒級自訂多條件組合篩選、起點距離精確匹配、多型態高精度排序，並可一鍵點擊檢視 35+ 完整五維能力與原廠詳細評語卡片。

---

## 🌐 線上即刻體驗

* 📱 **PWA 線上直接使用**：👉 **[https://kevinte67228.github.io/keiba-daijin-2026/](https://kevinte67228.github.io/keiba-daijin-2026/)**
* 📦 **GitHub 專案庫**：[Kevinte67228/keiba-daijin-2026](https://github.com/Kevinte67228/keiba-daijin-2026)

---

## 📊 8 大資料庫統計一覽

系統整合了全年代 56 年歷史攻略資料，經過多輪嚴格校驗與資料補全，確保各類別筆數與欄位 100% 正確無缺漏：

| 序號 | 資料庫類別名稱 | 收錄筆數 | 包含核心欄位 |
|:---:|:---|:---:|:---|
| **1** | **🐎 1.5萬匹全史實馬** | **15,381 匹** | 登場年度、馬名、地域、馬札、性別、SP、SP上限、距離適性、馬場、成長、父馬、能力五維 |
| **2** | **🇯🇵 日本おすすめ幼駒** | **620 筆** | 年度、馬名、馬札、性別、推薦度(★)、SP速度、距離適性、原廠詳細評語 |
| **3** | **🇪🇺 海外おすすめ幼駒** | **1,448 筆** | 年度、馬名、馬札、性別、推薦度(★)、SP速度、距離適性、原廠詳細評語 |
| **4** | **🐴 おすすめ繁殖牝馬** | **1,365 筆** | 年度、馬名、馬札、仔出評級、草地/泥地、距離適性、成長/因子、詳細說明 |
| **5** | **💰 幼駒セール馬** | **279 筆** | 年度、拍賣馬名、馬札、性別、推薦度、SP速度、距離適性、詳細攻略 |
| **6** | **🏷️ 繁殖牝馬セール馬** | **230 筆** | 年度、拍賣牝馬名、馬札、仔出評級、馬場、距離適性、因子、詳細評語 |
| **7** | **🏇 海外トレーニングセール** | **60 筆** | 年度、訓練拍賣馬、馬札、性別、推薦度、SP速度、距離適性、詳細攻略 |
| **8** | **🏆 おすすめ年度末馬** | **301 筆** | 年度、年末轉讓馬、馬札、性別、推薦星級、SP速度、距離適性、詳細評語 |

---

## ✨ 核心特色與功能亮點

### 1. 🔍 6 大自訂條件複合即時篩選
* **📅 登場年度 (Year)**：支援 1968 年至 2023 年全年代即時過濾。
* **🌈 馬札/護符等級 (お守り)**：支援 虹札、金札、銀札、銅札、綠札、無札 精確篩選。
* **♂♀ 性別 (Sex)**：牡馬、牝馬、騸馬 快速過濾。
* **⚡ 最小基本 SP 速度**：支援 SP ≥ 75（S級超級名馬）、SP ≥ 70（A級一線名馬）、SP ≥ 65（B級主力名馬）。
* **📏 距離適性起點（最短適性）**：智慧提取如 `1600~2400m` 中的最小值 `1600`，支援 1000m、1200m、1400m、1600m、1800m、2000m、2200m、2400m、2500m+ 等精確定位！
* **🌏 所屬區域 (Region)**：支援 🇯🇵 日本、🇺🇸 美國/米國、🇪🇺 歐洲、🌎 全部海外。
* **🔎 關鍵字全域搜尋**：支援輸入中日文馬名、父馬名稱、以及攻略詳細評語關鍵字秒速搜尋。

### 2. 📱 手機專屬響應式設計 (Mobile-First)
* **2×2 滑動晶片佈局**：手機一屏呈現 2 行 × 2 欄（4 顆晶片），左右滑動可輕鬆切換 8 大類別。
* **🧹 一鍵清除暫存快取按鈕**：頂部整合快取清除功能，遇到版本更新時一鍵自動清空 Service Worker 快取並重載最新版本。

### 3. 🃏 完整 35+ 能力卡片彈窗
* 點擊任何馬名或「查看」按鈕，即可開啟全黑金科技風格彈窗。
* 完整呈現：基本 SP、成長上限 SP、距離適性、馬場適性、成長型與成長力、父馬/母馬血統、瞬發力、勝負根性、力量、精神力、智商、柔軟性、健康度，以及**原廠 100% 完整詳細攻略評語**！

### 4. ⚡ 全球 CDN 加速與 100% 離線 PWA 支援
* 9.94 MB 完整資料庫託管於全球高速 CDN，首次載入僅需數秒。
* Service Worker 自動進行 Cache-First 快取，安裝後在無網路環境（飛機上、地鐵中）依然能順暢查詢！

---

## 📲 手機 PWA 安裝步驟

### 🍎 iOS (iPhone / iPad - Safari)
1. 使用 **Safari 瀏覽器** 開啟 [https://kevinte67228.github.io/keiba-daijin-2026/](https://kevinte67228.github.io/keiba-daijin-2026/)。
2. 點擊螢幕下方工具列的 **「分享按鈕（□↑）」**。
3. 往下滾動並選擇 **「加入主畫面 (Add to Home Screen)」** ➔ 點擊右上角 **「新增」**。
4. 手機桌面即會出現官方專屬的高解析度《Winning Post 10 2026》圖示，點擊即可全螢幕離線使用！

### 🤖 Android (Google Chrome)
1. 使用 **Chrome 瀏覽器** 開啟 [https://kevinte67228.github.io/keiba-daijin-2026/](https://kevinte67228.github.io/keiba-daijin-2026/)。
2. 點擊右上角 **選單按鈕（⋮）**。
3. 選擇 **「安裝應用程式」** 或 **「加到主畫面」**。
4. 確認安裝後，即可在桌面以獨立原生 App 模式開啟使用。

---

## 🛠️ 技術架構

```
keiba-daijin-2026/
├── index.html                  # PWA 主頁面（響應式 UI、篩選器、排序演算法、Modal 卡片）
├── manifest.json               # Web App 清單（App 名稱、主題色、圖示定義）
├── sw.js                       # Service Worker（Cache-First 離線快取控制）
├── icons/                      # 高解析度 PWA 圖示
│   ├── icon-192.png            # 192x192 PNG 圖示
│   ├── icon-512.png            # 512x512 PNG 圖示
│   └── apple-touch-icon.png    # iOS 專用 180x180 圖示
├── .nojekyll                   # 繞過 GitHub Pages Jekyll 靜態建構
└── .github/workflows/          # GitHub Actions 自動部署工作流程
```

---

## 📄 開源授權

本專案基於 [MIT License](LICENSE) 開源授權。遊戲相關版權與商標歸原作者與 KOEI TECMO GAMES 所有。
