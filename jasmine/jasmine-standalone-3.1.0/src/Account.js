'use strict';

function Account(accountStatement) {
  this.entry = {
    date: " ",
    deposit: " ",
    withdrawl: " ",
    balance: 0
  }
  this._accountStatement = accountStatement;
  this._customerDeposit = [0];
  this._customerDepositTimeStamp = [Date.now()];
  this._customerBalanceTemp = 0;
  this._customerBalance = [0];
  this._customerStatement = [];
  this.temp1 = [];
  this.total = [];
}

Account.prototype.deposit = function(amount) {
  this.updateBalance(amount);
  this.entry.date = this.timeStamp();
  this.entry.deposit = amount;
  this.entry.withdrawl = 0;
  this.entry.balance = this.balance(amount);
  // this._customerDeposit.push(amount);
  // this.timeStamp();
  // this._customerDeposit.push(amount);
  // this.updateBalance(amount);
  this.temp1.push(this.entry);
  this.entry = {
    date: " ",
    deposit: " ",
    withdrawl: " ",
    balance: 0
  }
}

Account.prototype.updateBalance = function(amount) {
  return this.total.push(amount);
}

Account.prototype.balance = function() {
  var balance = 0;
  balance = this.total.reduce((a, b) => a + b, 0);
  return balance;
}

Account.prototype.withdraw = function(amount) {
  this.updateBalance(amount);
  this.entry.date = this.timeStamp();
  this.entry.deposit = 0;
  this.entry.withdrawl = amount;
  this.entry.balance = this.balance(amount);
  // this._customerDeposit.push(amount);
  // this.timeStamp();
  // this._customerDeposit.push(amount);
  // this.updateBalance(amount);
  this.temp1.push(this.entry);
  this.entry = {
    date: " ",
    deposit: " ",
    withdrawl: " ",
    balance: 0
  }
}

Account.prototype.timeStamp = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  today = dd+'/'+mm+'/'+yyyy;
  var timestamp;
  return timestamp = today;
  // this._customerDepositTimeStamp.push(timestamp);
}

// Account.prototype.balance = function() {
//   var counter = 0,
//   balance = 0;
//
//   for (counter = this._customerDeposit.length; counter--;) {
//     balance += this._customerDeposit[counter];
//   }
//   return balance;
// }

// Account.prototype.balanceTimeStamp = function() {
//   return this._customerDepositTimeStamp;
// }

// Account.prototype.updateBalance = function(amount) {
//   this._customerBalanceTemp += amount;
//   return this._customerBalance.push(this._customerBalanceTemp);
// }

Account.prototype.statement = function() {
  var entry;

  for (var i = 0; i < this.temp1.length; ++i) {
    entry = this.temp1[i];

    this._customerStatement.push(entry);
  }
}

Account.prototype.printStatement = function() {
  this.statement();
  return this._customerStatement;
}
