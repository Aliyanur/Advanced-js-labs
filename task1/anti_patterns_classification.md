## Global namespace pollution
Type: Bad Solution
Unfavorable situation: variablea overwrite each other.
How to Fix: Use Namespace Pattern(Ch.11)

##  Code duplication
Type: Bad solution
Unfavorable situation: same code everywhere.
How to Fix: Use Module Pattern(Ch.7) and reuse functions.

## Tight coupling 
Type: Bad solution
Unfavorable situation: Change one function break others.
How to Fix: Use Module Pattern(Ch.7) for encapsulation.

## setTimeout setInterval with strings
Type: Bad solution
Unfavorable situation: Security and performance issues.
How to Fix: Pass function reference, not string.

## Inline JavaScript or other anti-patterns
Type: Bad solution
Unfavorable situation: Break other code and libraries.
How to Fix: Create utility functions inside modules.
