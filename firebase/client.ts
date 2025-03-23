// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt0bkghmLZpdWyALVQvFAkUG0IoqBwa7E",
  authDomain: "prepwise-dbae1.firebaseapp.com",
  projectId: "prepwise-dbae1",
  storageBucket: "prepwise-dbae1.firebasestorage.app",
  messagingSenderId: "580909395282",
  appId: "1:580909395282:web:a34f99f097e2cba4abde8b",
  measurementId: "G-QYC50EYQJ2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);