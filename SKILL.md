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

全站所有篩選與切換晶片（包含年代切換、世代選擇、分類篩選等）一律遵照以下標準樣式與動態邏輯。
★ **只要使用者指示「晶片套用統一風格」，即全自動比照此規範進行統一升級：**

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

---

## 5. JavaScript 腳本完整性、防殘肢與零語法錯誤規範 (Script Integrity & Zero SyntaxError Guard)

為避免代碼合併、正則清理或歷史腳本遷移時引發隱蔽性語法崩潰，所有開發與維護必須遵守以下防禦規範：

1. **嚴防「代碼斷頭與孤兒殘肢」(No Orphan Tokens / Incomplete Function Deletions)**：
   - 進行函式或舊腳本替換/移除時，嚴禁使用粗糙的正則匹配刪除部分區塊。
   - 必須精確確認函式邊界（起始 `function ... {` 到最外層閉合 `}`），防止留下孤立的 `});`、`}` 或截斷的大括號。
   - **嚴重後果警示**：若 `<script>` 區塊內部出現孤兒 token，瀏覽器 V8 引擎會在第一時間拋出 `SyntaxError: Unexpected token`，導致**整個 `<script>` 區塊被無聲丟棄**，內部所有全域變數與函式（如 `renderTable()`, `init()`, `switchMainPillar()`）直接變為 `undefined`，進而引發整頁按鈕癱瘓。

2. **跨 Script 區塊變數命名防衝突 (No Duplicate 'let' Declarations Across Scripts)**：
   - 禁止在不同的 `<script>` 標籤中以 `let` 或 `const` 重複宣告相同名稱的全域變數（例如 `let explosionChartInstance`）。
   - 全域跨腳本共用之物件/實例，一律使用顯式 `window.xxx` 掛載或單一頂層宣告，避免觸發 `Uncaught SyntaxError: Identifier '...' has already been declared`。

3. **模組解耦與純淨職責原則 (Single Responsibility per Engine Script)**：
   - 獨立功能模組（如第 41 章史實馬資料庫引擎）應僅包含自身所需的資料、權重計算、渲染邏輯與事件綁定，嚴禁混入與自身無關的全站導覽或其它章節模擬器腳本（如爆發力模擬、牧場設施運算等）。

4. **發布前語法驗證與 CDP 真機診斷 SOP (Pre-Deploy Syntax Verification & Real-Browser Testing)**：
   - 凡涉及核心 JavaScript 引擎之變更，在正式部署發布前，必須執行語法健康檢查（如透過 `new Function(code)` 解析測試，或透過 Headless Chrome / CDP 協議載入運行）。
   - 確認主控台 (Console) **0 SyntaxError、0 ScriptFailedToParse、0 ReferenceError**，且資料庫總筆數（如 15,389 匹）與表格 DOM 均已真實渲染出非空列後，方可推進版本並執行 `push_versioned_release.py`。

