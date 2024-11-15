export class ViewShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	viewShortlist(carListingID) {
		return this.sl.viewShortlist(carListingID);
	}
}