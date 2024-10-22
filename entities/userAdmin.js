class userAdmin {
	constructor(name, email, username, pwd, type) {
		this.userAccount = new userAccount(name, email, username, pwd);
		this.userProfile = new userProfile(type);
	}

	createUserAcc() {
		//
	}
}