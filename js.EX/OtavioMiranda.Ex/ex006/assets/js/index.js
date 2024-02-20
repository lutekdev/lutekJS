const numero = Number(prompt("Digite um número:"));

const tituloNumero = document.getElementById("numeroTitulo");
const textoContainer = document.getElementById("texto");

tituloNumero.innerHTML = numero;

let response;
let responseRaiz;

if (Number.isInteger(numero)) {
  response = "Verdadeiro";
} else {
  response = "Falso";
}

const isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

if (isSquare(numero)) {
  responseRaiz = "Tem Raiz";
} else {
  responseRaiz = "Não Tem Raiz";
}

textoContainer.innerHTML += `
<p> Raiz Quadrada: <strong>${Math.sqrt(numero)}</strong> </p>
<p> O ${numero} é Inteiro: <strong>${response}</strong> </p>
<p> Arredondado para Baixo: <strong>${Math.floor(numero)}</strong> </p>
<p> Arredondado para Cima: <strong>${Math.ceil(numero)}</strong> </p>
<p> Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> </p>
<p> Raiz Quadrada: <strong>${responseRaiz}</strong> </p>
`;
