class userAccount {
	constructor(name, userType, username, pwd) {
		// this.name = name;
		// this.userType = userType;
		this.username = username; // email will be used as username
		this.pwd = pwd;
	}

	// accessors
	get account() {
		return this;
	}

	// mutator
	set setInfo(ua) {
		this.name = ua.name;
		this.username = ua.username;
		this.pwd = ua.pwd;
	}

	// get info from database
	validateLogin(username, pwd) {

		if (this.accExists(username)) {
			if (this.pwd == pwd) {
				return true
			}
		}
		// if (this.email == username && this.pwd == pwd) {
		// 	return true;
		// }
		return false;
	}

	accExists(username) {
		if (this.email == username) {
			return true;
		}
		return false;
	}

	confirmLogout() {
		// logout for this instance
	}
}