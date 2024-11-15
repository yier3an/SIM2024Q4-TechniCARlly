import { Review } from "../../entities/Review.js";

export class CreateReviewController {
	constructor() {
		this.rev = new Review();
	}

	createReview(agent, reviewer, rating, review) {
		return this.rev.createReview(agent, reviewer, rating, review);
	}
}