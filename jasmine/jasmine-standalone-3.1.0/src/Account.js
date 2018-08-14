'use strict';

function Account() {
  this._customerDeposit = [0];
  this._customerDepositWithdrawalTimeStamp = [Date.now()];
  this._customerBalanceTemp = 0;
  this._customerBalance = [0];
}

Account.prototype.deposit = function(amount) {
  this.timeStamp();
  this._customerDeposit.push(amount);
  this.updateBalance(amount);
}

Account.prototype.withdraw = function(amount) {
  this.timeStamp();
  this._customerDeposit.push(amount);
  this.updateBalance(amount);
}

Account.prototype.timeStamp = function() {
  var timestamp = new Date();
  this._customerDepositWithdrawalTimeStamp.push(timestamp);
}

Account.prototype.balance = function() {
  var counter = 0,
  balance = 0;

  for (counter = this._customerDeposit.length; counter--;) {
    balance += this._customerDeposit[counter];
  }
  return balance;
}

Account.prototype.balanceTimeStamp = function() {
  return this._customerDepositWithdrawalTimeStamp;
}

Account.prototype.updateBalance = function(amount) {
  this._customerBalanceTemp += amount;
  return this._customerBalance.push(this._customerBalanceTemp);
}

Account.prototype.statement = function() {
  var output = "date || credit / debit || balance",
   entry;

  console.log(output);
  for (var i = 1; i < this._customerDepositWithdrawalTimeStamp.length; ++i) {
    entry = (this._customerDepositWithdrawalTimeStamp[i] + " " + this._customerDeposit[i] + " " + this._customerBalance[i])
     // Remove this comment to print to console
     console.log(entry);
  }
  return output + " " + entry;
}
