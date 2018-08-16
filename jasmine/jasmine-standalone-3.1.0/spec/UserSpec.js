'use strict';

describe("Unit Test: ", function () {
  var user;
  var account;
  var timerCallback;

  beforeEach(function(){
    account = jasmine.createSpyObj('account', ['deposit', 'withdraw', 'timeStamp', 'balance', 'balanceTimeStamp', 'updateBalance', 'statement', 'printStatement']);
    user = new User(account);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  describe('User', function(){
    beforeEach(function(){
      account.deposit.and.returnValue(2000);
      account.withdraw.and.returnValue(1000);
      account.balance.and.returnValue(2000);
      account.printStatement.and.returnValue('date || credit / debit || balance 13/8/2018 -1000 1000,13/8/2018 2000 2000')
      account._customerBalance = [0];
    });

    it('#initialize', function() {
      expect(user._account._customerBalance).toEqual([0]);
    });

    it('#depositMoney', function() {
      user.depositMoney(2000);
      expect(user.getBalance()).toEqual(2000);
    });

    it('#withdrawMoney', function() {
      user.depositMoney(3000);
      user.withdrawMoney(-1000);
      expect(user.getBalance()).toEqual(2000);
    });

    it('getAccountStatement', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50000);
      user.depositMoney(2000);
      user.withdrawMoney(-1000);
      expect(user.getAccountStatement()).toEqual('date || credit / debit || balance 13/8/2018 -1000 1000,13/8/2018 2000 2000');
    });
  });

});
