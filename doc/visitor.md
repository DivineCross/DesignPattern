# Visitor

## Intent
- Represent an operation to be performed on the elements of an object
  structure. Visitor lets you define a new operation without changing
  the classes of the elements on which it operates.
- Visitor separates an algorithm from an object structure by moving the
  hierarchy of methods into one object.

## UML
<img src="http://yuml.me/diagram/plain/class/[IVisitor|+visit1(Element1);+visit2(Element2)],[IElement|+accept(IVisitor)],[IElement]->[IVisitor],[IVisitor]^-.-[Visitor1],[IVisitor]^-.-[Visitor2],[IElement]^-.-[Element1],[IElement]^-.-[Element2]">
<!--
[IVisitor|+visit1(Element1);+visit2(Element2)],
[IElement|+accept(IVisitor)],
[IElement]->[IVisitor],
[IVisitor]^-.-[Visitor1],
[IVisitor]^-.-[Visitor2],
[IElement]^-.-[Element1],
[IElement]^-.-[Element2],
-->

## Type
- Behavioral

## Note
- SOLID-O
- visit/accept combination is for double-dispatch
- can make completely different methods for element classes
- implement a visit method for each concrete element type
- element class is not expected to change
- each visitor is for a new operation
- element dispatch a request to visitor object by 'accept'
- may be used to visit structures like composite

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Visitor_pattern
- https://sourcemaking.com/design_patterns/visitor
- https://stackoverflow.com/questions/9132178
- https://stackoverflow.com/questions/47241023
