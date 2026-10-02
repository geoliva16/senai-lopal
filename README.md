# senai-lopal
# **Desafio 10 \- Operadores de comparação**

## **\- Diferença do \== e \===:**

* **\== (Igualdade Ampla):** Converte os tipos dos dados para um formato em comum antes de realizar a comparação. Exemplo: 2 \== "2" resulta em true.  
* **\=== (Igualdade Estrita):** Não há conversão. Compara tanto o valor quanto o tipo do dado. Exemplo: 2 \=== "2" resulta em false.

## **\-  Diferença de \!= e \!==:**

* **\!= (Desigualdade Ampla):** Volta true se os valores forem diferentes, realizando a conversão de tipos antes de avaliar. Exemplo: 3 \!= "3" resulta em false.  
* **\!== (Desigualdade Estrita):** Se os valores ou os tipos forem diferentes retorna true. Exemplo: 5 \!== "5" resulta em true.

## **\- Coerção de Tipos**

* Coerção de tipos, em Java Script, é quando um dado é transformado de um tipo para outro como, por exemplo, converter um texto em número. Isso ocorre de duas formas:  
* **Implícita (automática):** O próprio JavaScript faz isso sozinho nos bastidores quando precisa. Exemplo: ao multiplicar "5" \* 2, ele transforma o texto em número por conta própria para conseguir fazer o cálculo.  
* **Explícita (manual):** Programador quem decide e força a conversão usando funções específicas para isso, como Number(), String() ou Boolean().

## **\- Como ocorre a comparação \> e \<**

O JavaScript compara textos (strings) letra por letra, igualzinho a um dicionário, usando a tabela Unicode:

1. Compara a primeira letra. Se forem diferentes, a que estiver primeiro na tabela é a menor.  
2. Se forem iguais, passa para a próxima letra até “desempatar".  
* **Detalhe:** Letras maiúsculas vêm antes das minúsculas (ex: "Z" \< "a" é verdadeiro).  
* **Exemplo:** "apple" \< "banana" é true porque o 'a' vem antes do 'b'.  

  <img width="385" height="488" alt="Captura de tela 2026-10-02 142927" src="https://github.com/user-attachments/assets/dab0554c-410d-48bc-93c1-1bbaf426ab91" />

# **Desafio 11 \- Truthy e falsy**

## **\- O que é falsy**

* Em JavaScript, valores falsy são valores que são considerados falsos quando avaliados em um contexto booleano (como em condicionais if ou loops).

* ## Existem 8 valores falsy em JavaScript:

1. false (O próprio booleano)  
2. 0 (O número zero)  
3. \-0 (O zero negativo)  
4. 0n (O zero do tipo BigInt)  
5. "" (String vazia, seja com aspas simples, duplas ou crases)  
6. null (Ausência intencional de valor)  
7. undefined (Variável declarada mas não atribuída)  
8. NaN (Not a Number / Não é um Número)  
* Nota: em ambientes de navegador antigos ou legados, o objeto document.all também é tratado como falsy por motivos de retrocompatibilidade.

\- Valores Truthy:

1. Números diferentes de 0 (1, \-5, 3.14)  
2. Strings preenchidas (olá, "false")  
3. Objetos e arrays, mesmo vazios ({}, \[\])

### **\- O que a função** Boolean() **faz?**

* A função Boolean() serve para converter explicitamente qualquer valor em seu equivalente booleano primitivo (true ou false), baseando-se nas regras de truthy e falsy mencionadas acima.

## **\- NaN \=== NaN**

* Em JavaScript, NaN \=== NaN retorna false porque o padrão matemático IEEE 754 define que o valor NaN (Not-a-Number) não é igual a nenhum valor, nem a si mesmo. Já o método Number.isNaN( ) resolve isso ao inspecionar diretamente o valor sem fazer conversões de tipo, retornando true unicamente se o argumento enviado for de fato o NaN.

- #### 

- #### Por que NaN \=== NaN falha

* Padrão IEEE 754: O JavaScript segue essa norma de ponto flutuante usada no mundo inteiro. Ela dita que qualquer operação com NaN resulta em NaN, e ele não possui identidade própria de igualdade.  
* Prevenção de travamentos: Se NaN fosse igual a NaN, cálculos com erros indefinidos poderiam ser interpretados erroneamente como consistentes em lógica condicional.  
* 

- #### Como Number.isNaN() resolve

* Sem coerção: Diferente da função global isNaN(), que converte strings ou objetos em número antes de testar (gerando falsos positivos), o Number.isNaN() checa o tipo e o valor exato.  
* Checagem direta: Ele retorna true apenas se o item avaliado for o primitivo numérico NaN.
  <img width="553" height="744" alt="Captura de tela 2026-10-02 150556" src="https://github.com/user-attachments/assets/649f2220-ba4b-4f57-9925-b1dd5273ab93" />

# Desafio 12 \- Operador ternário

O **operador ternário** é uma forma enxuta de escrever um if...else em uma única linha. A estrutura é a seguinte:

$condição?valorseverdadeiro:valorsefalso$

### 

### **\- Expressão vs. Instrução**

* **Expressão (Expression):** É qualquer código que **gera um valor**. Como ele "vira" um dado no final, você consegue salvar em variáveis ou passar para outros lugares.  
  * *Exemplos:* 5 \+ 2, "Olá", idade \>= 18 e o próprio operador ternário.  
* **Instrução (Statement):** É um comando que **executa uma ação**, mas não produz um valor por si só.  
  * *Exemplos:* if...else, for, while.

### **\- Por que o ternário entra no console.log e o if não?**

Funções como console.log() e as *template strings* (\${...}) exigem passar **valores** para elas.

Como o ternário é uma **expressão**, o JavaScript o calcula rapidamente, transforma no resultado final e entrega esse valor direto para a função ou texto. Já o if é uma **instrução** (um bloco de controle de fluxo) — o JavaScript simplesmente não consegue converter um bloco de regras em um dado concreto para imprimir na tela.

### **\- Ternários Aninhados**

É possível encadear ternários para simular um if ... else if ... else, trocando a resposta do "senão" por uma nova condição:
<img width="774" height="740" alt="Captura de tela 2026-10-02 165328" src="https://github.com/user-attachments/assets/d2b58179-4cda-4086-971a-83b30d1d77c7" />

