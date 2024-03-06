// IEE 754 - 2008 IEEE Standard for Floating-Point Arithmetic

let num1 = 0.7;
let num2 = 0.7;

num1 = (num1 * 100 + num2 * 100) / 100;

console.log(num1);

console.log(Number.isInteger(num1));
