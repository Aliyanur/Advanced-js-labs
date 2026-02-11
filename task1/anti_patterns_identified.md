## Code Analysis and Anti-Pattern Identification
I analyzed the legacy JavaScript code from appendix file.
The code contain many problems described in Chapter 4 'Anti-Patterns'.

## 1 Global namespace pollution
In appendix file, the code place: many global variables like userName, userEmail, isLoggedIn, dataCache.
Why it is anti-pattern? Chapter 4 say that global variables pollute namespace and can create conflicts.
The problem is any function can change the data. Hard to track bugs.
The impact of code is maintainability is very low and scalability is bad.

## 2 Code duplication
In appendix file, the code place: validateEmail, validateUserEmail, checkEmailFormat, also many formatPrice functions. 
Why it is anti-pattern? Same logic written many times break DRY principle.
The problem is if loogic change, need change many places.
The main impact is hard to maintain and increase errors.

## 3 Tight coupling between functions
The code section: setUserName, setUserEmail, updateDisplay, saveToCache.
Why it is anti-pattern? Functions depend on global variables and each other.
Problems: Functions cannot work alone and hard to test.
Impact: Bad for team work and scaling.

## 4 Inappropriate use of eval() (via setTimeout/setInterval with strings)
The code section: setTimeout (" updateTimer ()", 1000) ;
Why it is anti-pattern? In Chapter 4 explain that string in setTimeout use eval.
Problems: Security risk and bad performance.
Impact: App is unsafe and slow.

## 5 Modifying Object.prototype
The code section: Object.prototype.formatCurrency
Why it is an anti-pattern: It affect all objects and can break code
The problems it causes: Unexpected behavior in whole app.
Impact on maintainability and scalability: Critical for maintainability.
