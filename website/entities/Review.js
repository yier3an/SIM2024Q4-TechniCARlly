// entities/Review.js

import { db, doc, setDoc, getDoc } from "../../firebaseConfig.js";

export class Review {
	async createReview(agent, reviewer, rating, review) {
		const docRef = doc(db, "ShortList", reviewer);
		setDoc(docRef, {
			agent: agent,
			reviewer: reviewer,
			rating: rating,
			review: review
		}, { merge: true });
	}

	// getReview(agent) {
	// 	const db = firebase.firestore();
	// 	const listingDoc = db.collection("Review").doc(agent).get();
	// 	return listingDoc.exists ? listingDoc.data() : null;
	// }

}