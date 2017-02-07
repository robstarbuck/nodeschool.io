let args = process.argv.slice(2);
let min = 0;
[...args].reduce((a, b) => min = a < b ? a : b)
console.log(`The minimum of [${args}] is ${min}`);