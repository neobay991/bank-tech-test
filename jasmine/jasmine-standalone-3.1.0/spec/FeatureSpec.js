'use strict';

describe("Feature Test: ", function() {
  var user;
  var account;

  beforeEach(function(){
    user = new User();
    account = new Account();
  });

  describe('Deposit money into account', function() {
    it('A User can deposit money into their account', function() {
      user.depositMoney(10);
      expect(user.getBalance()).toEqual(10);
    });
  });

  describe('Withdraw money from account', function() {
    it('A User can withdraw money from their account', function() {
      user.depositMoney(2000);
      user.withdrawMoney(-500);
      expect(user.getBalance()).toEqual(1500);
    });
  });

});
