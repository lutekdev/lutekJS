// Exercício 004

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

// console.log(varA, varB, varC);

let temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);
