import { ViewShortlistController } from "../../controllers/buyer/SearchShortlistController";

document.addEventListener("DOMContentLoaded", () => {
	let shortlist = new ViewCarListingUI();
	// var x = document.getElementById("searchError");
	// if (x.style.display === "none") {
	// 	x.style.display = "block";
	// } else {
	// 	x.style.display = "none";
	// }
	shortlist.displayListing();
});

class ViewShortlistUI {
	constructor() {
		this.viewSL = new ViewShortlistController();
	}

	displayShortlist() {
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