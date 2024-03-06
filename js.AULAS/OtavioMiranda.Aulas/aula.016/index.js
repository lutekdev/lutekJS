/*
 Primitivos (Imutáveis)
 - String
 - Number
 - Boolean
 - Undefined
 - Null

 Referência (Mutável)
 - Object
 - Array
 - Function
 */

// Primitivos
let nome = 'João'; // String
let idade = 24; // Number
let estaAprovado = true; // Boolean
let sobrenome = undefined; // Undefined
let corSelecionada = null; // Null

// Referência
let pessoa = {
    nome: 'João', sobrenome: 'Silva', idade: 24
};

// pessoa = {
//     nome: 'Joaquim',
//     sobrenome: 'Silva',
//     idade: 24
// }


// O Valor dos Primitivos São Copiados;
// O Valor das Referências não são Copiados

// Spread - Operador...
// Permite copiar os valores de um objeto para outro
let clone = {...pessoa};

pessoa.nome = "Nick";

console.log(pessoa);
console.log(clone);
