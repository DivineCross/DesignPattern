# Composite

## Intent
- Compose objects into tree structures to represent whole-part
  hierarchies. Composite lets clients treat individual objects and
  compositions of objects uniformly.
- Directories contain entries, each of which could be a directory.
- Composite composes zero-or-more similar objects so that they can be
  manipulated as one object.

## UML
<img src="http://yuml.me/diagram/plain/class/[IComponent|+opeartion()],[Composite]+->[IComponent],[IComponent]^-.-[Composite],[IComponent]^-.-[Leaf]">
<!--
[IComponent|+opeartion()],
[Composite]+->[IComponent],
[IComponent]^-.-[Composite],
[IComponent]^-.-[Leaf],
-->

## Type
- Structural

## Note
- 'Leaf' implement 'Component' directly
- 'Composite' forward operations to child components
- recursion structure
- clients can treat part and whole objects uniformly
- part-whole hierarchy as tree structure
- may be useful for structuring components in the web view page
- UML may be too simplified for real world

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Composite_pattern
- https://sourcemaking.com/design_patterns/composite
