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
			searchError.style.display = "none";
		}
		else {
			searchError.style.display = "block";
		}
	}

	displaySearchResult() {
	}

	displayPg() {
		//
	}
}