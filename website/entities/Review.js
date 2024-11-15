// entities/Review.js

import firebase from "firebase/app";
import "firebase/firestore";

export class Review {

	constructor() {
		this.db = getFirestore();
	}

	createReview(agent, reviewer, rating, review) {
		let ref = this.db.collection("Review").doc();
		ref.set({
			agent: agent,
			reviewer: reviewer,
			rating: rating,
			review: review
		})
	}

	getDB() {
		this.db = getFirestore();
	}

	// getReview(agent) {
	// 	const db = firebase.firestore();
	// 	const listingDoc = db.collection("Review").doc(agent).get();
	// 	return listingDoc.exists ? listingDoc.data() : null;
	// }

}