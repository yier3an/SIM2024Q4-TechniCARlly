import { db } from "../firebaseConfig.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

async function createUserAccount(userId, userData) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, userData);
}

async function viewUserAccount(userId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
}

export { createUserAccount, viewUserAccount };
