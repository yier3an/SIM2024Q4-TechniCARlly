class loginController {
	constructor() { }
	validateLogin(username, pwd) {
		if (validateUser(username) && validatePW(pwd)) {
			return true;
		}
		return false;
	}

	validateUser(username) {
		if (this.username == username) {
			return true;
		}
		return false;
	}

	validatePW(pwd) {
		if (this.pwd == pwd) {
			return true;
		}
		return false;
	}
}