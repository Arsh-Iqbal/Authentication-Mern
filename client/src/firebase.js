// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-94d41.firebaseapp.com",
  projectId: "mern-auth-94d41",
  storageBucket: "mern-auth-94d41.appspot.com",
  messagingSenderId: "913358500925",
  appId: "1:913358500925:web:262d48db7c8f7f602e2654"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);