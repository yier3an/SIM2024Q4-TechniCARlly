import loginSellerController from "../controllers/sellerLoginController.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login_btn").addEventListener("click", () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    loginSellerController(email, password);
  });
});
