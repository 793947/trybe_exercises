//exercicio  1;
let meuH1 = document.createElement('h1');
document.body.appendChild(meuH1);
meuH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
meuH1.style.backgroundColor = 'gray';

//exercicio  2;
let primeiraDiv = document.createElement('div');
primeiraDiv.className = 'main-content';
document.body.appendChild(primeiraDiv);

//exercicio  3;
let segundaDiv = document.createElement('div');
segundaDiv.className = 'center-content';
primeiraDiv.appendChild(segundaDiv)

//exercicio  4;
let adicionaTexto = document.createElement('p');
segundaDiv.appendChild(adicionaTexto);
adicionaTexto.innerText = 'isso é um teste, se der certo eu ficarei muito feliz'; 

//exercicio  5;
let terceiraDiv = document.createElement('div');
terceiraDiv.className = 'left-content';
primeiraDiv.appendChild(terceiraDiv);

//exercicio 6;
let quartaDiv = document.createElement('div');
quartaDiv.className = 'right-content';
primeiraDiv.appendChild(quartaDiv);

//exercicio 7;
let adicionaImg = document.createElement('img');
adicionaImg.className = 'small-image';
adicionaImg.src= 'https://picsum.photos/200'; 
terceiraDiv.appendChild(adicionaImg);

//exercicio 8;
let arrNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let adicionaLista = document.createElement('ul');

for(let index =0; index < arrNumbers.length; index += 1){
  let addLi = document.createElement('li');
  addLi.appendChild(document.createTextNode(arrNumbers[index]));
  adicionaLista.appendChild(addLi);
}
quartaDiv.appendChild(adicionaLista);

//exercicio 9;
// let adicionaTagsH3 = document.createElement('h3');
// let adicionaTagsH32 = document.createElement('h3');
// let adicionaTagsH33 = document.createElement('h3');

// primeiraDiv.appendChild(adicionaTagsH3);
// primeiraDiv.appendChild(adicionaTagsH32);
// primeiraDiv.appendChild(adicionaTagsH33);
for (let index = 0; index < 3; index += 1){
  let adicionaTagsH = document.createElement('h3');
  primeiraDiv.appendChild(adicionaTagsH);
}

//exercicio 1 - pt2;
meuH1.className = 'title'; 

//exercicio 2 - pt2;
let adicionaTagsH = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1){
  adicionaTagsH[index].className = 'description';
}
