// === 把這裡換成你的 Firebase Web App config ===
// Firebase Console → 專案設定 → 一般 → 你的應用程式 → Web app → SDK setup → 複製 config
// 注意：這些 key 是公開的（瀏覽器會看到），靠 Firestore Security Rules 保護資料
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Firestore collection 名稱（不用改）
export const SCORES_COLLECTION = "scores";
