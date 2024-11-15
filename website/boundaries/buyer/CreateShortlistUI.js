document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("createSL").addEventListener("click", () => {
		console.log("clicked.");
		const createSL = new CreateShortlistUI();
		createSL.displayPopup();
	});
});

class CreateShortlistUI {
	constructor() {
		this.slController = new CreateShortlistController();
	}

	createShortlist() {
		//
	}
}