# Iterator

## Intent
- Iterator accesses the elements of an object sequentially without
  exposing its underlying representation.

## UML
<img src="http://yuml.me/diagram/plain/class/[IIterable|+getIterator()],[IIterator|+getCurrent();+hasNext();+moveNext()],[IIterable]->[IIterator],[IIterable]^-.-[Iterable1],[IIterator]^-.-[Iterator1|-iterable1],[Iterable1]<-<>[Iterator1],[IIterable]^-.-[Iterable2],[IIterator]^-.-[Iterator2|-iterable2],[Iterable2]<-<>[Iterator2]">
<!--
[IIterable|+getIterator()],
[IIterator|+getCurrent();+hasNext();+moveNext()],
[IIterable]->[IIterator],
[IIterable]^-.-[Iterable1],
[IIterator]^-.-[Iterator1|-iterable1],
[Iterable1]<-<>[Iterator1],
[IIterable]^-.-[Iterable2],
[IIterator]^-.-[Iterator2|-iterable2],
[Iterable2]<-<>[Iterator2],
-->

## Type
- Behavioral

## Note
- SOLID-S
- provide an uniform way to traverse different data structures
- use command-query separation on iterator
- may support lazy evaluation
- deal carefully with the state of both the data and the iterator
- should try to privately expose structure from aggregate to iterator

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Iterator_pattern
- https://sourcemaking.com/design_patterns/iterator
