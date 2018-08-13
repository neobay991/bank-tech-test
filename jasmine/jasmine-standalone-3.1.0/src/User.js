'use strict';

function User(){
  this._account = new Account;
}

User.prototype.depositMoney = function(amount) {
  this._account.deposit(amount);
}

User.prototype.getBalance = function(amount) {
  return this._account.balance();
}
