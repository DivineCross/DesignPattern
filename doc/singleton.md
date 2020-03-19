# Singleton

## Intent
- Ensure a class has only one instance, and provide a global point of
  access to it.
- Encapsulated "just-in-time initialization" or "initialization on first
  use".
- Singleton restricts object creation for a class to only one instance.

## UML
<img src="http://yuml.me/diagram/plain/class/[Singleton|+static instance;-Singleton()]">
<!--
[Singleton|+static instance;-Singleton()]
-->

## Type
- Creational

## Note
- private constructor
- avoid global objects
- may need more instances in the future
- difficult for testing

## Reference
- https://en.wikipedia.org/wiki/Design_Patterns
- https://en.wikipedia.org/wiki/Singleton_pattern
- https://sourcemaking.com/design_patterns/singleton
