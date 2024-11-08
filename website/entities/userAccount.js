// entities/useraccount.js

import { auth, db } from "../../firebaseConfig.js";
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

/*
class userAccount {
	constructor(name, userType, username, pwd) {
		// this.name = name;
		// this.userType = userType;
		this.username = username; // email will be used as username
		this.pwd = pwd;
	}

	// accessors
	get account() {
		return this;
	}

	// mutator
	set setInfo(ua) {
		this.name = ua.name;
		this.username = ua.username;
		this.pwd = ua.pwd;
	}

	// get info from database
	validateLogin(username, pwd) {

		if (this.accExists(username)) {
			if (this.pwd == pwd) {
				return true
			}
		}
		// if (this.email == username && this.pwd == pwd) {
		// 	return true;
		// }
		return false;
	}

	accExists(username) {
		if (this.email == username) {
			return true;
		}
		return false;
	}

	confirmLogout() {
		// logout for this instance
	}
}
*/