// Firebase SDK importları
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB91TF2xSmhOoHzZpPLcr7NqYjtHGW6Wg",
  authDomain: "weplosa.firebaseapp.com",
  projectId: "weplosa",
  storageBucket: "weplosa.firebasestorage.app",
  messagingSenderId: "387157004833",
  appId: "1:387157004833:web:3f4fdd37a0064b52edc960",
  measurementId: "G-QQNY4FDY8S",
  databaseURL: "https://weplosa-default-rtdb.firebaseio.com/" // <-- 🔥 Bunu eklemelisin!
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Realtime Database başlat
const database = getDatabase(app);

export { app, database };
