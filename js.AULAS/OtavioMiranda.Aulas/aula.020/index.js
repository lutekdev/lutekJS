const actualHour = 10;

const agora = new Date()

console.log(agora.toLocaleString('pt-BR'));

if (actualHour < 12) {
  console.log("Bom dia");
} else if (actualHour >= 12) {
  console.log("Boa tarde");
} else if (actualHour >= 18) {
  console.log("Boa noite");
} else {
  console.log("Boa madrugada");
}


// let testes = ["teste1", "teste2", "teste3", "teste4"];

// testes.forEach(function (value, index) {
//   console.log(index, value);
// }
// );

// class celular {
//   constructor() {
//     this.ano = 2020
//     this.marca = "Samsung"
//   }
// }

// const variableTeste = new celular()

// console.log(variableTeste.marca);