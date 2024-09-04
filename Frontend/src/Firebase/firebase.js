// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ316EN0YK8S-6ILJYZHWuU34DYp2xTZ0",
  authDomain: "loginapp-5b859.firebaseapp.com",
  projectId: "loginapp-5b859",
  storageBucket: "loginapp-5b859.appspot.com",
  messagingSenderId: "377474013456",
  appId: "1:377474013456:web:b8dbe501a1168d7d022d95",
  measurementId: "G-9PQE0LPJJF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, signInWithPopup };
