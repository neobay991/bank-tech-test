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
* user = new User === to create a new User object
* user.deposit(amount) === deposit money e.g. user.deposit(1000)
* user.withdraw(-amount) === withdraw money e.g. user.withdraw(-500)
* user.getBalance === get account balance
* user.getAccountStatement == get account statement
