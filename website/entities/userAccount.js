// entities/userAccount.js
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, collection, query, where, getDocs } from "firebase/firestore";
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
			await setDoc(doc(db, "UserAccount", userId), {
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
		const userDoc = await getDoc(doc(db, "UserAccount", userId));
		return userDoc.exists() ? userDoc.data().role : null;
	}

	static async viewAccount(userId) {
		const userDoc = await getDoc(doc(db, "UserAccount", userId));
		return userDoc.exists() ? userDoc.data() : null;
	}

	static async updateAccount(userId, updatedData) {
		try {
			await updateDoc(doc(db, "UserAccount", userId), updatedData);
			return true;
		} catch (error) {
			console.error("Error updating account:", error);
			return false;
		}
	}

	static async suspendAccount(userId) {
		try {
			await updateDoc(doc(db, "UserAccount", userId), { suspended: true });
			return true;
		} catch (error) {
			console.error("Error suspending account:", error);
			return false;
		}
	}

	static async searchAccountsByEmail(email) {
		const accounts = [];
		const q = query(collection(db, "UserAccount"), where("email", "==", email));
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach(doc => {
			accounts.push({ id: doc.id, ...doc.data() });
		});
		return accounts;
	}

	static async searchAccountsByRole(role) {
		const accounts = [];
		const q = query(collection(db, "UserAccount"), where("role", "==", role));
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach(doc => {
			accounts.push({ id: doc.id, ...doc.data() });
		});
		return accounts;
	}
}
