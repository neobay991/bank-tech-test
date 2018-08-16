'use strict';

function AccountStatement() {
  this._customerStatement = [];
}

AccountStatement.prototype.createStatement = function(entry) {
  return this._customerStatement.push(entry);
}


AccountStatement.prototype.printStatement = function() {
  return "date || credit || debit || balance \n " + this._customerStatement.reverse();
}
