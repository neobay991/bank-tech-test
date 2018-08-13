'use strict';

describe("Feature Test: ", function() {
  var user;
  var account;

  beforeEach(function(){
    user = new User();
    account = new Account();
  });

  describe('Deposit money into account', function() {
    it('A User can deposit money into their account', function() {
      user.depositMoney(10);
      expect(user.getBalance()).toEqual(10);
    });
  });

});
