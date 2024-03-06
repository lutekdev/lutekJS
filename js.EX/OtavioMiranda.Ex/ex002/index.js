// Exercício 002

const nomeHomem = "Lutek";
const sobrenomeHomem = "Dev";
const idadeHomem = 20;
const anoNascimento = 2023 - idadeHomem;
const pesoHomem = 71;
const alturaHomemMetros = 1.69;
const imcHomem = pesoHomem / alturaHomemMetros ** 2;
// IMC = Indice de Massa Corporal
// IMC = (peso) / (altura * altura)

console.log(
  `${nomeHomem} ${sobrenomeHomem} tem ${idadeHomem} anos, pesa ${pesoHomem} kg`
);

console.log(`tem ${alturaHomemMetros} de altura e seu IMC é de ${imcHomem}.`);
console.log(`${nomeHomem} ${sobrenomeHomem} nasceu em ${anoNascimento}`);
