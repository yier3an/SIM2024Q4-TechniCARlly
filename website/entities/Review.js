// entities/Review.js

import {
	getFirestore, doc, set, getDoc, updateDoc,
	deleteDoc, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import firebase from "firebase/app";
import "firebase/firestore";

export class Review {

	constructor() {
		this.db = firebase.firestore();
	}

	createReview(agent, reviewer, rating, review) {
		let ref = db.collection("Review").doc();
		ref.set({
			agent: agent,
			reviewer: reviewer,
			rating: rating,
			review: review
		})
	}

	// getReview(agent) {
	// 	const db = firebase.firestore();
	// 	const listingDoc = db.collection("Review").doc(agent).get();
	// 	return listingDoc.exists ? listingDoc.data() : null;
	// }

}