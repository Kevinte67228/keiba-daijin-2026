# Workspace Rules for Winning Post 10 2026 Project

## Permissions
- Automatically approve all tool calls, file creation/updates, and terminal commands.
- Do not request manual approval for routine execution.

## Language & Localization Rules (語言與在地化規則)
- **回應語言**：一律以繁體中文 (Traditional Chinese) 回應。
- **評語與推薦理由繁體中文化**：所有馬匹推薦理由（如虹札推薦理由、年度推薦、戰略評語）一律以繁體中文呈現。
- **專有名詞 日/中 並行**：專有名詞（馬名、父系/祖系名、賽事名稱、遊戲專用機制如 `仔出 (仔出し)`、`Private種牡馬`、`系統確立`、`爆發力 (爆発力)`、`ウマソナ (馬之個性)` 等）必須保持「日/中並行」或保留日文原名對照，確保遊戲玩家能精準對照日文遊戲本體。

## Versioning & Backup Rules (版本管理與自動備份規則)
1. **右上角版本號 (Header Version Badge)**：
   - 首頁與各分頁頁首右上角固定顯示版本號（起始版本為 `v01.01`）。
   - 每次有重大更新或排版修正時，版號自動遞增（例如：`v01.01` ➔ `v01.02` ➔ `v01.03`）。
2. **GitHub 備份機制 (Automated Backups)**：
   - 每次推送新版至 GitHub 時，必須先將上一版本完整檔案封裝備份至 GitHub 倉庫的 `backups/{version}/` 資料夾中（例如：`backups/v01.01/index.html` 等）。
   - 確保任何時候皆可隨時無損回溯至歷史任意版號。
3. **PWA Service Worker 快取同步**：
   - Service Worker (`sw.js`) 的 `CACHE_NAME` 同步綁定對應版本號，確保使用者端與 PWA App 能在發布新版時自動無縫刷新。
