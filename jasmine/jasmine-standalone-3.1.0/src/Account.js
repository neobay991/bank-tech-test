'use strict';

function Account() {
  this._customerBalance = [0];
}

Account.prototype.deposit = function(amount) {
  this._customerBalance.push(amount);
}

Account.prototype.balance = function() {
  var counter = 0,
  balance = 0;

  for (counter = this._customerBalance.length; counter--;) {
    balance += this._customerBalance[counter];
  }
  return balance;
}
