let nota = 80;
//nessa questão fiz o uso do pipe "ou" ensinado nos conteúdos do curso introdutório
if (nota < 0 || nota > 100){
  console.log("erro");
} else if (nota >= 90){
  console.log("A");
} else if (nota >= 80){
  console.log("B");
} else if (nota >= 70){
  console.log("c");
} else if (nota >= 60){
  console.log("D");
} else if (nota >= 50){
  console.log("E");
} else if (nota < 50){
  console.log("F");
}

