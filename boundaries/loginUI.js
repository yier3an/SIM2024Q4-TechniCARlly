// boundaries/loginUI.js
import loginController from "../controllers/loginController.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login_btn").addEventListener("click", () => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    loginController(email, password);
  });
});

// note to Seth: have to use class too!! see if you can combine,
// if not I can try for these too (Chloe)
/*
class loginUI {
	constructor() {
		username = document.forms["login"]["username"].value;
		pwd = document.forms["login"]["password"].value;
		loginC = new loginController(username, pwd);
	}

	displayLoginPg() {
    //
	}

	attemptLogin() {
		// validate the login
		let loginStatus = loginC.validateLogin(loginC.user);

		if (loginStatus) {
			this.loginSuccess();
		}
		else {
			this.loginError();
		}
	}

	loginSuccess() {
		// redirect to user home page
		// window.location.replace("/home.html");
		console.log("login success");
	}

	loginError() {
		// show error, ask to try again
		// alert("Entered invalid username or password. Please try again.");
		console.log("login error");
	}
}
*/