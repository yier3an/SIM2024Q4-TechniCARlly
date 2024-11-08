import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBU1KmmrmCVv9DKonZAP7Y8V6sicxWdC4",
  authDomain: "cscit314.firebaseapp.com",
  projectId: "cscit314",
  storageBucket: "cscit314.firebasestorage.app",
  messagingSenderId: "744411197952",
  appId: "1:744411197952:web:3495385cfc36e1fcdc5ee5",
  measurementId: "G-7J03QMTQK0"
};

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
