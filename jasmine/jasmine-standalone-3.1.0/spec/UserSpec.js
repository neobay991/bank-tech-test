'use strict';

describe("Unit Test: ", function () {
  var user;

  beforeEach(function(){
    user = new User();
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
  });

});
