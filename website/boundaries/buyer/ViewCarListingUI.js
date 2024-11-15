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
		const listing = document.getElementById("listingContainer");
		var i = 0;

		if (!Array.isArray(listing) || !listing.length) {
			document.getElementById("displayError").style.display = "block";
		}
		else {
			document.getElementById("displayError").style.display = "none";

			if (listing.innerHTML == "" || listing.innerHTML == null) {
				for (item in this.carList) {

					let image = document.createElement("img");
					if (i > 6) {
						i = 0;
					}
					image.setAttribute("src", "../../static/asset/" + i + ".jpg");
					listing.appendChild(image);
					i++;

					let div1 = document.createElement("div");
					div1.setAttribute("class", "car_content");

					let table = document.createElement("table");
					table.setAttribute("id", "listing_table");

					let row = document.createElement("tr");
					let clName = document.createElement("td");
					clName.textContent = "Listing Name: " + item.listingName;
					row.appendChild(clName);
					table.appendChild(row);

					div1.appendChild(table);

					listing.appendChild(div1);
				}
			}
			else {
				listing.innerHTML = "";
			}
		}

	}
}