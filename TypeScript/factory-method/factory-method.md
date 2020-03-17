# Factory Method

## Intent
- Define an interface for creating an object, but let subclasses decide
  which class to instantiate. Factory Method lets a class defer
  instantiation to subclasses.
- Factory method creates objects without specifying the exact class to
  create.

## UML
<img src="http://yuml.me/diagram/plain/class/[ICreator|+create(): IProduct],[ICreator]->[IProduct],[IProduct]^-.-[Product2],[IProduct]^-.-[Product1],[ICreator]^-.-[Creator2],[Creator2]->[Product2],[Creator2]->[Product1],[ICreator]^-.-[Creator1],[Creator1]->[Product2],[Creator1]->[Product1]">
<!--
[ICreator|+create(): IProduct],
[ICreator]->[IProduct],
[IProduct]^-.-[Product2],
[IProduct]^-.-[Product1],
[ICreator]^-.-[Creator2],
[Creator2]->[Product2],
[Creator2]->[Product1],
[ICreator]^-.-[Creator1],
[Creator1]->[Product2],
[Creator1]->[Product1],
-->

## Type
- Creational

## Note
- produce single product
- the construction may be complicated
- the 'new' operator is considered harmful

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Factory_method_pattern
- https://sourcemaking.com/design_patterns/factory_method
