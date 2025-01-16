// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl5QYd4YlEPSHNSv7QMvdfVar1mtLf2V0",
    authDomain: "fb-auth-register-52465.firebaseapp.com",
    projectId: "fb-auth-register-52465",
    storageBucket: "fb-auth-register-52465.firebasestorage.app",
    messagingSenderId: "435559123977",
    appId: "1:435559123977:web:9bbd97b3ebe90c8e56bcd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // conexion con firebase auth
export { auth } 