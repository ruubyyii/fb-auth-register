// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4d53Pn2Tx1q47nYuJzeAbNu8sjcTS76g",
    authDomain: "fir-auth-50a38.firebaseapp.com",
    projectId: "fir-auth-50a38",
    storageBucket: "fir-auth-50a38.firebasestorage.app",
    messagingSenderId: "18960080691",
    appId: "1:18960080691:web:0a167ba806d97e25822846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // conexion con firebase auth
const db = getFirestore(app)
export { auth, db } 