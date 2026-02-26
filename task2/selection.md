## Pattern Selection

## SCENARIO_01
Problem Summary:
Many modules need same configuration, but values are duplicated in many files.
Pattern Family: Creational
Pattern: Singleton
Why This Family:
Chapter 6 say creational patterns control object creation. Here we must have only one config object.
Why This Pattern:
Singleton ensure only one instance exist and all modules use same object.
Alternative Considered:
Factory is less good because it can create many instances, not one.

## SCENARIO_02
Problem Summary:
New chechout code cannot work with old bank gateway interface.
Pattern Family: Structural
Pattern: Adapter
Why This Family:
Structural patterns connect objects with different structure.
Why This Pattern:
Adapter translate modern call to legacy gateway methos
Alternative Considered:
Facadee hide complexity, but here problem is incompatible interface.

## SCENARIO_03
Problem Summary:
Many UI components must react when homework is submitted.
Pattern Family: Behavioral
Pattern: Observer
Why This Family:
Behavioral patterns focus on communication between objects.
Why This Pattern:
Observer allow many subscribers without changing sender.
Alternative Considered:
Mediator is less clear here because we only need notifications

## SCENARIO_04
Problem Summary:
Reports have same build steps but different output formats.
Pattern Family: Creational
Pattern: Builder
Why This Family:
Creational patterns manage object construction.
Why This Pattern:
Builder separate construction from representation.
Alternative Considered:
Factory create objects, but does not manage step-by-step building.

## SCENARIO_05
Problem Summary:
User actions must support undo and redo.
Pattern Family: Behavioral
Pattern: Command
Why This Family:
Behavioral patterns manage actions as objects and support undo.
Why This Pattern:
Command store actions and support undo
Alternative Considered:
Strategy choose algorithm, but not good fro undo history.

## SCENARIO_06
Problem Summary:
Too many similar particles use a lot of memory.
Pattern Family: Structural
Pattern: Flyweight
Why This Family:
Stuctural patterns organize object composition and sharing.
Why This Pattern:
Flyweight sare intrinsic state to save memory.
Alternative Considered:
Prototype still create many objects, memory not reduced enough.