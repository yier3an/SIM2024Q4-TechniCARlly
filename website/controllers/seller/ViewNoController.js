import { CarListing } from "../../entities/CarListing.js";

export class ViewNoController {
	constructor() {
		this.cl = new CarListing();
	}

	getViews(CarListingID) {
		return this.cl.getViews(CarListingID);
	}
}