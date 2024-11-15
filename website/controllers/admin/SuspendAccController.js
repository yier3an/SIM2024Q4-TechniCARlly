import { UserAccount } from '../../entities/userAccount.js';

export class SuspendAccountController {
    static async suspendUserAccount(userId) {
        try {
            // Call the entity method to suspend the account
            await UserAccount.suspendAccount(userId);
        } catch (error) {
            console.error('Error in SuspendAccountController:', error);
            throw error;
        }
    }
}
