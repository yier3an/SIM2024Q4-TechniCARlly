class CalculatorController {
	constructor() {
		this.carLoan = new CarLoan();
	}

	calc(carPrice, dPaymt, intRate, loanTerm) {
		return this.carLoan.calc(carPrice, dPaymt, intRate, loanTerm);
	}
}