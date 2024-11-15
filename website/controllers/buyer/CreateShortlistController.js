import { Shortlist } from "../../entities/Shortlist.js";

export class CreateShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	async saveListing(carListingID, listingName, carModel, price, seller, buyer) {
		return this.sl.saveListing(carListingID, listingName, carModel, price, seller, buyer);
	}
}