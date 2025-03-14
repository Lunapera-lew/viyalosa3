// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB91TF2xSmhOoHzZpPLcr7NqzYjtHGW6Wg",
  authDomain: "weplosa.firebaseapp.com",
  projectId: "weplosa",
  storageBucket: "weplosa.firebasestorage.app",
  messagingSenderId: "387157004833",
  appId: "1:387157004833:web:3f4fdd37a0064b52edc960",
  measurementId: "G-QQNY4FDY8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);