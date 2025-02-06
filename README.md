# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where you try to perform an operation on variables of incompatible types. Specifically, this example shows the error when a function expecting a number receives a string.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code calls `add` with a string as the second argument. TypeScript correctly flags this as a type error.

## Solution

The solution involves ensuring that both arguments passed to `add` are numbers. This can be done by explicit type checking and conversion before the operation.