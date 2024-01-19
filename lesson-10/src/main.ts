type Options = {
  debugMode?: boolean;
  indentLevel?: number;
};

// The JavaScript way of destructuring
// function printNameAndAge(name, {debugMode = false}) {
//   console.log(name, debugMode)
// }

// the debugMode is a destructured parameter and the ':Options = {}' tells TypeScript that it's an optional field value when debugMode is not provided with any value
// function printNameAndAge(name: string, { debugMode = false }: Options = {}) {
//   console.log(name, debugMode);
// }

function printNameAndAge(
  name: string,
  { debugMode = false, indentLevel }: Options = {}
) {
  console.log(name, debugMode, indentLevel);
}

printNameAndAge("Sushant");
// printNameAndAge("Sushant", { debugMode: true });

// Rest operator
function sum(...nums: number[]) {
  return; //code to add nums
}

sum(1, 2, 3);
sum(2, 3);
