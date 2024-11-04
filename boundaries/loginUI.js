class loginUI {
	constructor() {
		username = document.forms["login"]["username"].value;
		pwd = document.forms["login"]["password"].value;
		loginC = new loginController(username, pwd);
	}

	displayLoginPg() { }

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