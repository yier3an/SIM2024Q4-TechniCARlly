class loginController {
	constructor(username, pwd) {
		user = new userAccount(username, pwd);
	}

	validateLogin(username, pwd) {
		return user.validateLogin(username, pwd); skgjksgsdk
	}
}