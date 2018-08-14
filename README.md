# bank-tech-test
==================

What is working:
-------
All of the following features listed below have been implemented.

Features implemented
-------
```
As a User,
I would like to be able to Deposit money into my account
So I can keep it somewhere safe

As a User,
I would like to be able to Withdraw money from my account
So I can spend it on something I like

As a User,
I would like to be able to see an Account statement from my account
So I know how much money I have

```

Features not implemented
-------
```
* Printing the account statement can be extracted into its own Class
* Withdrawal of money must take a negative number
* Customer deposits and withdrawals are stored in the same array, in the future it may be worth separating these
* Consider allowing customer deposits and withdrawals to take a date argument (currently the date is taken at the time of the deposit and/or withdrawal)
* Prevent the customer to withdraw more money than their balance
* Create a front end for the app

```

Tech stack
-------
* Full JavaScript vanilla app
* Jasmine framework used for running unit and feature tests


Instructions to Start
-------
* Clone the repo
* Open Terminal and type in 'open jasmine/jasmine-standalone-3.1.0/SpecRunner.html'
* You can now run the tests and also use the same window's browser's console to interact with the app

Browser console commands:
* user = new User(account = new Account); - to create a new User object that also initializes an Account object
* user.depositMoney(amount); - deposit money e.g. user.depositMoney(1000.00);
* user.withdrawMoney(-amount); - withdraw money e.g. user.withdrawMoney(-500.00);
* user.getBalance(); - get account balance
* user.getAccountStatement(); - get account statement e.g. output "date || credit / debit || balance 14/8/2018 -500 2500,14/8/2018 2000 3000,14/8/2018 1000 1000"
