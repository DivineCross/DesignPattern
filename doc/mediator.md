# Mediator

## Intent
- Define an object that encapsulates how a set of objects interact.
  Mediator promotes loose coupling by keeping objects from referring to
  each other explicitly, and it lets you vary their interaction
  independently.
- Mediator allows loose coupling between classes by being the only
  class that has detailed knowledge of their methods.

## UML
<img src="http://yuml.me/diagram/plain/class/[IMediator|+mediate()],[IMediator]^-.-[Mediator1],[IColleague],[IColleague]^-.-[Colleague1],[IColleague]^-.-[Colleague2],[IMediator]<-[IColleague],[Mediator1]->[Colleague1],[Mediator1]->[Colleague2]">
<!--
[IMediator|+mediate()],
[IMediator]^-.-[Mediator1],
[IColleague],
[IColleague]^-.-[Colleague1],
[IColleague]^-.-[Colleague2],
[IMediator]<-[IColleague],
[Mediator1]->[Colleague1],
[Mediator1]->[Colleague2],
-->

## Type
- Behavioral

## Note
- mediator define many-to-many relationship
- observer define one-to-many relationship
- colleagues should not reference each other
- mediator provides cooperative behaviors that colleagues can not
- may act like a platform handling communications in the group
- be careful about god object
- consider real benefits of the decoupling

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Mediator_pattern
- https://sourcemaking.com/design_patterns/mediator
