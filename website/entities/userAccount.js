import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    collection, 
    query, 
    where, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";



const db = getFirestore();
const auth = getAuth();

export class UserAccount {
    constructor(name, email, password, role) {
        this.name = name;  // Added name to the constructor
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Create Account Method
    async createAccount() {
        try {
            console.log("Creating account for:", this.email);

            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            const userId = userCredential.user.uid;
            console.log("Firebase Auth account created with UID:", userId);

            // Send email verification
            await sendEmailVerification(userCredential.user);
            console.log("Email verification sent to:", this.email);

            // Save user details in Firestore
            await setDoc(doc(db, "UserAccount", userId), {
                name: this.name,
                email: this.email,
                role: this.role,
                isSuspended: false // Default status
            });
            console.log("User details saved in Firestore:", { name: this.name, email: this.email, role: this.role });

            return true;
        } catch (error) {
            console.error("Error creating account:", error.code, error.message);
            alert(`Error: ${error.message}`);
            return false;
        }
    }

    // Login Method: Checks user role and redirects to the appropriate page
    async login() {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
            const userId = userCredential.user.uid;

            // Fetch user role from Firestore
            const userRole = await UserAccount.getUserRole(userId);

            if (userRole === "admin") {
                // Redirect to the admin home page if the user is an admin
                window.location.href = "/template/adminpages/adminHome.html";
            } else {
                // Optionally handle non-admin users
                alert("You do not have admin privileges.");
            }

            return userCredential.user;
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please check your credentials.");
            return null;
        }
    }

    // Get user role from Firestore
    static async getUserRole(userId) {
        try {
            const userDoc = await getDoc(doc(db, "UserAccount", userId));
            return userDoc.exists() ? userDoc.data().role : null;
        } catch (error) {
            console.error("Error fetching user role:", error);
            throw error;
        }
    }

    // Fetch user details
    static async viewAccount(userId) {
        try {
            const userDoc = await getDoc(doc(db, "UserAccount", userId));
            return userDoc.exists() ? userDoc.data() : null;
        } catch (error) {
            console.error("Error fetching user details:", error);
            throw error;
        }
    }

    // Update user account
    static async updateAccount(userId, updatedData) {
        try {
            await updateDoc(doc(db, "UserAccount", userId), updatedData);
            return true;
        } catch (error) {
            console.error("Error updating account:", error);
            throw error;
        }
    }

    // Fetch all user accounts
    static async getAllAccounts() {
        try {
            const querySnapshot = await getDocs(collection(db, "UserAccount")); // Adjusted collection name
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() }); // Include the document ID
            });
            return users;
        } catch (error) {
            console.error("Error fetching all accounts:", error);
            throw error;
        }
    }

    // Suspend user account
    static async suspendAccount(userId) {
        try {
            const userRef = doc(db, "UserAccount", userId); // Adjusted collection name
            await updateDoc(userRef, { isSuspended: true });
        } catch (error) {
            console.error("Error suspending account:", error);
            throw error;
        }
    }

	static async updateAccount(userId, updatedData) {
		try {
			const userRef = doc(db, "users", userId); // Adjust collection name if different
			await updateDoc(userRef, updatedData);
			console.log(`Account with ID ${userId} updated successfully`);
			return true;
		} catch (error) {
			console.error("Error updating account:", error);
			throw error;
		}
	}

    // Search accounts by email
    static async searchAccountsByEmail(email) {
        try {
            const accounts = [];
            const q = query(collection(db, "UserAccount"), where("email", "==", email));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                accounts.push({ id: doc.id, ...doc.data() });
            });
            return accounts;
        } catch (error) {
            console.error("Error searching accounts by email:", error);
            throw error;
        }
    }

    // Search accounts by role
    static async searchAccountsByRole(role) {
        try {
            const accounts = [];
            const q = query(collection(db, "UserAccount"), where("role", "==", role));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                accounts.push({ id: doc.id, ...doc.data() });
            });
            return accounts;
        } catch (error) {
            console.error("Error searching accounts by role:", error);
            throw error;
        }
    }
}
