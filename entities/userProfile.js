
class userProfile {
	constructor(name, description) {
		this.name = name;
		this.description = description;
	}

	// accessors
	get profile() {
		return this;
	}

	// mutator
	set setInfo(up) {
		this.name = up.name;
		this.description = up.description;
	}
}