# State

## Intent
- State allows an object to alter its behavior when its internal state
  changes.

## UML
<img src="http://yuml.me/diagram/plain/class/[Context|-state;+setState();+request()],[IState|-context;+handle()],[Context]<>->[IState],[IState]<>->[Context],[IState]^-.-[State1],[IState]^-.-[State2]">
<!--
[Context|-state;+setState();+request()],
[IState|-context;+handle()],
[Context]<>->[IState],
[IState]<>->[Context],
[IState]^-.-[State1],
[IState]^-.-[State2],
-->

## Type
- Behavioral

## Note
- an object-oriented state machine
- changing state is handled by state implementation
- reduce if/switch statements about checking states
- possible for compiler to check state/action combinations
- design transition table of states and actions in advance
- interfaces of context and state may be the same
- context delegates requests to state object

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/State_pattern
- https://sourcemaking.com/design_patterns/state
