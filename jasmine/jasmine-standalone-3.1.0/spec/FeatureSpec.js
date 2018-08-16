'use strict';

describe("Feature Test: ", function() {
  var account;
  var accountStatement;
  var timerCallback;

  beforeEach(function(){
    accountStatement = new AccountStatement();
    account = new Account(accountStatement);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  describe('Deposit money into account', function() {
    it('A User can deposit money into their account', function() {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });
  });

  describe('Withdraw money from account', function() {
    it('A User can withdraw money from their account', function() {
      account.deposit(2000);
      account.withdraw(500);
      expect(account.balance()).toEqual(1500);
    });

    it('A User cannot withdraw more money than their balance', function() {
      account.withdraw(500);
      expect(account.balance()).toEqual(0);
    });
  });

  describe('View Account statement', function() {
    it('A User can view an account statement of their account', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50);
      accountStatement._customerStatement = [];
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(account.printStatement()).toContain("date || credit || debit || balance \n 13/8/2018 || 0 || -500 || 2500\n,13/8/2018 || 2000 || 0 || 3000\n,13/8/2018 || 1000 || 0 || 1000");
    });
  });

});
