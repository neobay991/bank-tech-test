'use strict';

describe("Unit Test: ", function () {
  var account;

  beforeEach(function(){
    account = new Account();
  });

  describe('Account', function(){
    it('An Account contains an empty default Customer balance', function() {
      expect(account._customerBalance).toEqual([0]);
    });

    it('A User can deposit money into their account', function() {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });

    it('A deposit has a timestamp', function() {
      account.deposit(10);
      account._customerdepositTimeStamp.push("14/01/2012")
      expect(account.depositTimeStamp()).toEqual("14/01/2012");
    });
  });

});
