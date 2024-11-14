// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
