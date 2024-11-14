document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("suspend_acc_btn").addEventListener("click", () => {
		const suspendAcc = new suspendAccTestUI();
		suspendAcc.displayPopup();
	});
});

class suspendAccTestUI {
	constructor() {
		this.suspendAccTestController = new SuspendAccTestController()
		this.username = document.forms["edit_acc"]["email"].value;
	}

	displayPopup() {
		let confirmation = "Confirm suspension of user account?";

		if (confirm(confirmation) == true) {
			this.suspendSuccess();
		}
		else {
			this.suspendCancel();
		}
	}

	suspendSuccess() {
		this.suspendAccTestController.confirmSuspend(this.username);
		alert("Account suspended");
	}

	suspendCancel() {
		alert("Account suspension cancelled");
	}
}