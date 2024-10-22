class userAccount {
	constructor(name, email, username, pwd) {
		this.name = name;
		this.email = email;
		this.username = username;
		this.pwd = pwd;
	}

	// accessors
	get name() {
		return this.name;
	}
	get username() {
		return this.username;
	}
	get email() {
		return this.email;
	}
	get pwd() {
		return this.pwd;
	}

	// mutators
	set name(newName) {
		this.name = newName;
	}
	set username(newUsername) {
		this.username = newUsername;
	}
	set email(newEmail) {
		this.email = newEmail;
	}
	set pwd(newPwd) {
		this.pwd = newPwd;
	}
}

class userProfile {
	constructor(type) {
		this.type = type;
	}
}