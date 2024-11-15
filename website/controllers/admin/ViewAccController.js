import { UserAccount } from '../../entities/userAccount.js';

export async function getAccounts() {
    try {
        // Call the entity method to fetch all user accounts
        return await UserAccount.getAllAccounts();
    } catch (error) {
        console.error('Error in ViewAccController:', error);
        throw error;
    }
}
