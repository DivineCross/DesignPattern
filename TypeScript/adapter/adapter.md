# Adapter

## Intent
- Convert the interface of a class into another interface clients
  expect. Adapter lets classes work together that couldn't otherwise
  because of incompatible interfaces.
- Adapter allows classes with incompatible interfaces to work together
  by wrapping its own interface around that of an already existing
  class.

## UML
<img src="http://yuml.me/diagram/plain/class/[ITarget|+operation()],[ITarget]^-.-[Adapter|-adaptee],[Adapter]+->[Adaptee|+someOperation()]">
<!--
[ITarget|+operation()],
[ITarget]^-.-[Adapter|-adaptee],
[Adapter]+->[Adaptee|+someOperation()],
-->

## Type
- Structural

## Note
- object wrapper
- must support polymorphic behavior
- make existing classes work with others without modifying their code
- do not change behavior
- prefer composition over inheritance

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Adapter_pattern
- https://sourcemaking.com/design_patterns/adapter
