##  Pattern Name
Factory-Based user manager pattern

## Description
This pattern is used to create user manager objects that handlr user data in a clean and organized way.
Each user manager has its own data and methods, so the data is not shared by mistake. The pattern helps avoid global variables and makes the code easier to understand and reuse.

## Context Outline
This pattern is useful when, user data needs to be managed in structured way, more than one user manager is needed in the same app. Data shouldn't be accessed or changes directly. Also when The same logic needs to be reused in different places. It's often used in small apps or medium, students projects.

##  Problem Statement
In Js, user data is sometimes stored in global variables. This can cause problems like data conflicts, duplicated code, and bugs. If the app needs multiple user managers, using shared global data can lead to unexpected behavior and makes the code hard to maintain.

## Solution
The solution is to use a factory function that creates user manager objects.
The factory function:
Keeps user data private using closure.
Returns an object with public methods
Controls how the data can be accessed or changed
Allows creating multiple independent user managers
Each created manager has its own private user list.

## Design
The design of this pattern has: a factory function create objects, a private users array inside the function, Public methods to work with the data. Only the returned methods can interact with the user data, which keeos if safe and organized.

## Implementation
To implement this pattern we need to create a factory function then define private variables inside it, return an object with methods like add and find. Use the returned object to manage users. This helps separate concerns and improves code structure.

## Example
My example with JavaScript (ES6+ syntax) is in pattern_example.js file.

## Consequences
Benefits:
User data is private and protected, no global variables are needed, code is cleaner and easier to read, logic can be in different parts of the app.

Trade-offs:
Slightly more complex than using a simple object, private data cannot be accessed directly, not ideal for very large shared data systems.

The pattern follows the ideas described in Chapter 3 about the structure of design patterns and reusable solutions.