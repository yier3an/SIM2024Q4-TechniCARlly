class CarLoan {
	constructor(carPrice, dPaymt, intRate, loanTerm) {
		this.carPrice = carPrice;
		this.dPaymt = dPaymt;
		this.intRate = intRate;
		this.loanTerm = loanTerm;
	}

	calc() {
		let toPay = (this.carPrice - this.dPaymt);
		let interest = toPay * this.intRate;

		return (toPay + interest) / this.loanTerm;
	}
}