import { ViewCarListingController } from "../../controllers/buyer/ViewCarListingController.js";

document.addEventListener("DOMContentLoaded", () => {
	const carListing = new ViewCarListingUI();
	// var x = document.getElementById("searchError");
	// if (x.style.display === "none") {
	// 	x.style.display = "block";
	// } else {
	// 	x.style.display = "none";
	// }
	carListing.displayListing();
});

class ViewCarListingUI {
	constructor() {
		this.viewController = new ViewCarListingController();
	}

	displayListing() {
		let listings = this.viewController.getCarListing();
		console.log(listings);

		let listingsContainer = document.getElementById("car_listing");

		listings.forEach(listing => {
			const childEle = document.createElement("div");
			childEle.innerHTML = `
				<h3>${listing.listingName}</h3>
				<p>${listing.model}</p>
				<p>Price: ${listing.price}</p>
			`;

			listingsContainer.appendChild(childEle);
		});
	}
}