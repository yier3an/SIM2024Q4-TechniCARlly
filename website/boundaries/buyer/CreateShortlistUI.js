import { CreateShortlistController } from "../../controllers/buyer/CreateShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("saveSL").addEventListener("click", () => {
		console.log("clicked.");
		let save = document.getElementById("saveSL");
		let carListingID = document.getElementById("carListingID").value;

		const createSL = new CreateShortlistUI();
		createSL.saveListing(carListingID, save);
	});
});

class CreateShortlistUI {
	constructor() {
		this.slController = new CreateShortlistController();
	}

	saveListing(carListingID, save) {
		this.slController.saveListing(carListingID);
		this.saveSuccess();
	}

	saveSuccess() {
		if (save.value == "save") {
			save.value = "saved";
		}

		alert("Listing saved.");
	}
}