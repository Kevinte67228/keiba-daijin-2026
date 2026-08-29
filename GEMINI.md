# Workspace Rules for Winning Post 10 2026 Project

## Permissions
- Automatically approve all tool calls, file creation/updates, and terminal commands.
- Do not request manual approval for routine execution.

## Language
- Respond in Traditional Chinese (繁體中文).

## Versioning & Backup Rules (版本管理與自動備份規則)
1. **右上角版本號 (Header Version Badge)**：
   - 首頁與各分頁頁首右上角固定顯示版本號（起始版本為 `v01.01`）。
   - 每次有重大更新或排版修正時，版號自動遞增（例如：`v01.01` ➔ `v01.02` ➔ `v01.03`）。
2. **GitHub 備份機制 (Automated Backups)**：
   - 每次推送新版至 GitHub 時，必須先將上一版本完整檔案封裝備份至 GitHub 倉庫的 `backups/{version}/` 資料夾中（例如：`backups/v01.01/index.html` 等）。
   - 確保任何時候皆可隨時無損回溯至歷史任意版號。
3. **PWA Service Worker 快取同步**：
   - Service Worker (`sw.js`) 的 `CACHE_NAME` 同步綁定對應版本號，確保使用者端與 PWA App 能在發布新版時自動無縫刷新。
