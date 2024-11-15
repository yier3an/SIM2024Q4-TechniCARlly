// CreateAccUI.js
import { CreateAccController } from "../../controllers/admin/CreateAccController.js";


document.addEventListener("DOMContentLoaded", () => {
    // Attach event listener to the "Create Account" button
    const createAccountButton = document.getElementById("createAccountButton");
    if (createAccountButton) {
        createAccountButton.addEventListener("click", async () => {
            console.log("Create Account button clicked");

            // Retrieve input values from the form
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const role = document.getElementById("role").value;

            // Call the CreateAccController to handle account creation
            await CreateAccController.createAccount(name, email, password, role);
        });
    } else {
        console.error("Create Account button not found in the DOM");
    }
});
