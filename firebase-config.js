// === 把這裡換成你的 Firebase Web App config ===
// Firebase Console → 專案設定 → 一般 → 你的應用程式 → Web app → SDK setup → 複製 config
// 注意：這些 key 是公開的（瀏覽器會看到），靠 Firestore Security Rules 保護資料
export const firebaseConfig = {
  apiKey: "AIzaSyBmNh-JAmEgdPynhuBxfGsEe6A7vYk9kjM",
  authDomain: "whack-a-mole-v2-shun.firebaseapp.com",
  projectId: "whack-a-mole-v2-shun",
  storageBucket: "whack-a-mole-v2-shun.firebasestorage.app",
  messagingSenderId: "832944754457",
  appId: "1:832944754457:web:d0b3b01a924a799960ff88"
};

// Firestore collection 名稱（不用改）
export const SCORES_COLLECTION = "scores";
