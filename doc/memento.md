# Memento

## Intent
- Without violating encapsulation, capture and externalize an object's
  internal state so that the object can be returned to this state later.
- Memento provides the ability to restore an object to its previous
  state (undo).

## UML
<img src="http://yuml.me/diagram/plain/class/[Caretaker],[Originator|+store();+restore()],[Memento],[Caretaker]->[Originator],[Originator]->[Memento]">
<!--
[Caretaker],
[Originator|+store();+restore()],
[Memento],
[Caretaker]->[Originator],
[Originator]->[Memento],
-->

## Type
- Behavioral

## Note
- caretaker operates on originator and wants to be able to undo
- memento should not be changed
- memento should be accessed by originator only
- take care if originator changes other objects or resources
- storing state externally allows restore to any state
- care the leak of the object representation
- may combine with command pattern to support unlimited undo/redo

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Memento_pattern
- https://sourcemaking.com/design_patterns/memento
