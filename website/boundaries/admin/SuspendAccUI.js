// SuspendAccUI.js
import SuspendAccController from '../controllers/SuspendAccController';

class SuspendAccUI {
    suspendAccount(userId) {
        SuspendAccController.suspendAccount(userId);
    }
}

export default SuspendAccUI;
