/**
 * Operadores Lógicos
 * 
 * && -> AND -> E (Todas as condições precisam ser verdadeiras para retornar 'True')
 * || -> OR -> OU (Uma condição precisa ser verdadeira para retornar 'True')
 * ! -> NOT -> NÃO (Negação)
 */

const expressaoAnd = true && true;
const expressaoOr = true || false;
const expressaoNot = !true;

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

const member = "LutekDev";
const password = "123456";

const isLogged = member === "LutekDev" && password === "123456";
console.log(isLogged)

const isNotLogged = !isLogged;
console.log(isNotLogged);
