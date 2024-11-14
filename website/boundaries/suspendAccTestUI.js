document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("suspend_acc_btn").addEventListener("click", () => {
		const suspendAcc = new suspendAccTestUI();
		suspendAcc.displayPopup();
	});
});

// function suspend() {
// 	const suspendAcc = new suspendAccTestUI();
// 	suspendAcc.displayPopup();
// }


class suspendAccTestUI {
	constructor() {
		this.suspendAccTestController = new SuspendAccTestController()
		username = document.forms["field_input"]["email"].value;
	}

	displayPopup() {
		let confirmation = "Confirm suspension of user account?";

		if (confirm(confirmation) == true) {
			suspendSuccess();
		}
		else {
			suspendCancel();
		}
	}

	suspendSuccess() {
		this.suspendAccTestController.confirmSuspend(username);
		alert("Account suspended");
	}

	suspendCancel() {
		alert("Account suspension cancelled");
	}
}