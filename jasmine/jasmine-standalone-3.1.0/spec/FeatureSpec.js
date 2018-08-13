'use strict';

describe("Feature Test: ", function() {
  var user;

  beforeEach(function(){
    user = new User();
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

  describe('View Account statement', function() {
    it('A User can view an account statement of their account', function() {
      user.depositMoney(1000);
      user.depositMoney(2000);
      user.withdrawMoney(-500);
      expect(user.getAccountStatment()).toEqual(2500);
      expect(user.getAccountStatment()).toContain("date || credit || debit || balance 14/01/2012 || || 500.00 || 2500.00 13/01/2012 || 2000.00 || || 3000.00 10/01/2012 || 1000.00 || || 1000.00");
    });
  });

});
