'use strict';

function Account() {
  this._customerDeposit = [0];
  this._customerDepositWithdrawalTimeStamp = [Date.now()];
  this._customerBalanceTemp = 0;
  this._customerBalance = [0];
  this._customerStatement = ["date || credit / debit || balance"];
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

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var today = dd+'/'+mm+'/'+yyyy;

  var timestamp = today;
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
  var entry;

  for (var i = 1; i < this._customerDepositWithdrawalTimeStamp.length; ++i) {
    entry = (this._customerDepositWithdrawalTimeStamp[i] + " " + this._customerDeposit[i] + " " + this._customerBalance[i])
     this._customerStatement.push(entry);
  }
}

Account.prototype.printStatement = function() {
  this.statement();
  return this._customerStatement;
}
