// viewRatingsReviewsUI.js
import viewRatingsReviewsController from '../../controllers/viewRatingsReviewsController';

class viewRatingsReviewsUI {
	viewRatingsAndReviews(agentId) {
		return viewRatingsReviewsController.viewRatingsAndReviews(agentId);
	}
}

export default viewRatingsReviewsUI;
