import { SearchCarListingController } from "../../controllers/buyer/SearchCarListingController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("searchCL").addEventListener("click", () => {
		console.log("clicked.");
		let info = document.forms["search"]["search_input"].value;

		const searchCL = new SearchCarListingUI();
		searchCL.searchListing(info);
	});
});

class SearchCarListingUI {
	constructor() {
		this.searchController = new SearchCarListingController();
		let searchError = document.getElementById("searchError");
	}

	searchListing(info) {
		let searchResult = this.searchController.searchListing(info);

		if (searchResult.length > 0) {
			document.getElementById("car_listing").innerText = JSON.stringify(results, null, 2);
			this.searchError.style.display = "none";
		}
		else {
			this.searchError.style.display = "block";
		}
	}

	displaySearchResult() {
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

	displayPg() {
		//
	}
}