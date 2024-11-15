import { ViewNoController } from "../../controllers/seller/ViewNoController.js";

document.addEventListener("DOMContentLoaded", () => {
	let viewsUI = new ViewNoUI();
	viewsUI.getViews(CarListingID);
});

class ViewNoUI {
	constructor() {
		this.controller = new ViewNoController();
		this.views = 0;
	}

	getViews(CarListingID) {
		this.views = this.controller.getViews(CarListingID);
		this.displayViews()
	}

	displayViews() {
		document.getElementById("views").value = this.views
	}
}