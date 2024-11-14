import loginAgentController from "../controllers/agentLoginController.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login_btn").addEventListener("click", () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    loginAgentController(email, password);
  });
});
