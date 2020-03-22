# Chain of Responsibility

## Intent
- Avoid coupling the sender of a request to its receiver by giving more
  than one object a chance to handle the request. Chain the receiving
  objects and pass the request along the chain until an object handles
  it.
- Launch-and-leave requests with a single processing pipeline that
  contains many possible handlers.
- Chain of responsibility delegates commands to a chain of processing
  objects.

## UML
<img src="http://yuml.me/diagram/plain/class/[IHandler|-successor;+operation()],[IHandler]<>->[IHandler],[IHandler]^-.-[Handler1],[IHandler]^-.-[Handler2]">
<!--
[IHandler|-successor;+operation()],
[IHandler]<>->[IHandler],
[IHandler]^-.-[Handler1],
[IHandler]^-.-[Handler2],
-->

## Type
- Behavioral

## Note
- SOLID-S
- the chain can be created dynamically
- client should not know the exact handler
- request may be handled by multiple handlers
- may be used in conjuction with composite pattern
- consider the safety net in the chain

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern
- https://sourcemaking.com/design_patterns/chain_of_responsibility
