// entities/Shortlist.js

import {
	getFirestore, doc, set, getDoc, updateDoc,
	deleteDoc, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import firebase from "firebase/app";
import "firebase/firestore";

export class Shortlist {
	constructor() {

	}

	async saveListing(carListingID, listingName, carModel, price, seller, buyer) {
		getDB();
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

	getDB() {
		this.db = getFirestore();
	}
}
