const person1 = { name: "Sushant", age: 30 };
// person.isProgrammer = true - This is going to throw an error as this property does not exist on the object

// The above code can be changed as follows:
const person2: { name: string; age: number; isProgrammer?: boolean } = {
  name: "Sushant",
  age: 30,
};
// The question mark above on the isProgrammer property means that this property is optional and can either be assigned a value or not
// Withot the question mark, the expression will throw an error as isProgrammer property is not present during value assignment
