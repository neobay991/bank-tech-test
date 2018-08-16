'use strict';

describe("Unit Test: ", function () {
  var accountStatement;

  beforeEach(function(){
    accountStatement = new AccountStatement();
  });

  describe('AccountStatement', function(){
    describe('#printStatement', function(){
      it('Returns a printed account statement', function() {
        accountStatement._customerStatement.push("13/8/2018 || 500.00 || || 500.00");
        expect(accountStatement.printStatement()).toEqual("date || credit || debit || balance \n 13/8/2018 || 500.00 || || 500.00");
      });
    });

    describe('#createStatement', function(){
      it('Creates a printed statement', function() {
        accountStatement.createStatement([{date: "13/8/2018", deposit: 1000, withdrawal: 0 , balance:1000}]);
        expect(accountStatement._customerStatement).toEqual(['13/8/2018 || 1000 || 0 || 1000\n' ]);
      });
    });
  });
});
