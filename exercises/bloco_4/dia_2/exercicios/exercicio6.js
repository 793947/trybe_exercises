let numbers = [1, 3, 5, 6, 8];
let contador = 0;

for (let index = 0; index < numbers.length; index +=1){
  if (numbers[index] % 2 === 1){
    contador += 1;
  }
}
 if (contador > 0){
   console.log(contador);
 } else {
   console.log("nenhum valor ímpar encontrado");
 }