class CalculatorUI {
	constructor() {
		this.calcController = new CalculatorController();
	}

	main(carPrice, dPaymt, intRate, loanTerm) {
		this.calcController.calc(carPrice, dPaymt, intRate, loanTerm);
	}

	displayLoanAmt() {
		//
	}
}