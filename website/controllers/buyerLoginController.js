import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginBuyerController(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Buyer logged in:", userCredential.user);
    window.location.href = "buyerDashboard.html";
  } catch (error) {
    console.error("Login error:", error.message);
  }
}

export default loginBuyerController;
