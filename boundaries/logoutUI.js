class logoutUI {
	constructor() {
		logoutC = new logoutController();
	}

	attemptLogout() {
		//
	}

	logoutSuccess() {
		// redirect to login page
		console.log("login success");
	}

	logoutError() {
		// redirect to current/home page
		console.log("login error");
	}
}