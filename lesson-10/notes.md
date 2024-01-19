## Destructuring parameters in functions

- If we want to destructure parameters e can do it inline like `{ debugMode = false }= {}` without having to define a type explicitly
- However if we have multiple parameters like `{ debugMode = false, indentLevel }` with some of them not having default values, then we need to define types explicitly as the example in the main file shows because using `:` symbol to define types inline for destructured objects does not work with TypeScript as the `:` symbol is already used in JavaScript
  - Ex. { debugMode = false, indentLevel: number } - This will throw an error
- While using the rest operator `(...nums)` always make sure that the type is a array type like this `(...nums: number[])`. The rest operator will always return an any[]
