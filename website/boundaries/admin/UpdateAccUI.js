// UpdateAccUI.js
import UpdateAccController from '../controllers/UpdateAccController';

class UpdateAccUI {
    updateAccount(userId, updatedData) {
        UpdateAccController.updateAccount(userId, updatedData);
    }
}

export default UpdateAccUI;
