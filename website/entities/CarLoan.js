class CarLoan {
	calc(carPrice, dPaymt, intRate, loanTerm) {
		let toPay = (carPrice - dPaymt);
		let interest = toPay * intRate;

		return (toPay + interest) / loanTerm;
	}
}