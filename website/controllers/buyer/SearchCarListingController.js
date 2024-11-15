import { CarListing } from "../../entities/CarListing.js";

export class SearchCarListingController {
	constructor() {
		this.cl = new CarListing();
	}

	async searchListing(info) {
		return await this.cl.searchCarlist(info);
	}
}