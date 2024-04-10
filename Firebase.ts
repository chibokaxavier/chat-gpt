import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAj4fxzR4I74_D3Lgf-GcaTJnL-4CcKPg",
  authDomain: "chatgpt-d136d.firebaseapp.com",
  projectId: "chatgpt-d136d",
  storageBucket: "chatgpt-d136d.appspot.com",
  messagingSenderId: "1048597493556",
  appId: "1:1048597493556:web:2aad60df1bfed3c42d5761",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
