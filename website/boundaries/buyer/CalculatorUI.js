import { CalculatorController } from "../../controllers/buyer/CalculatorController.js";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("calculate_btn").addEventListener(
		"click", () => {
			let carPrice = document.forms["calculator"]["carPrice"].value;
			let dPaymt = document.forms["calculator"]["downPayment"].value;
			let intRate = document.forms["calculator"]["intRate"].value;
			let loanTerm = document.forms["calculator"]["loanTerm"].value;

			const calculator = new CalculatorUI();
			calculator.getLoanAmt(carPrice, dPaymt, intRate, loanTerm);
		}
	);
});

class CalculatorUI {
	constructor() {
		this.calcController = new CalculatorController();
		this.loanAmt = 0;
	}

	getLoanAmt(carPrice, dPaymt, intRate, loanTerm) {
		this.loanAmt = this.calcController.calc(carPrice, dPaymt, intRate, loanTerm);

		this.displayLoanAmt();
	}

	displayLoanAmt() {
		// display onto html
		document.getElementById("loanAmt").textContent = "Car Loan Payment (per month): " +
			this.loanAmt.toFixed(2);
	}
}