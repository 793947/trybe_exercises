//para imprimir usamos o console.log, para imprimir um quadrado fixo teriamos que usar console.log('*****') varias vezes;
// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');
// console.log('*****');

//precisamos construir um quadrado dinamico, para isso devemos usar um laço de repetição (for), pra isso precisamos de um padrão

// let n = 5;
// for(let index=0; index < n; index +=1){
//   console.log('*****');
// }

//neste momento as linhas são dinamicas, mas as colunas ainda são fixas, para definir a quantidade de colunas usamos a quantidade de '*', para isso precisamos de uma forma de ter n * para cada um representar uma coluna do quadrado. Sabemos que o for usa a string dinamica, em algum ponto pecisamos usar a info n pra gerar a string usada no for 


let n = 5;
let simbolo = '*';
let linha = '';

for (let index = 0; index < n; index += 1) {
  linha = linha + simbolo;
};
for (let index = 0; index < n; index += 1) {
  console.log(linha);
};