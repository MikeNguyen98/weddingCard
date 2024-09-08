// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-UaOl-Y73j4yzli5JNAn9S-LlTQ7p68k",
  authDomain: "wedding-c9b1d.firebaseapp.com",
  projectId: "wedding-c9b1d",
  storageBucket: "wedding-c9b1d.appspot.com",
  messagingSenderId: "398112976371",
  appId: "1:398112976371:web:4c3ff89dc2a2078f84f686",
  measurementId: "G-W5L5EF3WS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);