import { SuspendAccountController } from '../../controllers/admin/SuspendAccController.js';
import { UserAccount } from '../../entities/userAccount.js';

export async function suspendAccount(userId) {
    try {
        const confirmed = confirm("Are you sure you want to suspend this account?");
        if (!confirmed) return;

        await UserAccount.suspendAccount(userId); // Call the suspendAccount method from the entity
        alert(`Account with ID ${userId} has been suspended.`);
        window.location.reload(); // Reload the page to reflect the changes
    } catch (error) {
        console.error("Error suspending account:", error);
        alert("Failed to suspend the account. Please try again.");
    }
}