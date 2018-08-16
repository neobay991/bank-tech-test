'use strict';

describe("Feature Test: ", function() {
  var user;
  var account;
  var accountStatement;
  var timerCallback;

  beforeEach(function(){
    accountStatement = new AccountStatement();
    account = new Account(accountStatement);
    user = new User(account);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
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
      user.withdrawMoney(500);
      expect(user.getBalance()).toEqual(1500);
    });

    it('A User cannot withdraw more money than their balance', function() {
      user.withdrawMoney(500);
      expect(user.getBalance()).toEqual(0);
    });
  });

  describe('View Account statement', function() {
    it('A User can view an account statement of their account', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50);
      accountStatement._customerStatement = [];
      user.depositMoney(1000);
      user.depositMoney(2000);
      user.withdrawMoney(500);
      expect(user.getAccountStatement()).toEqual(user._account._transaction);
    });
  });

  describe('View Account statement', function() {
    xit('A User can view an account statement of their account', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50);
      accountStatement._customerStatement = [];
      user.depositMoney(1000);
      user.depositMoney(2000);
      user.withdrawMoney(500);
      expect(user.getAccountStatement()).toBe("[ Object({ date: '13/8/2018', deposit: 0, withdrawal: 1000, balance: 1000 }), Object({ date: '13/8/2018', deposit: 0, withdrawal: 2000, balance: 3000 }), Object({ date: '13/8/2018', deposit: 0, withdrawal: -500, balance: 2500 }) ]");
    });
  });

});
