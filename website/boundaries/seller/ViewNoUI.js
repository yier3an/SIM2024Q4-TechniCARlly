import { ViewNoController } from "../../controllers/seller/ViewNoController.js";
import { CarListing } from "../../entities/CarListing.js";

document.addEventListener("DOMContentLoaded", () => {
	let views = new ViewNoController();
	views.displayViews();
});

class ViewCarListingUI {
	constructor() {
		this.viewController = new ViewNoController();
	}

	displayViews() {
		this.viewController.getViews(CarListingID);
	}
}