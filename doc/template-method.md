# Template Method

## Intent
- Define the skeleton of an algorithm in an operation, deferring some
  steps to client subclasses. Template Method lets subclasses redefine
  certain steps of an algorithm without changing the algorithm's
  structure.
- Template method defines the skeleton of an algorithm as an abstract
  class, allowing its subclasses to provide concrete behavior.

## UML
<img src="http://yuml.me/diagram/plain/class/[Abstract|+templateMethod();+step1();+step2()],[Abstract]^[Concrete1|+step1();+step2()],[Abstract]^[Concrete2|+step1();+step2()]">
<!--
[Abstract|+templateMethod();+step1();+step2()],
[Abstract]^[Concrete1|+step1();+step2()],
[Abstract]^[Concrete2|+step1();+step2()],
-->

## Type
- Behavioral

## Note
- SOLID-O
- IoC: Don't call us, we call you.
- abstract/primitive method: force subclasses to override
- hook method: empty implementation, may be overridden by subclasses
- provide a 'hook' on which to 'hang' variant implementations
- support changing details of the algorithm
- protect the workflow of the algorithm
- care issues about inheritance
- may be replaced by multiple strategies

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Template_method_pattern
- https://sourcemaking.com/design_patterns/template_method
