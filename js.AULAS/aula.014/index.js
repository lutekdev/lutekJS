// function saudacao(nome) {
//     // console.log(`Bom Dia '${nome}'`);
//     return `Bom Dia '${nome}'`;
// }
//
// function soma(num1, num2) {
//     return num1 + num2;
// }
//
// // ---------------------- //
// const variavel = saudacao("LutekDev");
// // ---------------------- //
// console.log(variavel);
// // ---------------------- //
// console.log(soma(5, 10));
// // ---------------------- //

// Criando função anonima
const variavel2 = function (nome) {
    return `Bom Dia '${nome}'`;
};

const raiz = function (n) {
    return n ** 0.5;
};

console.log(variavel2("LutekDev"));
console.log(raiz(9));