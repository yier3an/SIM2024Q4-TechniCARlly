import { CreateShortlistController } from "../../controllers/buyer/CreateShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("saveSL").addEventListener("click", () => {
		console.log("clicked.");
		const createSL = new CreateShortlistUI();
		createSL.displayPopup();
	});
});

class CreateShortlistUI {
	constructor() {
		this.slController = new CreateShortlistController();
	}

	createShortlist() {
		//
	}
}