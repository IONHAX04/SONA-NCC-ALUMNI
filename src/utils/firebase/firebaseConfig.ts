// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithCredential  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt9UN0V7QYtxf87mMxTYqKgH47NKR5fiA",
  authDomain: "ncc-alumni.firebaseapp.com",
  projectId: "ncc-alumni",
  storageBucket: "ncc-alumni.firebasestorage.app",
  messagingSenderId: "733594728397",
  appId: "1:733594728397:web:74f15ffc1ba0fff0d8f684",
  measurementId: "G-5STBZH6J7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("analytics", analytics);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithCredential  };
