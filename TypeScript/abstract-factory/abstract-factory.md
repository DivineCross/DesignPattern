# Abstract Factory

## Intent
- Provide an interface for creating families of related or dependent
  objects without specifying their concrete classes.
- Abstract factory groups object factories that have a common theme.

## UML
<img src="http://yuml.me/diagram/plain/class/[IFactory|+createProductA(): IProductA; +createProductB(): IProductB],[IFactory]^-.-[Factory1],[IFactory]^-.-[Factory2],[IFactory]->[IProductA],[IFactory]->[IProductB],[IProductA]^-.-[ProductA1],[IProductA]^-.-[ProductA2],[IProductB]^-.-[ProductB1],[IProductB]^-.-[ProductB2],[Factory1]->[ProductA1],[Factory1]->[ProductB1],[Factory2]->[ProductA2],[Factory2]->[ProductB2]">
<!--
[IFactory|+createProductA(): IProductA; +createProductB(): IProductB],
[IFactory]^-.-[Factory1],
[IFactory]^-.-[Factory2],
[IFactory]->[IProductA],
[IFactory]->[IProductB],
[IProductA]^-.-[ProductA1],
[IProductA]^-.-[ProductA2],
[IProductB]^-.-[ProductB1],
[IProductB]^-.-[ProductB2],
[Factory1]->[ProductA1],
[Factory1]->[ProductB1],
[Factory2]->[ProductA2],
[Factory2]->[ProductB2],
-->

## Type
- Creational

## Note
- produces multiple related products
- care the coherence between related products
- bad support for flexible combination

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Abstract_factory_pattern
- https://sourcemaking.com/design_patterns/abstract_factory
