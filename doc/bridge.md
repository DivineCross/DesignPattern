# Bridge

## Intent
- Decouple an abstraction from its implementation so that the two can
  vary independently.
- Publish interface in an inheritance hierarchy, and bury implementation
  in its own inheritance hierarchy.

## UML
<img src="http://yuml.me/diagram/plain/class/[IAbstraction]^-.-[Abstraction1],[IAbstraction]^-.-[Abstraction2],[IImplementor]^-.-[Implementor1],[IImplementor]^-.-[Implementor2],[IAbstraction|-implementor;+operation()],[IImplementor|+implementation()],[IAbstraction]+->[IImplementor]">
<!--
[IAbstraction]^-.-[Abstraction1],
[IAbstraction]^-.-[Abstraction2],
[IImplementor]^-.-[Implementor1],
[IImplementor]^-.-[Implementor2],
[IAbstraction|-implementor;+operation()],
[IImplementor|+implementation()],
[IAbstraction]+->[IImplementor],
-->

## Type
- Structural

## Note
- encapsulation, aggregation, inheritance
- consider Cartesian Product
- pair abstraction and implementation
- share abstractions, share implementors
- may be suitable for bridging different views and content types
- consider carefully about interface segregation

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Bridge_pattern
- https://sourcemaking.com/design_patterns/bridge
