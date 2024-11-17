import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginAgentController(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Agent logged in:", userCredential.user);
    window.location.href = "agentDashboard.html";
  } catch (error) {
    console.error("Login error:", error.message);
  }
}

export default loginAgentController;
