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
* Consider allowing customer deposits and withdrawals to take a date argument (currently the date is taken at the time of the deposit and/or withdrawal)
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
* account = new Account(accountStatement = new AccountStatement);
 - to create a new Account object that also initializes an AccountStatement objects
* account.deposit(amount); - deposit money e.g. account.deposit(1000.00);
* account.withdraw(amount); - withdraw money e.g. account.withdraw(500.00);
* account.balance(); - get account balance
* account.printStatement(); - get account statement e.g. output:
"date || credit || debit || balance
 16/8/2018 ||  || 500 || 1500
,16/8/2018 || 1000 ||  || 2000
,16/8/2018 || 1000 ||  || 1000
