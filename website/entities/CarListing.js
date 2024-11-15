// entities/CarListing.js

import {
	getFirestore, doc, set, getDoc, updateDoc,
	deleteDoc, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import firebase from "firebase/app";
import "firebase/firestore";

export class CarListing {
	constructor(id, title, description, price, agentId) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.agentId = agentId;
	}

	static async createListing(listingData) {
		const db = firebase.firestore();
		const newListingRef = db.collection("carListings").doc();
		await newListingRef.set(listingData);
		return newListingRef.id;
	}

	static async getListingById(id) {
		const db = firebase.firestore();
		const listingDoc = await db.collection("carListings").doc(id).get();
		return listingDoc.exists ? listingDoc.data() : null;
	}

	static async updateListing(id, updatedData) {
		const db = firebase.firestore();
		await db.collection("carListings").doc(id).update(updatedData);
		return true;
	}

	static async deleteListing(id) {
		const db = firebase.firestore();
		await db.collection("carListings").doc(id).delete();
		return true;
	}

	static async searchListings(query, maxPrice = null) {
		const db = firebase.firestore();
		let queryRef = db.collection("carListings").where("title", "==", query);
		if (maxPrice !== null) {
			queryRef = queryRef.where("price", "<=", maxPrice);
		}
		const snapshot = await queryRef.get();

		const results = [];
		snapshot.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
		return results;
	}

	static async getAllListingsByAgent(agentId) {
		const db = firebase.firestore();
		const snapshot = await db.collection("carListings")
			.where("agentId", "==", agentId)
			.get();

		const listings = [];
		snapshot.forEach(doc => listings.push({ id: doc.id, ...doc.data() }));
		return listings;
	}

	static async getRatingsAndReviews(listingId) {
		const db = firebase.firestore();
		const snapshot = await db.collection("ratingsAndReviews")
			.where("listingId", "==", listingId)
			.get();

		const reviews = [];
		snapshot.forEach(doc => reviews.push({ id: doc.id, ...doc.data() }));
		return reviews;
	}
}
