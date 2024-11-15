import { auth, db } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Function to handle login logic
async function loginController(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get user data from Firestore
        const userDoc = await getDoc(doc(db, "UserAccount", user.uid));
        
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const role = userData.role;

            // Redirect based on user role
            if (role === "admin") {
                window.location.href = "adminHome.html";
            } else if (role === "agent") {
                window.location.href = "agentHome.html";
            } else if (role === "seller") {
                window.location.href = "sellerHome.html";
            } else {
                console.error("Role not found!");
            }
        } else {
            console.error("User data not found.");
        }
    } catch (error) {
        console.error("Login failed:", error.message);
    }
}

export default loginController;
