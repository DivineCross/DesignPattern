# Proxy

## Intent
- Provide a surrogate or placeholder for another object to control
  access to it.
- Add a wrapper and delegation to protect the real component from undue
  complexity.
- Proxy provides a placeholder for another object to control access,
  reduce cost, and reduce complexity.

## UML
<img src="http://yuml.me/diagram/plain/class/[ISubject|+operation()],[ISubject]^-.-[Proxy|-realObject],[ISubject]^-.-[RealObject],[Proxy]+->[RealObject]">
<!--
[ISubject|+operation()],
[ISubject]^-.-[Proxy|-realObject],
[ISubject]^-.-[RealObject],
[Proxy]+->[RealObject],
-->

## Type
- Structural

## Note
- do not change interface
- access of an object should be controlled
- additional functionality should be provided when accessing an object
- may be remote, virtual, or protection
- deal with security, caching, or logging

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Proxy_pattern
- https://sourcemaking.com/design_patterns/proxy
