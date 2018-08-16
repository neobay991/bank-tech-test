'use strict';

describe("Unit Test: ", function () {
  var accountStatement;

  beforeEach(function(){
    accountStatement = new AccountStatement();
  });

  describe('AccountStatement', function(){
    it('#printStatement', function() {
      accountStatement._customerStatement.push("date || credit || debit || balance 13/8/2018 || 500.00 || || 500.00")
      expect(accountStatement.printStatement()).toEqual("date || credit || debit || balance \n date || credit || debit || balance 13/8/2018 || 500.00 || || 500.00");
    });

  });

});