// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPhDpPuabLkDlVGv7wQrA4RrHTnTmVMHI",
  authDomain: "authentication-d2712.firebaseapp.com",
  projectId: "authentication-d2712",
  storageBucket: "authentication-d2712.appspot.com",
  messagingSenderId: "231006465772",
  appId: "1:231006465772:web:8720d75866ef465fe27fc9",
  measurementId: "G-T54DVK957N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// const analytics = getAnalytics(app);