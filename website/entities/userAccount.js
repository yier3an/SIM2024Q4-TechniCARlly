// entities/userAccount.js
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

export class UserAccount {
	constructor(email, password, role) {
		this.email = email;
		this.password = password;
		this.role = role;
	}

	async createAccount() {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
			const userId = userCredential.user.uid;
			await setDoc(doc(db, "users", userId), {
				email: this.email,
				role: this.role,
			});
			return true;
		} catch (error) {
			console.error("Error creating account:", error);
			return false;
		}
	}

	async login() {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
			return userCredential.user;
		} catch (error) {
			console.error("Login error:", error);
			return null;
		}
	}

	static async getUserRole(userId) {
		const userDoc = await getDoc(doc(db, "users", userId));
		return userDoc.exists() ? userDoc.data().role : null;
	}
}