import { CreateShortlistController } from "../../controllers/buyer/CreateShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("saveSL").addEventListener("click", () => {
		let save = document.getElementById("saveSL").textContent;
		console.log(save);
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
		console.log(this.saveStatus);
		this.saveSuccess();
	}

	saveSuccess() {
		if (this.saveStatus.toLowerCase() == "save") {
			this.saveStatus = "Saved";

			console.log(this.saveStatus);
		}
		else {
			this.saveStatus = "save";
		}

		document.getElementById("saveSL").textContent = this.saveStatus;

		alert("Listing saved.");
	}
}