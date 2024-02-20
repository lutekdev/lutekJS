# MAIS SOBRE STRINGS

- `variavel[Indice da Letra]`
  
  - Caso queira pegar uma letra especifica de uma variável pode se usar exemplo quer pegar o `T` da palavra __`Teste`__ usa-se:
    
    - `let varTemp = "Teste"` usa-se __`console.log(varTemp[0])`__
    
- `variavel.charAt('Posição')`
  - Faz o mesmo esquema do procedimento do de cima ele pega a letra de acordo com o indice indicado.
    - [Documentação - CharAt](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charat)

- `variavel.concat('mensagem')`
  - Usa-se para concatenar palavras junto a variavel, e a mesma coisa do __`Template String`__, dizer a verdade usar-se o __`Template String`__ é a mais aconselhada.
    - [Documentação - Concat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

- `variavel.indexOf('Palavra que está procurando', 0[Start])`
  - Usa-se para especificar onde começa a primeira palavra do indice que está sendo procurado.
    - [Documentação - IndexOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexof)

- `variavel.lastIndexOf('Palavra que está procurando')`
  - Usa-se para procurar a palavra de trás para frente, básicamemente a mesma coisa do que o `indexOf` porem invertido.
    - [Documentação - LastIndexOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/lastindexof)

- `variavel.match('Expressão Regular')`
  - No caso do `Match` usa-se para __`Expressões Regulares`__ como pegar URL ou verificar CPF entre outras caracteristicas.
  
    - [Documentação - Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- `variavel.search('Expressão Regular || Mensagem')`
  - Realiza uma busca por uma ocorrência entre uma expressão regular e uma String
  
    - [Documentação - Search](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search)

- `variavel.replace('mensagem')`
  - retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere.
  
    - [Documentação - Replace](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- `variavel.split([separator[, limit]])`
  - Divide uma String em Array facilitando pegar palavras rapidas ou frases, usado muito em ocasiões como `body` quando se quer pegar o texto escrito numa plataforma de mensagens para criar comandos.
    - [Documentação - Split](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)

- `variavel.toUpperCase()`
  - Deixa a String em Maiusculas, completamente.
    - [Documentação - ToUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

- `variavel.toLowerCase()`
  - Deixa a String em Miniscula, completamente.
    - [Documentação - ToLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
---