# Command

## Intent
- Encapsulate a request as an object, thereby letting you parametrize
  clients with different requests, queue or log requests, and support
  undoable operations.
- Promote "invocation of a method on an object" to full object status.
- Command creates objects which encapsulate actions and parameters.

## UML
<img src="http://yuml.me/diagram/plain/class/[Invoker|-commands;+operation()],[Invoker]+->[ICommand|+execute()],[ICommand]^-.-[Command1|-receiver1],[Command1]+->[Receiver1|+action()]">
<!--
[Invoker|-commands;+operation()],
[Invoker]+->[ICommand|+execute()],
[ICommand]^-.-[Command1|-receiver1],
[Command1]+->[Receiver1|+action()],
-->

## Type
- Behavioral

## Note
- encapsulate request as a command
- invoker is the command manager, not the implementor
- invoker is like a remote controller with buttons as the interfaces
- a class delegate a request to a command instead of implementing it
- invoker can do bookkeeping on executions
- may support undo/redo trivially
- may need to define undo operations

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Command_pattern
- https://sourcemaking.com/design_patterns/command
