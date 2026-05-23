# 🎯 打地鼠 v2 · 班級挑戰賽

v1 的延伸版：玩家先輸入「學號」才能開始，分數上傳到 Firebase Firestore，全班共享排行榜。

> 跟 v1 的差異：v1 是「自己一個人玩、頭像是 head.png、分數存 localStorage」；v2 是「多人玩、頭像用 emoji（依學號決定）、分數存 Firestore、有公開排行榜」。
> v1 還在原專案 `../whack-a-mole/`，**完全不動**。

---

## 📁 檔案結構

```
whack-a-mole-v2/
├── index.html          # 遊戲主頁（含學號 gate）
├── leaderboard.html    # 排行榜頁
├── firebase-config.js  # Firebase config（需要你填）
├── firestore.rules     # Firestore Security Rules
└── README.md
```

---

## 🚀 一次性設定（約 5 分鐘）

### 1. 建立新的 Firebase 專案

1. 去 https://console.firebase.google.com/
2. 「新增專案」→ 取個名字（例：`whack-a-mole-v2`）
3. 要不要啟用 Google Analytics 都可以（不影響功能）

### 2. 建立 Firestore 資料庫

1. 左側選單 → **Firestore Database** → **建立資料庫**
2. 選 **生產模式（production mode）**（規則我們稍後貼）
3. 區域選 `asia-east1`（彰化）或 `asia-northeast1`（東京）

### 3. 貼 Security Rules

1. Firestore → **規則** 分頁
2. 全選刪除，把 [`firestore.rules`](firestore.rules) 內容貼上
3. **發布**

### 4. 註冊 Web App，拿 config

1. 專案設定（⚙️）→ **一般**
2. 滑到下方「你的應用程式」→ 點 **Web 圖示 `</>`**
3. 取個 App 暱稱（例：`whack-v2-web`），**不用** 設定 Firebase Hosting
4. 複製出現的 `firebaseConfig` 物件
5. 編輯 [`firebase-config.js`](firebase-config.js)，把 `apiKey` / `authDomain` / `projectId` 等欄位換成你的值

### 5. 加授權網域（部署到 GitHub Pages 才需要）

Firebase Console → **Authentication → Settings → 已授權的網域**
加上你的 GitHub Pages 網域（例：`shunshun70218-ctrl.github.io`）。
> 純 Firestore 不需要 Auth，但加進來不會壞事，避免某些 SDK 警告。

---

## 🎮 本機測試

```bash
cd whack-a-mole-v2
python3 -m http.server 8000
# 開 http://localhost:8000
```

> 一定要透過 http server 開（不能直接 `file://` 雙擊 HTML），因為 `<script type="module">` 跟 CORS 限制。

---

## ☁️ 部署到 GitHub Pages

1. 新建一個 repo（例：`whack-a-mole-v2`），把這個資料夾推上去
2. Settings → Pages → Source 選 `main` branch / `/ (root)`
3. 幾秒後 https://<你的帳號>.github.io/whack-a-mole-v2/ 就會上線

---

## 📊 Firestore 資料結構

Collection：`scores`

| 欄位 | 型別 | 說明 |
|------|------|------|
| `studentId` | string (≤20) | 學號 |
| `emoji` | string | 依學號 hash 自動分配的頭像（同學號永遠同 emoji） |
| `score` | int (0–999) | 分數 |
| `difficulty` | `easy` / `normal` / `hard` | 難度 |
| `createdAt` | timestamp | 由 serverTimestamp 決定 |

排行榜依 `score DESC, createdAt ASC` 排序（同分時先繳卷的排前面）。

---

## 🔒 安全考量

- Firebase Web config 是**公開的**（瀏覽器原始碼可看到），這是正常設計
- 真正擋濫用的是 [`firestore.rules`](firestore.rules)：
  - 任何人可讀（排行榜本來就要公開）
  - 寫入有欄位/長度/型別檢查
  - 不允許 update / delete（防止竄改）
- 預設沒有「同學號只能一筆」的限制（每場都會新增一筆紀錄）。要去重的話，排行榜這邊前端可以加 group by studentId 邏輯，或改用 `setDoc(doc(db, 'scores', studentId))` 寫入

---

## 🎨 客製化重點

- 想換 emoji 池：[`index.html`](index.html) 裡的 `EMOJI_POOL` 陣列
- 想改三段難度的時間參數：`DIFFICULTIES` 物件
- 想改回合長度：`ROUND_MS = 30000`（單位毫秒）
- 想關閉「0 分不上傳」邏輯：搜尋 `score <= 0` 那段

---

Made with Claude Code · 不影響 v1 的獨立專案
