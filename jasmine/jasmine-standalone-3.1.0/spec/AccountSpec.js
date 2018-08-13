'use strict';

describe("Unit Test: ", function () {
  var account;

  beforeEach(function(){
    account = new Account();
  });

  describe('Account', function(){
    it('An Account contains an empty default Customer balance', function() {
      expect(account._customerBalance).toEqual([0]);
    });

    it('A User can deposit money into their account', function() {
      account.deposit(1000);
      expect(account.balance()).toEqual(1000);
    });

    it('A deposit has a timestamp', function() {
      account.deposit(1000);
      expect(account.balanceTimeStamp().length).toEqual(2);
    });

    it('A withdrawal has a timestamp', function() {
      account.deposit(1000);
      account.withdraw(500);
      expect(account.balanceTimeStamp().length).toEqual(3);
    });
  });

});
