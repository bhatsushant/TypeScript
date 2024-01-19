function printName(name: string) {
  console.log(name);
  return;
}

// Return type of the above function is void

function printNameAndAge(name: string, options?: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge("Sush");
