# Workspace Rules for Winning Post 10 2026 Project

## Permissions
- Automatically approve all tool calls, file creation/updates, and terminal commands.
- Do not request manual approval for routine execution.

## Language & Localization Rules (語言與在地化規則)
- **回應語言**：一律以繁體中文 (Traditional Chinese) 回應。
- **評語與推薦理由繁體中文化**：所有馬匹推薦理由（如虹札推薦理由、年度推薦、戰略評語、AI分析）一律以繁體中文呈現。
- **專有名詞 日/中 並行**：專有名詞（馬名、父系/祖系名、賽事名稱、遊戲專用機制如 `仔出 (仔出し)`、`Private種牡馬`、`系統確立`、`爆發力 (爆発力)`、`ウマソナ (馬之個性)` 等）必須保持「日/中並行」或保留日文原名對照，確保遊戲玩家能精準對照日文遊戲本體。

## Versioning & Backup Rules (版本管理與自動備份規則)
1. **右上角版本號 (Header Version Badge)**：
   - 首頁與各分頁頁首右上角固定顯示版本號（起始版本為 `v01.01`）。
   - 每次有重大更新或排版修正時，版號自動遞增（例如：`v01.33` ➔ `v01.34` ➔ `v01.35`）。
2. **GitHub 備份機制 (Automated Backups - 保留最後 5 個版本)**：
   - 每次推送新版至 GitHub 時，自動將上一版本完整檔案封裝備份至 GitHub 倉庫的 `backups/{version}/` 資料夾中。
   - **備份保留政策**：GitHub 倉庫的 `backups/` 目錄中**僅保留最後最新 5 個版本**的歷史封存檔，逾期更早之舊版本自動清理，確保隨時可回溯近期版本同時維持倉庫精簡高效。
3. **PWA Service Worker 快取同步**：
   - Service Worker (`sw.js`) 的 `CACHE_NAME` 同步綁定對應版本號，確保使用者端與 PWA App 能在發布新版時自動無縫刷新快取。

## Collaboration & Layout Rules (近期協作排版與開發核心規範)
1. **平板與行動端體驗優先 (Tablet-First Layout)**：
      - **欄位文字一律靠左對齊 (Left-Aligned Table Content)**：全站所有資料表格（包含表頭與內容單元格）文字一律統一為「靠左對齊 (`text-align: left !important`)」，嚴禁用置中對齊，確保各欄位數據垂直視覺掃描齊頭流暢。
   - **防字符垂直擠壓換行 (No Vertical Squishing)**：所有表格 (`.data-table`) 必須具備充足之 `min-width`（如史實調教 `880px`、年度推薦 `1320px`），確保日文中文字元不被壓縮為單字垂直換行。
   - **水平觸控滑動軌道**：外層容器 `.table-responsive` 必須啟用 `-webkit-overflow-scrolling: touch` 與輕量科技藍自定義滾動條。
   - **徽章與標籤防斷詞**：所有 `.badge`、`.pill`、`.tag` 一律強制 `white-space: nowrap !important; word-break: keep-all !important;`。
   - **年代選擇軌道 (Chip Rail)**：全年代切換按鈕 (`#recsYearButtons`) 必須採用單行水平滑動膠囊軌道，禁止折行堆疊侵佔垂直螢幕視野。
2. **全域資料表格即時排序 (Universal Table Sorting)**：
   - 全站所有資料表格（包含馬庫主表、全年代推薦大表、配合理論、調教、三冠、賽馬場、設施、後天個性、殿堂馬異名等）表頭一律支援點擊升降序切換 (`.sortable-th`，帶有 `⇅` / `🔼` / `🔽` 狀態指示)。
   - 排序引擎具備智慧識別功能：自動精確解析數值、百分比 (`+16%`)、距離 (`1800m`)、週期 (`4週`)、馬札等級 (`虹>金>銀>銅>綠`)、能力評級 (`S+>S>A>B>C>D`)、適性符號 (`◎>○>△>×`) 與文字。
3. **章節與 DOM 結構嚴格完整性 (Section & DOM Integrity)**：
   - 百科章節卡片必須嚴格遵循標準結構：`<section id="..." class="section-card"><div class="section-header">...</div><div class="section-body">...</div></section>`，嚴禁標籤提前閉合導致內容外溢失去邊框與內邊距。
   - 快速跳轉目錄（36 大章節）必須維持三欄齊頭對齊（圖標固定 18px、金色章號固定 62px、標題自適應齊頭）。
4. **外部攻略資料 100% 完整深度收錄 (Full Coverage & Zero Omission)**：
   - 凡引用之外部攻略網頁（如 Samurai Gamers, WPStud 等），必須 100% 全量無遺漏收錄所有分支要素（包含前置解鎖條件樹、週期、大成功率加減算公式、冷卻期懲罰等），嚴禁任意刪減。

5. **標準高級科技流光膠囊晶片軌道規範 (Futuristic Tech Capsule Chip Rail Standards)**：
   - **「晶片套用統一風格」快捷觸發指令**：凡使用者提及「晶片套用統一風格」、「套用Gemini.md風格」或類似要求時，一律自動比照規範 5 之【高級科技流光膠囊晶片軌道】進行全組 CSS 與自訂滾動條替換，無需重複確認。

   - **全站晶片風格一律統一為高級圓角膠囊 (.nenpyo-era-btn / .chip-btn / .filter-btn)**：
     - 圓角造型：`border-radius: 20px !important; padding: 5px 14px !important; box-sizing: border-box !important;`。
     - 預設狀態 (Default)：`background: rgba(30, 41, 59, 0.75); color: #94a3b8; border: 1px solid rgba(56, 189, 248, 0.25); outline: none !important;`。
     - 懸停狀態 (Hover)：`background: rgba(56, 189, 248, 0.18); color: #38bdf8; border-color: #38bdf8; transform: translateY(-1px); box-shadow: 0 2px 8px rgba(56, 189, 248, 0.25);`。
     - 點選狀態 (:active)：強制平穩回彈 `transform: translateY(0) !important; outline: none !important;`，杜絕按壓位移超出軌道頂部邊界引發缺角。
     - 激活狀態 (Active State)：**金色立體流光發光樣式** (`background: linear-gradient(135deg, #f59e0b, #d97706); color: #0f172a; font-weight: 800; border-color: #f59e0b; box-shadow: 0 0 10px rgba(245, 158, 11, 0.45); transform: none !important; outline: none !important;`)。
     - 焦點輪廓歸零 (Zero Outline Ring)：全域晶片及 `:focus`、`:focus-visible` 一律強制 `outline: none !important; -webkit-tap-highlight-color: transparent !important;`，徹底根除瀏覽器原生白色矩形/粗方框外溢截斷致使「上半部缺角」。
   - **防缺角單行水平滑動軌道 (.chip-rail)**：
     - 外層容器必須啟用 `display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch; align-items: center; box-sizing: border-box;`，嚴禁折行堆疊。
     - **上下安全內邊距防護**：軌道必須強制配置 `padding: 6px 4px 10px 4px !important;`（特別是 `padding-top: 6px !important;`），保留充足頂部緩衝空間，杜絕按鈕在浮起、發光或點選時因捲軸容器 `y=0` 邊界截斷圓角或光暈。
   - **強制防換行與斷詞**：晶片按鈕一律強制 `white-space: nowrap !important; word-break: keep-all !important;`。

6. **全域長清單/表格超過 15 筆自適應內滑桿規範 (Universal 15-Row Inner Scrollbar & Sticky Header Standards)**：
   - **15 筆高度自適應內滑桿 (.scrollable-table-box)**：全站所有資料表格（含靜態百科表格與動態渲染資料庫大表），凡名單或行數超過 15 筆（`> 15 rows`）時，外層容器一律強制套用 `.scrollable-table-box`（`max-height: 640px !important; overflow-y: auto !important;`）。
   - **凍結置頂表頭 (Sticky Header)**：內部滾動時表頭一律啟用 `position: sticky !important; top: 0 !important; z-index: 10 !important; background: #1e293b !important;`，確保玩家滾動至底部時各欄位標題始終清晰可見。
   - **智慧動態收縮**：若動態篩選後行數減少至 15 筆以內，容器自動收縮解除限制高度，嚴禁留下無謂空白。

7. **JavaScript 腳本完整性、防殘肢與零語法錯誤規範 (Script Integrity & Zero SyntaxError Guard)**：
   - **嚴防「代碼斷頭與孤兒殘肢」(No Orphan Tokens)**：函式替換或正則清理時，必須精確確認函式邊界（`function ... {` 到最外層閉合 `}`），嚴禁留下孤立的 `});` 或未閉合大括號。否則瀏覽器編譯拋出 `SyntaxError` 會導致整個 `<script>` 區塊被整塊無聲拋棄，引發全站函式（如 `renderTable`, `init`, `switchMainPillar`）全面變成 `undefined`。
   - **跨 Script 變數防衝突 (No Duplicate 'let')**：禁止在不同 `<script>` 區塊重複使用 `let` 或 `const` 宣告同名全域變數，跨模組共用一律掛載於 `window.xxx`。
   - **發布前語法驗證與 CDP 真機診斷 SOP**：凡變更核心 JS 引擎，必須先以語法檢查器（如 `new Function(code)`）或真機 Headless Chrome (CDP) 驗證主控台 **0 SyntaxError、0 ScriptFailedToParse** 且 DOM 資料非空渲染後，方可推進版本並發布。

8. **資料表格描述欄位自適應換行與防暴衝規範 (Table Text Wrapping & Anti-Stretch Standards)**：
   - **禁止說明文字單行過長霸屏 (No Runaway Single-Line Text)**：全站所有資料表格中之「痛點」、「背景」、「觸發條件」、「機制說明」、「戰略評語」等長句欄位，表頭與單元格一律強制設定精確寬度與自適應折行（`width: 220px~280px; max-width: 260px~300px; white-space: normal !important; line-height: 1.6; word-break: break-word;`），嚴禁因缺少寬度限制或套用 `white-space: nowrap` 致使瀏覽器自動展開為數百 px 之單行長文本。
   - **操作步驟與重點欄位權重優先 (Priority Width for SOP & Key Columns)**：表格中之核心「具體操作 (SOP)」、「解決方案」、「戰略加成」、「繁育價值」等欄位，必須分配充足寬度（`min-width: 340px~520px; line-height: 1.7;`），確保條列項目（1、2、3 或 •）具備充足橫向閱讀視野，杜絕字詞被嚴重壓縮破碎垂直換行。
   - **表格最小寬度精確吻合欄數 (Optimized Table min-width)**：
     - 4 欄以內之精簡概覽表格：`min-width` 嚴格控制在 `880px ~ 940px`，並配置 `width: 100%`，確保在平板端四欄能同時完整顯示，徹底根除無謂橫向拉伸。
     - 5~6 欄之複合資料表格：`min-width` 控制在 `980px ~ 1050px`，各欄位依「標題/年代 (窄) ➔ 描述 (中) ➔ SOP/加成 (寬) ➔ 效益/評級 (中窄)」黃金比例分工，杜絕表格過度延伸出視野邊界。



