// Definirea claselor BankAccount, SavingsAccount și CheckingAccount
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawn ${amount}. Current balance: ${this.balance}`);
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    super.withdraw(amount);
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, transactionLimit) {
    super(accountNumber, balance);
    this.transactionLimit = transactionLimit;
  }

  withdraw(amount) {
    if (amount > this.transactionLimit) {
      console.log("Transaction limit exceeded");
      return;
    }

    super.withdraw(amount);
  }
}

// Funcții pentru interacțiunea cu elementele HTML
function updateSavingsBalance(balance) {
  document.getElementById("savingsBalance").textContent = balance;
}

function updateCheckingBalance(balance) {
  document.getElementById("checkingBalance").textContent = balance;
}

// Instantierea conturilor bancare
const savingsAccount = new SavingsAccount("SA-123456", 1000, 0.05);
const checkingAccount = new CheckingAccount("CA-789012", 2000, 1000);

// Funcții pentru manipularea conturilor bancare prin interacțiunea cu butoanele HTML
function savingsDeposit() {
  const amount = parseFloat(document.getElementById("savingsAmount").value);
  if (!isNaN(amount)) {
    savingsAccount.deposit(amount);
    updateSavingsBalance(savingsAccount.getBalance());
    document.getElementById("savingsAmount").value = "";
    document.getElementById("savingsError").textContent = "";
  } else {
    document.getElementById("savingsError").textContent = "Invalid amount";
  }
}

function savingsWithdraw() {
  const amount = parseFloat(document.getElementById("savingsAmount").value);
  if (!isNaN(amount)) {
    savingsAccount.withdraw(amount);
    updateSavingsBalance(savingsAccount.getBalance());
    document.getElementById("savingsAmount").value = "";
    document.getElementById("savingsError").textContent = "";
  } else {
    document.getElementById("savingsError").textContent = "Invalid amount";
  }
}

function checkingDeposit() {
  const amount = parseFloat(document.getElementById("checkingAmount").value);
  if (!isNaN(amount)) {
    checkingAccount.deposit(amount);
    updateCheckingBalance(checkingAccount.getBalance());
    document.getElementById("checkingAmount").value = "";
    document.getElementById("checkingError").textContent = "";
  } else {
    document.getElementById("checkingError").textContent = "Invalid amount";
  }
}

function checkingWithdraw() {
  const amount = parseFloat(document.getElementById("checkingAmount").value);
  if (!isNaN(amount)) {
    checkingAccount.withdraw(amount);
    updateCheckingBalance(checkingAccount.getBalance());
    document.getElementById("checkingAmount").value = "";
    document.getElementById("checkingError").textContent = "";
  } else {
    document.getElementById("checkingError").textContent = "Invalid amount";
  }
}

// Inițializarea afișării balanțelor inițiale
document.getElementById("savingsAccountNumber").textContent = savingsAccount.accountNumber;
document.getElementById("interestRate").textContent = savingsAccount.interestRate;
updateSavingsBalance(savingsAccount.getBalance());

document.getElementById("checkingAccountNumber").textContent = checkingAccount.accountNumber;
document.getElementById("transactionLimit").textContent = checkingAccount.transactionLimit;
updateCheckingBalance(checkingAccount.getBalance());
