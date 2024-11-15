import { Shortlist } from "../../entities/Shortlist.js";

export class ViewShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	viewShortlist(carListingID) {
		return this.sl.getSLCar(carListingID);
	}
}