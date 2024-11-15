import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJskM4hFlHN-b7w8pvWDKNuwL1VhAk4Jc",
  authDomain: "technicarl.firebaseapp.com",
  projectId: "technicarl",
  storageBucket: "technicarl.firebasestorage.app",
  messagingSenderId: "671091113396",
  appId: "1:671091113396:web:cc46dcd2c9657bc90ec6e1",
  measurementId: "G-GT5D6RBQLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };