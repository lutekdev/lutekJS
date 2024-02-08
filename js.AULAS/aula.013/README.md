# ARRAY (BÁSICOS)

> Entendendo como funciona o Array no JavaScript para melhorarmos nosso conhecimento profissional e pessoal.

---

- `variavelArray.push('incrementoNovo')`
    - Usado para adicionar um novo **`elemento`** no final do Array.

- `variavelArray.unshift('IncrementoNovo')`
    - Usado para adicionar um **`elemento`** no início do meu Array.

- `variavelArray.pop()`
    - Remove o último elemento do **`Array`** na qual foi adicionado.
    - O **`pop`** permite que o usuario salve o que foi removido.
        - `const removido = variavelArray.pop()`

- `variavelArray.shift()`
    - Usado para remover o primeiro **`elemento`** do Array.
    - O **`shift`** permite que o usuario salve o que foi removido.
        - `const removido = variavelArray.shift()`

- `delete variavelArray[indice]`
    - Usado para apagar um **`Elemento`** do indice escolhido, porem ao apagar esse indice ficará vázio.

### 💡 Curiosidades

- No JavaScript o úsuario pode acessar indices vázios.

- No JavaScript quando se usa `typeof` retorna para 'Array' **Object**
    - Porem você pode verificar se é um 'Array' fazendo:
        - `variavelArray instaceof Array`

---