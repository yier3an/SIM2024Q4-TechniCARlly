export class Shortlist {
	constructor() {
		this.db = firebase.firestore();
	}

	async saveListing(carListingID, listingName, carModel, price, seller, buyer) {
		let newListingRef = db.collection("ShortList").doc();
		await newListingRef.set(carListingID, listingName, carModel, price, seller, buyer);
		return newListingRef.id;
	}

	async getShortlist(ShortlistID) {
		let listingDoc = await db.collection("ShortList").doc(shortListID).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}

	async getSLcar(ShortlistID) {
		let listingDoc = await db.collection("ShortList").doc(shortListID).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}
}
