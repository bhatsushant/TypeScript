function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallback(1, 2, (sum) => console.log(sum));

type PrintNameFunc = () => void;

function f() {
  return;
}

type PrintNameFunc2 = (name: string) => number;

function g(name: string) {
  return 2;
}
