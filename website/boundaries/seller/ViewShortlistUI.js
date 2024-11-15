import { ViewShortlistController } from "../../controllers/seller/ViewShortlistController";

document.addEventListener("DOMContentLoaded", () => {
	let views = new ViewNoController();
	views.displayViews();
});

class ViewShortlistUI {
	constructor() {
		this.viewController = new ViewShortlistController();
	}

	displayViews() {
		this.viewController.getViews(CarListingID);
	}
}