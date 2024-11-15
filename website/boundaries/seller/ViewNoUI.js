import { ViewNoController } from "../../controllers/seller/ViewNoController.js";

document.addEventListener("DOMContentLoaded", () => {
	let views = new ViewNoUI();
	views.displayViews();
});

class ViewNoUI {
	constructor() {
		this.viewController = new ViewNoController();
	}

	displayViews() {
		this.viewController.getViews(CarListingID);
	}
}