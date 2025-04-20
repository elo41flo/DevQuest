// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// 🔁 Remplace ici par TA vraie config :
const firebaseConfig = {
    apiKey: "AIzaSyDerhdfCEZPaOjoaJU-8JrNyde9_8r4nQk",
    authDomain: "devquest-65bbc.firebaseapp.com",
    projectId: "devquest-65bbc",
    storageBucket: "devquest-65bbc.firebasestorage.app",
    messagingSenderId: "189356704806",
    appId: "1:189356704806:web:de3cbf0b89ac45ab0e92e7",
    measurementId: "G-0Y75Q087SW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
