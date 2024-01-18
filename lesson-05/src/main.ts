let a; // TypeScript assigns this variable of the type 'any' by default meaning this variable can be assigned any value
// let a:any = 4
a = 3;
a = "abc";

const b = JSON.parse("abc"); // This variable is also assigned the type of any as the value from the parse function could be anything an TypeScript doesn't know about this

// Same thing with the fetch request

const c = fetch("abc")
  .then((res) => res.json())
  .then((data) => data); // this value could be of any type hence the 'any' type assignment by default
