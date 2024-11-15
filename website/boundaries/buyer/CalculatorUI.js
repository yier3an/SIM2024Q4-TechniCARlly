document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("calculate").addEventListener(
		"click", () => {
			const calculator = new CalculatorUI();
			calculator.displayLoanAmt();
		}
	);
});

class CalculatorUI {
	constructor() {
		this.calcController = new CalculatorController();
		carPrice = document.forms["calculator"]["carPrice"].value;
		dPaymt = document.forms["calculator"]["dPaymt"].value;
		intRate = document.forms["calculator"]["intRate"].value;
		loanTerm = document.forms["calculator"]["loanTerm"].value;
	}

	getLoanAmt(carPrice, dPaymt, intRate, loanTerm) {
		return this.calcController.calc(carPrice, dPaymt, intRate, loanTerm);
	}

	displayLoanAmt() {
		loanAmt = this.getLoanAmt(carPrice, dPaymt, intRate, loanTerm)

		// display onto html
		document.getElementById("currDate").value = today;
	}
}