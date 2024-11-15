import { Shortlist } from "../../entities/Shortlist.js";

export class CreateShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	saveListing(carListingID, buyer) {
		return this.sl.saveListing(carListingID, buyer);
	}
}