// newListingUI.js
import newListingController from '../controllers/newListingController';

class newListingUI {
    createCarListing(carData) {
        newListingController.createCarListing(carData);
    }
}

export default newListingUI;
