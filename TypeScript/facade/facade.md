# Facade

## Intent
- Provide a unified interface to a set of interfaces in a subsystem.
  Facade defines a higher-level interface that makes the subsystem
  easier to use.
- Wrap a complicated subsystem with a simpler interface.
- Facade provides a simplified interface to a large body of code.

## UML
<img src="http://yuml.me/diagram/plain/class/[Facade|+operation()],[Facade]->[Class3],[Facade]->[Class2],[Facade]->[Class1]">
<!--
[Facade|+operation()],
[Facade]->[Class3],
[Facade]->[Class2],
[Facade]->[Class1],
-->

## Type
- Structural

## Note
- usually wrap multiple objects
- improve readability and usability of complex components
- may perform additional functionality before/after forwarding a request
- consider carefully the value of the facade

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Facade_pattern
- https://sourcemaking.com/design_patterns/facade
