import { SearchShortlistController } from "../../controllers/buyer/SearchShortlistController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("searchSL").addEventListener("click", () => {
		console.log("clicked.");
		let info = document.forms["search"]["search_input"].value;

		const searchSL = new SearchShortlistUI();
		searchSL.searchListing(info);
	});
});


class SearchShortlistUI {
	constructor() {
		this.searchController = new SearchShortlistController();
	}

	searchListing(info) {
		let searchResult = this.searchController.getSLcar(info);

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