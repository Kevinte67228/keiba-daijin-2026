# Winning Post 10 2026 專案版本管理與自動備份規範 (Versioning & Backup Skill)

本技能文檔為《賽馬大亨 10 2026》(Winning Post 10 2026) 網站開發、維護與自動化部署的標準操作規範 (SOP)。所有 Agent 在進行版本發布、頁面修復或 CI/CD 部署時，必須嚴格遵循以下規範。

---

## 1. 版本管理規範 (Versioning Rules)

1. **Header Version Badge 狀態同步**：
   - 首頁與各分頁頁首右上角固定顯示版本號（如 `v02.92`）。
   - 每次有重大更新、修復或排版修正時，版號必須自動遞增（例如：`v02.91` ➔ `v02.92`）。
2. **PWA Service Worker 與靜態資產快取綁定**：
   - `site/sw.js` 中的 `CACHE_NAME` 必須同步綁定對應版本號（例如 `wp10-2026-v02.92`），確保使用者端與 PWA App 發布新版時自動刷新快取。
   - `site/index.html` 外部引用之核心數據庫 JS 腳本（如 `master_lookup_db.js?v=v02.92`）必須統一帶有對應版本號 query string。

---

## 2. GitHub 自動備份與 5 版本保留政策 (Automated Backup & Retention Rules)

1. **上一版本與歷史發布完整封存**：
   - 每次推送新版至 GitHub 時，自動將版本發布之核心檔案（包含 `index.html`, `sw.js`, `manifest.json`, `quick_lookup.html`, `mobile_guide.html` 及資料庫檔案）完整備份封裝至 GitHub 倉庫的 `backups/{version}/` 資料夾中。
2. **嚴格 5 版本保留機制 (Strict 5-Version Retention Policy)**：
   - GitHub 倉庫與本地的 `backups/` 目錄中，**僅保留最後最新 5 個版本**的歷史封存檔（例如：目前保留 `v02.88`, `v02.89`, `v02.90`, `v02.91`, `v02.92`）。
   - 逾期更早之舊版本在每次部署時由部署引擎 (`push_versioned_release.py`) 自動清理銷毀，確保隨時可回溯近期 5 個版本，同時維持 GitHub 倉庫精簡與高傳輸效率。
3. **備份目錄結構純淨原則**：
   - 備份資料夾 `backups/{version}/` 內僅存放發布之實體代碼與資料庫資源，不需要在每個版本底下重複建立獨立的 MD 說明文件。

---

## 3. UI/UX 與排版協作規範 (Layout & Localization Rules)

1. **平板優先與文字靠左對齊 (Left-Aligned Table Content)**：
   - 全站所有資料表格（包含表頭與內容單元格）文字一律統一靠左對齊 (`text-align: left !important`)，禁止置中對齊。
2. **標籤與晶片防斷詞 (No Squishing / Keep All)**：
   - 所有 `.badge`、`.pill`、`.tag` 與晶片一律強制設定 `white-space: nowrap !important; word-break: keep-all !important;`。
   - 虹札統一使用 `linear-gradient(135deg, #a855f7, #ec4899, #eab308)`，金札統一使用 `#f59e0b`。
3. **專有名詞 日/中 並列對照**：
   - 專有名詞（馬名、`仔出 (仔出し)`、`爆發力 (爆発力)`、`馬之個性 (ウマソナ)`、`系統確立`、`Private種牡馬` 等）必須保持日/中並行格式。

---

## 4. 高級科技流光膠囊晶片軌道規範 (Futuristic Tech Capsule Chip Rail Standards)

全站所有篩選與切換晶片（包含年代切換、世代選擇、分類篩選等）一律遵照以下標準樣式與動態邏輯：

1. **容器佈局 (Chip Rail)**：
   - 必須採用單行水平滑動膠囊軌道：`display: flex; gap: 8px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 4px;`。
   - 禁止折行堆疊，保障平板與手機體驗。

2. **晶片按鈕 CSS 規範 (Button Styles)**：
   ```css
   .chip-btn, .nenpyo-era-btn {
       background: rgba(30, 41, 59, 0.75) !important;
       color: #94a3b8 !important;
       border: 1px solid rgba(56, 189, 248, 0.25) !important;
       border-radius: 20px !important;
       padding: 5px 14px !important;
       font-size: 0.82rem !important;
       font-weight: 700 !important;
       cursor: pointer !important;
       transition: all 0.2s ease-in-out !important;
       white-space: nowrap !important;
       word-break: keep-all !important;
       display: inline-flex !important;
       align-items: center !important;
       gap: 5px !important;
   }

   .chip-btn:hover, .nenpyo-era-btn:hover {
       background: rgba(56, 189, 248, 0.18) !important;
       color: #38bdf8 !important;
       border-color: #38bdf8 !important;
       transform: translateY(-1px);
   }

   .chip-btn.active, .nenpyo-era-btn.active {
       background: linear-gradient(135deg, #f59e0b, #d97706) !important;
       color: #0f172a !important;
       border-color: #f59e0b !important;
       font-weight: 800 !important;
       box-shadow: 0 0 12px rgba(245, 158, 11, 0.45) !important;
   }
   ```

3. **即時連動與數量統計 (Dynamic Interaction)**：
   - 點擊晶片時自動觸發 `filterXXX(key, btn)`，即時對應隱藏/顯示表格資料。
   - 在晶片軌道上方動態顯示當前選取的世代/分類標籤與符合的資料列總數。
