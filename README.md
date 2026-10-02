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

