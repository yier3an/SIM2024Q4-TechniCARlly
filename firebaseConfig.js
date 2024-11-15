import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
	getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc,
	collection, query, where, getDocs, onSnapshot
}
	from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {

	apiKey: "AIzaSyBJskM4hFlHN-b7w8pvWDKNuwL1VhAk4Jc",
	authDomain: "technicarl.firebaseapp.com",
	projectId: "technicarl",
	storageBucket: "technicarl.firebasestorage.app",
	messagingSenderId: "671091113396",
	appId: "1:671091113396:web:cc46dcd2c9657bc90ec6e1",
	measurementId: "G-GT5D6RBQLR"

};

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export {
	getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc,
	collection, query, where, getDocs, onSnapshot
};
