type Person = { name: string };
function printName(name: string, age: number) {
  console.log(name, age);
}

function sum(a: number, b: number) {
  return a + b;
}

const c = sum(2, 4); // Here, TypeScript automatically determines the type of c as number without having to manually defining a type for it in the above function

function printPerson(person: { name: string }) {
  console.log(person.name);
}

printPerson({ name: "Sushant" }); // If we pass an age parameter here as {name:"Sushant", age:28}, this will throw an error as age parameter does not exist

// But the following won't give an error surprisingly
const person = { name: "Sushant", age: 28 };
printPerson(person);

function printPerson2(person: Person) {
  console.log(person.name);
}

printPerson({ name: "Sush" });
