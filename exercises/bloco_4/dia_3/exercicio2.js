//primeiro precisamos definir o tamanho da base do triangulo

let n = 5;

//agora devemos declarar uma variavel para guardar o simbolo que usaremos para formar o triangulo na tela

let simbolo = '*';

//agora declaramos uma variavel para armazenar a quantidade de asteriscos impressos em uma linha 

let linha = '';

//agora precisamos montar a estrutura, algo que nos permite usar uma ação um determinado numero de vezes(for)

for (let index = 0; index <= n; index += 1){
  linha = linha + simbolo;
  console.log(linha);
} 
