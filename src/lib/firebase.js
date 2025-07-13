// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Rv4Xk9YZ4ARZG6XvRMGlXlP-tLJgg68",
  authDomain: "neura-1a8e2.firebaseapp.com",
  projectId: "neura-1a8e2",
  storageBucket: "neura-1a8e2.firebasestorage.app",
  messagingSenderId: "68899292923",
  appId: "1:68899292923:web:08fd4189b41c82d087125e",
  measurementId: "G-C7V8SZ5FT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
