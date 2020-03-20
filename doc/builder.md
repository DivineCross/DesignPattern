# Builder

## Intent
- Separate the construction of a complex object from its representation
  so that the same construction process can create different
  representations.

## UML
<img src="http://yuml.me/diagram/plain/class/[Director|-builder;+construct()],[IBuilder|+buildPartA();+buildPartB();+getResult(): Product],[Director]<>->[IBuilder],[IBuilder]->[Product],[IBuilder]^-.-[Builder1],[IBuilder]^-.-[Builder2]">
<!--
[Director|-builder;+construct()],
[IBuilder|+buildPartA();+buildPartB();+getResult(): Product],
[Director]<>->[IBuilder],
[IBuilder]->[Product],
[IBuilder]^-.-[Builder1],
[IBuilder]^-.-[Builder2],
-->

## Type
- Creational

## Note
- builder focuses on creating a complex object
- builder emphasizes not only parts but also steps
- builder returns the product as the final step
- abstract factory emphasizes the family of products
- abstract factory returns each product immediately

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Builder_pattern
- https://sourcemaking.com/design_patterns/builder
