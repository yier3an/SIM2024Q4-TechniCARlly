document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("login_btn").addEventListener(
		"click", () => {
			const calculator = new CalculatorUI();
			calculator.displayLoanAmt();

			// ref
			const email = document.getElementById("username").value;
			const password = document.getElementById("password").value;
			loginController(email, password);
		}
	);
});

class CalculatorUI {
	constructor() {
		this.calcController = new CalculatorController();
		carPrice = document.forms["login"]["username"].value;
		dPaymt = document.forms["login"]["password"].value;
		intRate = document.forms["login"]["password"].value;
		loanTerm = document.forms["login"]["password"].value;
	}

	getLoanAmt(carPrice, dPaymt, intRate, loanTerm) {
		return this.calcController.calc(carPrice, dPaymt, intRate, loanTerm);
	}

	displayLoanAmt() {
		this.getLoanAmt(carPrice, dPaymt, intRate, loanTerm)
	}
}