# Flyweight

## Intent
- Use sharing to support large numbers of fine-grained objects
  efficiently.
- Flyweight reduces the cost of creating and manipulating a large number
  of similar objects.

## UML
<img src="http://yuml.me/diagram/plain/class/[FlyweightFactory|-cache;+create(key): Flyweight],[FlyweightFactory]->[Flyweight|+operation()]">
<!--
[FlyweightFactory|-cache;+create(key): Flyweight],
[FlyweightFactory]->[Flyweight|+operation()],
-->

## Type
- Structural

## Note
- avoid creating large numbers of objects
- may cache objects storing intrinsic state
- share intrinsic state
- do operations using extrinsic state
- care concurrency issues on creating shared objects
- consider immutability and equality
- consider managing actual construction in factory

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Flyweight_pattern
- https://sourcemaking.com/design_patterns/flyweight
