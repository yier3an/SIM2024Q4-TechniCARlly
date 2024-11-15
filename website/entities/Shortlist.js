// entities/Shortlist.js

import { db, doc, setDoc, getDoc } from "../../firebaseConfig.js";

export class Shortlist {
	constructor(emptyArray = []) {
		this.shortL = emptyArray;
	}

	async saveListing(carListingID, buyer) {
		let cars = await this.getSLcar(buyer, carListingID);

		for (i in cars) {
			this.shortL.push(i);
		}

		this.shortL.push(carListingID);

		const docRef = doc(db, "ShortList", buyer);
		setDoc(docRef, {
			buyer: buyer,
			carListingID: this.shortL
		}, { merge: true });
	}

	async getShortlist(buyer) {
		const docRef = doc(db, "ShortList", ShortlistID);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			return null;
		}
	}

	async getSLcar(buyer, carListingID) {
		const docRef = doc(db, "ShortList", ShortlistID);

		const q = query(collection(db, ShortlistID), where("carListingID", "==", carListingID));

		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data().carListingID);
			return docSnap.data().carListingID;
		} else {
			console.log("No such document!");
		}
	}

}
