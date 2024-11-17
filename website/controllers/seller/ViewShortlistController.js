import { CarListing } from "../../entities/CarListing.js";

export class ViewShortlistController {
	constructor() {
		this.cl = new CarListing();
	}

	getSL(CarListingID) {
		return this.cl.getSL(CarListingID);
	}
}