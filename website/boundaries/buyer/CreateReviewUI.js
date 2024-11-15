import { CreateReviewController } from "../../controllers/buyer/CreateReviewController";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("saveSL").addEventListener("click", () => {
		console.log("clicked.");
		let rating = document.getElementById("rating");
		let review = document.getElementById("review").value;

		const createR = new createReviewUI();
		createR.createReview(rating, review);
	});
});

class createReviewUI {
	constructor() {
		this.reviewController = new CreateReviewController();
	}

	createReview(rating, review) {
		this.reviewController.createReview(rating, review);
		this.reviewSuccess();
	}

	reviewSuccess() {
		alert("Review Submitted.");
	}
}