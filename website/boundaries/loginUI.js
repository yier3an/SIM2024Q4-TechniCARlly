import { UserAccount } from "./userAccount.js";

// Get form values
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Create a new UserAccount instance
    const userAccount = new UserAccount(null, emailInput.value, passwordInput.value, null);

    // Attempt login
    const user = await userAccount.login();
    
    if (user) {
        // If login is successful, the redirection will be handled inside the login method
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
