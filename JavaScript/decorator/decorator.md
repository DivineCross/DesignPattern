# Decorator

## Intent
- Attach additional responsibilities to an object dynamically.
  Decorators provide a flexible alternative to subclassing for extending
  functionality.
- Client-specified embellishment of a core object by recursively
  wrapping it.
- Decorator dynamically adds/overrides behaviour in an existing method
  of an object.

## UML
<img src="http://yuml.me/diagram/plain/class/[IComponent|+operation()],[Decorator|-component],[IComponent]^-.-[Decorator],[Decorator]+->[IComponent],[Decorator]^[Decorator2],[Decorator]^[Decorator1],[IComponent]^-.-[Component1]">
<!--
[IComponent|+operation()],
[Decorator|-component],
[IComponent]^-.-[Decorator],
[Decorator]+->[IComponent],
[Decorator]^[Decorator2],
[Decorator]^[Decorator1],
[IComponent]^-.-[Component1],
-->

## Type
- Structural

## Note
- SOLID-S
- object wrapper
- each decorator should focus on only one functionality
- separate component and decorator to reduce references in component
- share forwardings in 'abstract decorator' for uninterested methods
- the differences between decorators should not be insignificant

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Decorator_pattern
- https://sourcemaking.com/design_patterns/decorator
