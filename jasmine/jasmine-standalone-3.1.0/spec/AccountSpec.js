'use strict';

describe("Unit Test: ", function () {
  var account;
  var timerCallback;
  var accountStatement;

  beforeEach(function(){
    accountStatement = jasmine.createSpy('accountStatement');
    account = new Account(accountStatement);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  describe('Account', function(){
    it('#initialize', function() {
      expect(account.entry.date).toEqual(" ");
      expect(account.entry.deposit).toEqual(" ");
      expect(account.entry.withdrawal).toEqual(" ");
      expect(account.entry.balance).toEqual(0);
    });

    it('#deposit', function() {
      account.deposit(1000);
      expect(account.balance()).toEqual(1000);
    });

    it('#withdrawal', function() {
      account._customerBalance.push(1000);
      account.withdraw(-500);
      expect(account.balance()).toEqual(500);
    });

    it('#withdrawal error', function() {
      account.withdraw(500);
      expect(account.withdraw()).toEqual("You do not have enough funds in your account");
    });

    it('#updateBalance', function() {
      account.updateBalance(1000)
      expect(account._customerBalance).toEqual([1000]);
    });

    it('#balance', function() {
      account.updateBalance(1000)
      expect(account.balance()).toEqual(1000);
    });

    it('#timestamp', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50000);
      expect(account.timeStamp()).toEqual('13/8/2018');
    });

    it('#printStatement', function() {
      accountStatement._customerStatement = [];
      account._accountStatement._customerStatement.push("{ date: '13/8/2018', deposit: 30, withdrawal: 0, balance: 30 }")
      expect(account.printStatement()).toEqual(account._accountStatement._customerStatement);
    });

  });

});
