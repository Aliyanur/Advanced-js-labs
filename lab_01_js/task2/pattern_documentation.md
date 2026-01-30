PAttern Selection Rationale 

The pattern selected for this documentation is the Factory Function (Simple Factory)
identified in Lab 1.1, specifically in the Second Implementation.

This pattern was chosen because it demonstrates a reusable way to create multiple
independent user manager instances without using classes, while maintaining
encapsulation through JavaScript closures. Although it does not fully satisfy
the Rule of Three, it represents a clear proto-pattern that appears repeatedly in different implementations with similar structure.

Context
This pattern is used when we need to create multiple objects that have the same behavior but keep their own separate data. It is useful in JavaScript when we want to avaoid classes and hide internal data.
A developer would use this pattern to create independent managers or services.
Each instance should work seperately and not affect others.

Problem
In JS, we often need reusable objects that manage data. If internal data is expired, it can be changed accidentally.
How csan we create multiple user manager instances without using classes and without exposing internal data like arrays?
This problem is important because exposed data makes code unsafe and hard to maintain.

Solution
The solution is to use a factory function
The function creates a private scope using closures and returns an object with public methods.
Key elements:
A factory function, Privatr data inside the function, Public methods to work with the data.
Each time function is called, a new independent objeect is created. 

Example
A working example of this pattern is shown in 'example.js'
It demonstrates how multiple user managers can be created using the same factory function.

Consequences (benefits and drawbacks)
Benefits:
Data is private and protected, No need to use classes, each instance has its own state, simple and easy to understand

Drawbacks:
Uses more memory if many instances are created, methods are duplicated for each instance.

When to use
Small or medium JS projects. When u need independent objects> When encapsulation is important.

WHen to avoid
when many objects share the same behavior, when inheritance required