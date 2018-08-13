'use strict';

function Account() {
  this._customerBalance = [0];
  this._customerdepositTimeStamp = [Date.now()];
}

Account.prototype.deposit = function(amount) {
  var timestamp = Date.now();

  this._customerBalance.push(amount);
  this._customerdepositTimeStamp.push(timestamp);
}

Account.prototype.balance = function() {
  var counter = 0,
  balance = 0;

  for (counter = this._customerBalance.length; counter--;) {
    balance += this._customerBalance[counter];
  }
  return balance;
}

Account.prototype.depositTimeStamp = function() {
  return this._customerdepositTimeStamp;
}
