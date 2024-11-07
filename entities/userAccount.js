// entities/useraccount.js

import { auth, db } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



export async function createUser(email, password, userType) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Store user data in Firestore with role
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      role: userType
    });

    console.log("User created successfully:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
// Usage example for creating a new admin:
// createUser('admin@example.com', 'password123', 'admin');
