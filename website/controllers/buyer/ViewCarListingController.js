import { CarListing } from "../../entities/CarListing.js";

export class ViewCarListingController {
	constructor() {
		this.cl = new CarListing();
	}

	getCarListing() {
		return this.cl.getCarListing();
	}
}