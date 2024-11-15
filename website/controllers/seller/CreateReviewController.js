import { Review } from "../../entities/Review.js";

export class CreateReviewController {
	constructor() {
		this.r = new Review();
	}

	createReview(rating, review) {
		return this.r.createReview(rating, review);
	}
}