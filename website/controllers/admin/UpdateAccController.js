import { UserAccount } from "../../entities/userAccount.js";


export async function getAccountDetails(userId) {
    try {
        return await UserAccount.viewAccount(userId); // Fetch account details
    } catch (error) {
        console.error("Error fetching account details:", error);
        throw error;
    }
}

export async function updateAccountDetails(userId, updatedData) {
    try {
        return await UserAccount.updateAccount(userId, updatedData); // Update account
    } catch (error) {
        console.error("Error updating account details:", error);
        throw error;
    }
}
