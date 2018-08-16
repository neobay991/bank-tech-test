'use strict';

describe("Unit Test: ", function () {
  var account;
  var timerCallback;
  var accountStatement;

  beforeEach(function(){
    accountStatement = jasmine.createSpyObj('accountStatement', ['createStatement', 'printStatement']);
    // accountStatement = new AccountStatement();
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

  describe('#deposit', function(){
    it('Deposits money into account balance', function() {
      account.deposit(1000);
      expect(account.balance()).toEqual(1000);
    });
  });

  describe('#withdrawal', function(){
    it('Withdraws/ deducts money from account balance', function() {
      account._customerBalance = [1000];
      account.withdraw(500);
      expect(account.balance()).toEqual(500);
    });

    it('Does not deduct money from account balance if the withdrawl amount' +
    ' is higher than the balance', function() {
      account.withdraw(500);
      expect(account.withdraw()).toEqual("You do not have enough funds in" +
        " your account");
    });
  });

  describe('#updateBalance', function(){
    it('Updates the balance with a given amount', function() {
      account.updateBalance(1000)
      expect(account._customerBalance).toEqual([1000]);
    });
  });

  describe('#balance', function(){
    it('Returns the balance', function() {
      account.updateBalance(1000)
      expect(account.balance()).toEqual(1000);
    });
  });

  describe('#timestamp', function(){
    it('Returns a timestamp for a transaction', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50000);
      expect(account.timeStamp()).toEqual('13/8/2018');
    });
  });

  describe('#resetEntry', function(){
    it('Resets the hash values of transaction entry object', function() {
      account.deposit(1000);
      account.resetEntry();
      expect(account.entry.date).toEqual(" ");
      expect(account.entry.deposit).toEqual(" ");
      expect(account.entry.withdrawal).toEqual(" ");
      expect(account.entry.balance).toEqual(0);
    });
  });

  describe('#printStatement', function(){
    it('Returns a printed account statement', function() {
      accountStatement.createStatement.and.returnValue("13/8/2018 || 500.00 || || 500.00");
      accountStatement.printStatement.and.returnValue("date || credit || debit || balance \n 13/8/2018 || 500.00 || || 500.00");
      expect(account.printStatement()).toEqual("date || credit || debit || balance \n 13/8/2018 || 500.00 || || 500.00");
    });
  });

  });

});
