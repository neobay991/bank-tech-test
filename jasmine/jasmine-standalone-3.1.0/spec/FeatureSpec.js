'use strict';

describe("Feature Test: ", function() {
  var user;
  var account;
  var timerCallback;

  beforeEach(function(){
    user = new User(account = new Account);
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
      user.withdrawMoney(-500);
      expect(user.getBalance()).toEqual(1500);
    });
  });

  describe('View Account statement', function() {
    it('A User can view an account statement of their account', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50);
      user.depositMoney(1000);
      user.depositMoney(2000);
      user.withdrawMoney(-500);
      expect(user.getAccountStatement()).toContain('date: '13/8/2018', deposit: 1000, withdrawl: 0, balance: 1000 }), Object({ date: '13/8/2018', deposit: 2000, withdrawl: 0, balance: 3000 }), Object({ date: '13/8/2018', deposit: 0, withdrawl: -500, balance: 2500');
    });
  });

});
