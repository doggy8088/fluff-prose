# 廢話文學智庫 (fluff-prose)

這是一個「廢話文學」卡片翻轉小站，點擊即可獲得一句聽君一席話的神諭與大師評語。

## 功能

- 隨機顯示廢話文學句子與評論
- 翻牌互動、粒子動畫、計數器
- 靜態網站，建置後可直接部署

## 專案結構

- `data/`: 原始語錄，每個 `.txt` 檔案一段內容
- `src/`: 前端 TypeScript 程式碼（`quotes.generated.ts` 由建置產生）
- `public/`: 靜態資源與 `index.html`
- `scripts/`: Bun 建置與開發伺服器腳本
- `dist/`: 建置輸出

## 快速開始

1. 安裝 [Bun](https://bun.sh/)
2. 安裝相依套件（若無可略過）

```bash
bun install
```

3. 啟動開發伺服器（會先建置）

```bash
bun run start
```

4. 只建置輸出

```bash
bun run build
```

預設開發伺服器位址：`http://localhost:3124`

## 更新內容

- 在 `data/` 新增或調整 `.txt` 內容（每檔一段）
- 執行 `bun run build` 會自動更新 `src/quotes.generated.ts`

## 如何貢獻

1. Fork 專案並建立分支：`feature/your-idea`
2. 確保新增語錄為 UTF-8 編碼且去除多餘空白
3. 執行 `bun run build` 確認輸出正常
4. 提交 PR，描述改動與原因

也歡迎透過 Issue 回報問題或提出功能建議。

## 授權

MIT License © Will 保哥，詳見 `LICENSE`。
