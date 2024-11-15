import { CarListing } from "../../entities/CarListing.js";

export class ViewCarListingController {
	constructor() {
		this.carL = new CarListing();
	}

	getCarListing() {
		return this.carL.getCarListing();
	}
}