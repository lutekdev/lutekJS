const nomeCompleto = prompt("Digite seu nome completo:");

document.body.innerHTML += `- Seu Nome Completo é: <strong>${nomeCompleto}</strong> <br>`;

document.body.innerHTML += `- Meu Nome Tem: <strong>${nomeCompleto.length} Letras</strong> <br>`;

document.body.innerHTML += `- A Segunda letra do meu nome é: <strong>${nomeCompleto[1]}</strong> <br>`;

document.body.innerHTML += `- O Primeiro Indice da Letra <strong>'e'</strong> do Meu Nome é: <strong>
  ${nomeCompleto.indexOf("e")}
</strong> <br>`;

document.body.innerHTML += `- O Ultimo Indice da Letra <strong>'v'</strong> do Meu Nome é: <strong>
  ${nomeCompleto.lastIndexOf("v")}
</strong> <br>`;

document.body.innerHTML += `- As últimas <strong>TRÊS</strong> letras do meu nome são: <strong>${nomeCompleto.slice(
  -3,
  nomeCompleto.length
)}</strong> <br>`;

document.body.innerHTML += `- As palavras do meu nome são: ${nomeCompleto.split(
  " "
)} <br>`;

document.body.innerHTML += `- Meu nome com Letras Maiúsculas é: <strong>${nomeCompleto.toUpperCase()}</strong> <br>`;

document.body.innerHTML += `- Meu nome com Letras Minusculas é: <strong>${nomeCompleto.toLowerCase()}</strong> <br>`;
