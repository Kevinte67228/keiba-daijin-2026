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
