let a = 60;
let b = 50;
let c = 70;


let somaDosAngulos = a + b + c 
let angulosPositivos = a > 0 && b > 0 && c > 0;

if (angulosPositivos){
  if(somaDosAngulos === 180){
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("insira um angulo valido")
}