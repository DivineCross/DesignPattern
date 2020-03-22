# Interpreter

## Intent
- Given a language, define a representation for its grammar along with
  an interpreter that uses the representation to interpret sentences in
  the language.
- Map a domain to a language, the language to a grammar, and the grammar
  to a hierarchical object-oriented design.
- Interpreter implements a specialized language.

## UML
<img src="http://yuml.me/diagram/plain/class/[IExpression|+interpret(context)],[IExpression]^-.-[TerminalExpression],[IExpression]^-.-[NonTerminalExpression|-expression],[NonTerminalExpression]<>->[IExpression]">
<!--
[IExpression|+interpret(context)],
[IExpression]^-.-[TerminalExpression],
[IExpression]^-.-[NonTerminalExpression|-expression],
[NonTerminalExpression]<>->[IExpression],
-->

## Type
- Behavioral

## Note
- represent a sentence by an abstract syntax tree
- the abstract syntax tree is made up of expressions
- the structure is like composite pattern
- composite may also implement interpreter
- may be used for specialized query languages like SQL
- consider using flyweight on the terminal expression

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Interpreter_pattern
- https://sourcemaking.com/design_patterns/interpreter
