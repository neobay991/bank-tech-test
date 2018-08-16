'use strict';

function AccountStatement() {
  this._customerStatement = [];
}

AccountStatement.prototype.printStatement = function() {
  return this._customerStatement.reverse();
}
