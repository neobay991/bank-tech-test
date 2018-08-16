'use strict';

function Account(accountStatement) {
  this.entry = {
    date: " ",
    deposit: " ",
    withdrawal: " ",
    balance: 0
  }
  this._transaction = [];
  this._customerBalance = [];
  this._accountStatement = accountStatement;
}

Account.prototype.deposit = function(amount) {
  this.updateBalance(amount);
  this.entry = {
    date: this.timeStamp(),
    deposit: amount,
    withdrawal: "",
    balance: this.balance(amount)
  }
  this._transaction.push(this.entry);
  this.resetEntry();
}

Account.prototype.withdraw = function(amount) {
  if (amount < this.balance()) {
    var amount2 = Math.abs(amount) * -1.
    this.updateBalance(amount2);
    this.entry = {
      date: this.timeStamp(),
      deposit: "",
      withdrawal: amount,
      balance: this.balance(amount2)
    }
    this._transaction.push(this.entry);
    this.resetEntry();
  } else {
    return "You do not have enough funds in your account"
  }
}

Account.prototype.resetEntry = function(amount) {
  this.entry = {
    date: " ",
    deposit: " ",
    withdrawal: " ",
    balance: 0
  }
}

Account.prototype.updateBalance = function(amount) {
  return this._customerBalance.push(amount);
}

Account.prototype.balance = function() {
  var balance = 0;
  balance = this._customerBalance.reduce((a, b) => a + b, 0);
  return balance;
}

Account.prototype.timeStamp = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  today = dd+'/'+mm+'/'+yyyy;
  var timestamp;
  return timestamp = today;
}

Account.prototype.statement = function() {
  this._accountStatement.createStatement(this._transaction);
}

Account.prototype.printStatement = function() {
  this.statement();
  return this._accountStatement.printStatement();
}
