// controllers/CreateAccController.js
import { UserAccount } from "../../entities/userAccount.js";

export class CreateAccController {
    static async createAccount(name, email, password, role) {
        try {
            const userAccount = new UserAccount(name, email, password, role);
            const success = await userAccount.createAccount();
            if (success) {
                alert("Account created successfully. Please check your email to verify.");
                window.location.href = "viewAccList.html";
            } else {
                alert("Failed to create account. Please try again.");
            }
        } catch (error) {
            console.error("Error in CreateAccController:", error);
            alert("There was an error creating the account. Please try again later.");
        }
    }
}
