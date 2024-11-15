import { ViewShortlistController } from "../../controllers/seller/ViewShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	let viewsUI = new ViewShortlistUI();
	viewsUI.getViews(CarListingID);
});

class ViewShortlistUI {
	constructor() {
		this.controller = new ViewShortlistController();
		this.views = 0;
	}

	getSL(CarListingID) {
		this.views = this.controller.getSL(CarListingID);
		this.displaySL()
	}

	displaySL() {
		document.getElementById("views").value = this.views
	}
}