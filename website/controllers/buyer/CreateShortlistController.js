import { Shortlist } from "../../entities/Shortlist.js";

export class CreateShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	saveListing(carListingID, listingName, carModel,
		price, seller, buyer, agent) {
		return this.sl.saveListing(carListingID, listingName, carModel,
			price, seller, buyer, agent);
	}
}