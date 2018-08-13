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
      expect(user.getAccountStatment()).toContain("date || credit || debit || balance Mon Aug 13 2018 17:30:47 GMT+0100 (British Summer Time)|| 1000|| 1000 ");
    });
  });

});
