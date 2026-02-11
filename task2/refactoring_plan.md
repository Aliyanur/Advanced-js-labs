## Refactoring Plan
First I analyze legacy code and find same anti-patterns: global patterns, duplicated functions, no structue.

Plan:
Use Module Pattern(Ch.7) to encapsulate logic
Use Namespace Pattern(Ch.11) to organize modules
Remove all global variables.
