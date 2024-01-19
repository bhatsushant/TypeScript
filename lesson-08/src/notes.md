## Functions

- The function sum in the file _main.ts_ can also be written as follows although this is not recommended as TypeScript is smart enough to determine the return type based on the variable types

```
function sum(a:number, b:number): number {
    return a+ b
}
```

- In the `printPerson` function in the main file, passing the values as shown below works because TypeScript only checks whether the structure of the parameter coming in matcher that of the the one defined in the function

```
const person = { name: "Sushant", age: 28 };
printPerson(person);
```

- Whereas the below operation fails because TypeScript understands that you are explicitly passing the age parameter which is not allowed instead of it coming from another variable or function which the user has no control over

```
{name:"Sushant", age:28}
```
