// ViewAccUI.js
import ViewAccController from '../controllers/ViewAccController';

class ViewAccUI {
    viewAccount(userId) {
        return ViewAccController.viewAccount(userId);
    }
}

export default ViewAccUI;
