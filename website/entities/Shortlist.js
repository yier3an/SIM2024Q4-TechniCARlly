// entities/Shortlist.js

import { db, doc, setDoc, collection } from "../../firebaseConfig.js";

export class Shortlist {
	constructor(emptyArray = []) {
		this.shortL = emptyArray;
	}

	saveListing(carListingID, buyer) {
		this.shortL.push(carListingID);

		const ref = doc(db, 'ShortList', buyer);
		setDoc(ref, {
			buyer: buyer,
			carListingID: this.shortL
		}, { merge: true });
	}

	getShortlist(ShortlistID) {
		let listingDoc = db.collection("ShortList").doc(shortListID).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}

	getSLcar(ShortlistID) {
		let listingDoc = db.collection("ShortList").doc(shortListID).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}

}
