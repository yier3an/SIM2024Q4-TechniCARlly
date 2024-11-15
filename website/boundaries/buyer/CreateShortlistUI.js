import { CreateShortlistController } from "../../controllers/buyer/CreateShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("saveSL").addEventListener("click", () => {
		console.log("clicked.");
		let save = document.getElementById("saveSL");
		let buyer = "testing shortlist";
		let carListingID = document.getElementById("carListingID").textContent;

		const createSL = new CreateShortlistUI();
		createSL.saveListing(carListingID, buyer, save);
	});
});

class CreateShortlistUI {
	constructor() {
		this.slController = new CreateShortlistController();
		this.saveStatus = "";
	}

	saveListing(carListingID, buyer, save) {
		this.slController.saveListing(carListingID, buyer);
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