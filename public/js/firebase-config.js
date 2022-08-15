// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRwrj8RT9-0vDRTSdJTgRIe_S9nQ2qnls",
  authDomain: "homelymeals-11d6c.firebaseapp.com",
  projectId: "homelymeals-11d6c",
  storageBucket: "homelymeals-11d6c.appspot.com",
  messagingSenderId: "277497013635",
  appId: "1:277497013635:web:409ea8f090e9ad79ee82b6",
  measurementId: "G-6R25S69T7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export { db, doc, setDoc, updateDoc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }