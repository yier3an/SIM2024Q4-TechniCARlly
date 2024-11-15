import { ViewCarListingController } from "../../controllers/buyer/ViewCarListingController.js";

document.addEventListener("DOMContentLoaded", () => {
	const carListing = new ViewCarListingUI();
	carListing.getCarListing();
});

class ViewCarListingUI {
	constructor() {
		this.viewCarListing = new ViewCarListingController();
		this.carList = [];
	}

	getCarListing() {
		this.carList = this.viewCarListing.getCarListing();

		this.displayListing();
	}

	async displayListing() {
		const listing = document.getElementsByClassName("car");

		// clear table body
		listing.innerHTML = "";

		for (item in this.carList) {
			let row = document.createElement("tr");

			let clName = document.createElement("td");
			clName.textContent = item.listingName;
			row.appendChild(clName);

			listing.appendChild(row);
		}
	}
}