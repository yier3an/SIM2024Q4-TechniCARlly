function calculateLoan(price, downPayment, interestRate, term) {
    const loanAmount = price - downPayment;
    const monthlyInterestRate = interestRate / 12 / 100;
    const numPayments = term * 12;
    return (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
  }
  
  export { calculateLoan };
  