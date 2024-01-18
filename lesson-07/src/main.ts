// Types
// using the 'type' keyword (which is TypeScript specific) we can create a type which can be used at multiple instances without having to define the same types over and over again
// For Eg. the Person type defined below can be used at multiple instances
// The common convention for giving variable names for types are in camal case starting with capital letters

type PersonName = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address?: {
    street: string;
  };
};

const person1: PersonName = {
  name: "Sushant",
  age: 30,
  friends: [],
  address: {
    street: "Main St.",
  },
};

const person2: PersonName = { name: "Sush", age: 23, friends: [] };

// The below code is perfectly valid as well

type Person = number;
const person: Person = 3;

// Interfaces

// Interfaces work exactly like types with the difference being interfaces work only with objects.
// Interfaces cannot be assigned like types by using an '=' operator. They must be assigned inline

interface Person2 {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address?: {
    street: string;
  };
}
