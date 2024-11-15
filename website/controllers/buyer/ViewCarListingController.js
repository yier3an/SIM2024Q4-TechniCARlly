import { CarListing } from "../../entities/CarListing.js";

export class ViewCarListingController {
	constructor() {
		this.cl = new CarListing();
	}

	getCarListing() {
		let abs = this.cl.getCarListing();
		return abs;
	}
}