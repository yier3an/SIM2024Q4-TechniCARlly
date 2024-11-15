import { db } from '../../firebaseConfig'; // Correctly import db from firebaseConfig
import { doc, getDoc } from "firebase/firestore";

// Load the edit form with user data
export async function loadEditForm(userId) {
    try {
        const docRef = doc(db, "users", userId); // Reference to the user's document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            document.getElementById("usertype").value = userData.usertype || '';
            document.getElementById("name").value = userData.name || '';
            document.getElementById("email").value = userData.email || '';
            document.getElementById("password").value = userData.password || '';
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error getting document: ", error);
    }
}
