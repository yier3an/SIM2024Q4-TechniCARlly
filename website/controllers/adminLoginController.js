import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginAdminController(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Admin logged in:", userCredential.user);
    window.location.href = "adminDashboard.html";
  } catch (error) {
    console.error("Login error:", error.message);
  }
}

export default loginAdminController;
