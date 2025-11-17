class BankAccount {
 constructor (cash) {
  this.cash = cash
 }

  getBalance() {
    return  this.cash;
  }
  deposit(value) {
    this.cash += value;
    return this.cash;
  }
  withdraw(value) {
    this.cash -= value;
    return this.cash;
  }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());