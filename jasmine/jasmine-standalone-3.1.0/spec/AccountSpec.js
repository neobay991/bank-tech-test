'use strict';

describe("Unit Test: ", function () {
  var account;
  var timerCallback;

  beforeEach(function(){
    account = new Account();
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  describe('Account', function(){
    it('An Account contains an empty default Customer balance', function() {
      expect(account.entry.balance).toEqual(0);
    });

    it('A User can deposit money into their account', function() {
      account.deposit(1000);
      expect(account.balance()).toEqual(1000);
    });

    it('#timestamp', function() {
      var baseTime = new Date(2018, 7, 13);
      jasmine.clock().mockDate(baseTime);
      jasmine.clock().tick(50000);
      expect(account.timeStamp()).toEqual('13/8/2018');
    });

    it('A withdrawal has a timestamp', function() {
      account.deposit(1000);
      account.withdraw(-500);
      expect(account.balanceTimeStamp().length).toEqual(3);
    });
  });

});
