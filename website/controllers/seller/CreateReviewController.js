import { Review } from "../../entities/Review.js";

export class CreateReviewController {
	constructor() {
		this.r = new Review();
	}

	createReview(agent, reviewer, rating, review) {
		return this.r.createReview(agent, reviewer, rating, review);
	}
}