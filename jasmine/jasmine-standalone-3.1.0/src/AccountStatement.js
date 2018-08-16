'use strict';

function AccountStatement() {
  this._customerStatement = [];
}

AccountStatement.prototype.createStatement = function(transactions) {
  var entry;

  for (var i = 0; i < transactions.length; ++i) {
    entry = transactions[i].date + " || " + transactions[i].deposit + " || " + transactions[i].withdrawal + " || " + transactions[i].balance + "\n";

    this._customerStatement.push(entry);
  }

}

AccountStatement.prototype.printStatement = function() {
  return "date || credit || debit || balance \n " + this._customerStatement.reverse();
}
