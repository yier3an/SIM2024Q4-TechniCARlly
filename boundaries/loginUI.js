// boundaries/loginUI.js
import loginController from "../controllers/loginController.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login_btn").addEventListener("click", () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    loginController(email, password);
  });
});
