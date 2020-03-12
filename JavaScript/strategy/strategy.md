# Strategy

## Intent
- Define a family of algorithms, encapsulate each one, and make them
  interchangeable. Strategy lets the algorithm vary independently from
  the clients that use it.
- Capture the abstraction in an interface, bury implementation details
  in derived classes.
- Strategy allows one of a family of algorithms to be selected
  on-the-fly at runtime.

## UML
<img src="http://yuml.me/diagram/plain/class/[Context|-strategy;operation()]+->[IStrategy|+algorithm()], [IStrategy]^-.-[Strategy1|+algorithm()], [IStrategy]^-.-[Strategy2|+algorithm()]">
<!--
    [Context|-strategy;operation()]+->[IStrategy|+algorithm()],
    [IStrategy]^-.-[Strategy1|+algorithm()],
    [IStrategy]^-.-[Strategy2|+algorithm()]
-->

## Type
- Behavioral

## Note
- SOLID-O
- composition over inheritance
- make it easier to share and change algorithms

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Strategy_pattern
- https://sourcemaking.com/design_patterns/strategy
