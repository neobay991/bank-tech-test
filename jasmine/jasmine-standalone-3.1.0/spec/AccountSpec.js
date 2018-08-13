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
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });
  });

});
