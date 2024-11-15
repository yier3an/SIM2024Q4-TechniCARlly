import { CarListing } from "../../entities/CarListing.js";

export class ViewNoController {
	constructor() {
		this.cl = new CarListing();
	}

	getViews() {
		return this.cl.getViews();
	}
}