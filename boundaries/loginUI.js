// not very sure if using a class here is correct??

class loginUI {
	constructor() { }

	displayLoginPg() {
		// get login details
		let username = document.forms["login"]["username"].value;
		let pwd = document.forms["login"]["password"].value;

		// validate the login
		let loginController = new loginController();
		let loginStatus = loginController.validateLogin(username, pwd);

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