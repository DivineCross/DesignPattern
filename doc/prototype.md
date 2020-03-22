# Prototype

## Intent
- Specify the kinds of objects to create using a prototypical instance,
  and create new objects by copying this prototype.
- Co-opt one instance of a class for use as a breeder of all future
  instances.
- Prototype creates objects by cloning an existing object.

## UML
<img src="http://yuml.me/diagram/plain/class/[IPrototype|+clone()],[IPrototype]^-.-[Prototype1],[IPrototype]^-.-[Prototype2]">
<!--
[IPrototype|+clone()],
[IPrototype]^-.-[Prototype1],
[IPrototype]^-.-[Prototype2],
-->

## Type
- Creational

## Note
- may be used to support deep cloning
- may reduce the coupling of the concrete product class
- the 'new' operator is considered harmful

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Prototype_pattern
- https://sourcemaking.com/design_patterns/prototype
