'use strict';

describe("Unit Test: ", function () {
  var user;
  var account;
  var timerCallback;

  beforeEach(function(){
    user = new User(account = new Account);
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  describe('User', function(){
    it('A User has an account with a zero balance', function() {
      expect(user._account._customerBalance).toEqual([0]);
    });

    it('A User has an account with a balance of 1000', function() {
      user.depositMoney(1000);
      expect(user.getBalance()).toEqual(1000);
    });

    it('A User has an account with a balance of 500', function() {
      user.depositMoney(1000);
      user.withdrawMoney(-500);
      expect(user.getBalance()).toEqual(500);
    });

    it('A User can get an account statement', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50);

      user.depositMoney(1000);
      user.withdrawMoney(-500);
      expect(user.getAccountStatement()).toBe("date || credit / debit || balance Mon Aug 13 2018 00:00:00 GMT+0100 (British Summer Time) -500 500");
    });
  });

});
