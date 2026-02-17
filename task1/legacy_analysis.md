## Legacy patterns found:
Users var instead of let/const. The code uses var, which is old syntax. Modern JS uses let and const.
Global variables (taxRate, currency). taxRate and currency are global. It is unsafe and not organized.
Constructor functions instead of classes. The code uses functions instead of class. Classes are cleaner.
Prototype methods instead of class methods. Methods are added with .prototype. Modern JS puts methods inside class.
No moduled(everything in global scope) All code is in one file. There is no import or export.
String concatenation instead of template literals. Uses "Total: " + value. Modern JS uses template literals.