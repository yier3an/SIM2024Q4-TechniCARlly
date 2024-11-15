import { Review } from "../../entities/Review.js";

export class CreateReviewController {
	constructor() {
		this.rev = new Review();
	}

	createReview(rating, review) {
		return this.rev.createReview(rating, review);
	}
}