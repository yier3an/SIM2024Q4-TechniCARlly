import { CreateReviewController } from "../../controllers/seller/CreateReviewController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("submit_review_btn").addEventListener("click", () => {
		console.log("clicked.");
		let agent = document.getElementById("agent").value;
		let reviewer = "testReview";
		let rating = document.getElementById("rating").value;
		let review = document.getElementById("review").value;

		const createR = new createReviewUI();
		createR.createReview(agent, reviewer, rating, review);
	});
});

class createReviewUI {
	constructor() {
		this.reviewController = new CreateReviewController();
	}

	createReview(agent, reviewer, rating, review) {
		this.reviewController.createReview(agent, reviewer, rating, review);
		this.reviewSuccess();
	}

	reviewSuccess() {
		alert("Review Submitted.");

		window.location.href = 'sellerViewCar.html'
	}
}