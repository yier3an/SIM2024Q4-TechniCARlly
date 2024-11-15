import { UserAccount } from "../entities/userAccount";

export class SuspendAccTestController {
	constructor() {
		this.useraccount = new UserAccount();
	}

	confirmSuspend(username) {
		console.log("in controller");
	}
}