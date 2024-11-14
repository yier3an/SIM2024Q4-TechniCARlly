import { db } from "../../firebaseConfig.js";
import { setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

class Shortlist {
	async saveListing(carListingID, listingName, carModel, price, seller, buyer) {
		try {
			await setDoc(doc(db, "CarListing", "??"), {
				carID: carListingID,
				listingName: listingName,
				carModel: carModel,
				price: price,
				seller: seller,
				buyer: buyer
			});
			console.log("listing added successfully:");
		} catch (error) {
			console.error("Error adding listing to shortlist:", error);
		}
	}
	getShortlist(shortListID) {
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

		try {
			//
		} catch (error) {
			//
		}
	}
}
