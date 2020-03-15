# Observer

## Intent
- Define a one-to-many dependency between objects so that when one
  object changes state, all its dependents are notified and updated
  automatically.
  the clients that use it.
- Encapsulate the core (or common or engine) components in a Subject
  abstraction, and the variable (or optional or user interface)
  components in an Observer hierarchy.
- Observer is a publish/subscribe pattern which allows a number of
  observer objects to see an event.

## UML
<img src="http://yuml.me/diagram/plain/class/[IObersevable|+register(observer);+unregister(observer);+notify()],[IObersevable]+->[IObserver|+update()],[IObersevable]^-.-[Subject|-observers;+getState()],[IObserver]^-.-[Observer2|-subject],[Subject]<-+[Observer2],[IObserver]^-.-[Observer1|-subject],[Subject]<-+[Observer1]">
<!--
    [IObersevable|+register(observer);+unregister(observer);+notify()],
    [IObersevable]+->[IObserver|+update()],
    [IObersevable]^-.-[Subject|-observers;+getState()],
    [IObserver]^-.-[Observer2|-subject],
    [Subject]<-+[Observer2],
    [IObserver]^-.-[Observer1|-subject],
    [Subject]<-+[Observer1],
-->

## Type
- Behavioral

## Note
- from 'poll' to 'push'
- know little about clients
- care expensive observer updates

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Observer_pattern
- https://sourcemaking.com/design_patterns/observer
