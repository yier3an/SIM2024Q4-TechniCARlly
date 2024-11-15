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
		this.saveStatus = "";
	}

	saveListing(carListingID, save) {
		this.slController.saveListing(carListingID);
		this.saveStatus = save;
		this.saveSuccess();
	}

	saveSuccess() {
		if (this.saveStatus.value == "save") {
			this.saveStatus.value = "saved";
		}
		else {
			this.saveStatus.value = "saved";
		}

		alert("Listing saved.");
	}
}