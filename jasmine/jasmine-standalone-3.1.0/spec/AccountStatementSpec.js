'use strict';

describe("Unit Test: ", function () {
  var accountStatement;

  beforeEach(function(){
    accountStatement = new AccountStatement();
  });

  describe('AccountStatement', function(){
    it('#printStatement', function() {
      accountStatement._customerStatement.push("{ date: '13/8/2018', deposit: 30, withdrawal: 0, balance: 30 }")
      expect(accountStatement.printStatement()).toEqual(accountStatement._customerStatement);
    });

  });

});
