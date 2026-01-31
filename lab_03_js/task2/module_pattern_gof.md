# Module Pattern

## Pattern Name
Module Pattern


## Description
The Module Pattern is a JavaScript design pattern that helps organize code by separating it into independent parts. It allows hiding internal data and exposing only selected functions. This makes code more clean, safe, and easier to maintain.


## Context Outline
The Module Pattern is useful in following situations:
When many variables exist and global scope become messy
When logic should be separated into clear parts
When internal data should not be accessed directly
When building medium or large JavaScript applications
When working without ES6 module system


## Problem Statement
JavaScript originally does not support modules. All variables declared globally can conflict with each other. This causes problems like:
- Global namespace pollution
- Accidental overwrite of variables
- No clear separation between private and public code
- Hard to maintain and test large code bases

The Module Pattern solves these problems.

---

## Solution
The Module Pattern uses:
1. A function to create a private scope
2. Closures to keep data private
3. Returning an object with public methods

Steps:
1. Create a function (often IIFE)
2. Define private variables inside the function
3. Define public functions that access private data
4. Return an object with public members


## Design
The design of the Module Pattern includes:
- **Private members**: variables and functions inside the module
- **Public members**: functions returned in the object
- **Encapsulation**: private data cannot be accessed outside

Only the returned object is visible from outside.


Consequences

Benefits: encapsulation, no global pollution, clean API
Trade-offs: harder debug, ES6 modules are better now


Corequisites
Revealing Module Pattern
Singleton Pattern
Namespace Pattern


Relations

Related to Revealing Module and Namespace patterns.

Known Usage

Used in jQuery, Backbone.js, and older JavaScript libraries.


Discussions

Before ES6, this pattern was very important. Today ES6 modules are used, but the idea is still same.
