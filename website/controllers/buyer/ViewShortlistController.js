import { Shortlist } from "../../entities/Shortlist.js";

class ViewShortlistController {
	constructor() {
		this.sl = new Shortlist();
	}

	viewShortlist() {
		return this.sl.getShortlist()
	}
}