'use strict';

describe("Unit Test: ", function () {
  var user;
  var account;

  beforeEach(function(){
    user = new User();
    account = new Account();
  });

  describe('User', function(){
    it('A User has an account with a zero balance', function() {
      expect(user.account._customerBalance).toEqual(0);
    });
  });

});
