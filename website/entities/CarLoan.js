class CarLoan {
	calc(carPrice, dPaymt, intRate, loanTerm) {
		let toPay = (carPrice - dPaymt);
		let total = toPay * (Math.pow(1 + (intRate / 100.0)), loanTerm);

		return total;
	}
}