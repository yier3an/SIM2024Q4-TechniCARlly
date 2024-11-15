import { db } from "../firebaseConfig.js";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

async function createCarListing(listingData) {
  const docRef = await addDoc(collection(db, "carListings"), listingData);
  return docRef.id;
}

async function getCarListings() {
  const querySnapshot = await getDocs(collection(db, "carListings"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export { createCarListing, getCarListings };
