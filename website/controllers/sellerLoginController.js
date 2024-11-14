import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginSellerController(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Seller logged in:", userCredential.user);
    window.location.href = "sellerDashboard.html";
  } catch (error) {
    console.error("Login error:", error.message);
  }
}

export default loginSellerController;
