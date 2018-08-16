'use strict';

function AccountStatement() {
  this._customerStatement = ["date || credit || debit || balance "];
}

AccountStatement.prototype.printStatement = function() {
  return this._customerStatement.reverse();
}
