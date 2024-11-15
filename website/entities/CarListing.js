// entities/CarListing.js

export class CarListing {
	constructor(id, title, description, price, agentId) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.agentId = agentId;
	}

	static async createListing(listingData) {
		// Create a new listing in Firebase Firestore
		const db = firebase.firestore();
		const newListingRef = db.collection("carListings").doc();
		await newListingRef.set(listingData);
		return newListingRef.id;
	}

	static async getListingById(id) {
		// Retrieve a listing by ID
		const db = firebase.firestore();
		const listingDoc = await db.collection("carListings").doc(id).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}

	static async updateListing(id, updatedData) {
		// Update listing data
		const db = firebase.firestore();
		await db.collection("carListings").doc(id).update(updatedData);
		return true;
	}

	static async deleteListing(id) {
		// Delete a listing
		const db = firebase.firestore();
		await db.collection("carListings").doc(id).delete();
		return true;
	}

	static async searchListings(query) {
		// Search for listings based on a query
		const db = firebase.firestore();
		const snapshot = await db.collection("carListings")
			.where("title", "==", query)
			.get();

		const results = [];
		snapshot.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
		return results;
	}
}