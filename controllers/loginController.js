// controllers/loginController.js
import { auth, db } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

async function loginController(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.role === "admin") {
        window.location.href = "adminHome.html";
      } else {
        window.location.href = "userHome.html";
      }
    } else {
      console.error("User data not found.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
}

export default loginController;
