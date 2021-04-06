//exercicio numero 1;
let meuH1 = document.createElement('h1');
document.body.appendChild(meuH1);
meuH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
meuH1.style.backgroundColor = 'gray';

//exercicio numero 2;
let primeiraDiv = document.createElement('div');
primeiraDiv.className = 'main-content';
document.body.appendChild(primeiraDiv);

//exercicio numero 3;
let segundaDiv = document.createElement('div');
segundaDiv.className = 'center-content';
primeiraDiv.appendChild(segundaDiv)

//exercicio numero 4;
let adicionaTexto = document.createElement('p');
segundaDiv.appendChild(adicionaTexto);
adicionaTexto.innerText = 'isso é um teste, se der certo eu ficarei muito feliz'; 

//exercicio numero 5;
let terceiraDiv = document.createElement('div');
terceiraDiv.className = 'left-content';
primeiraDiv.appendChild(terceiraDiv);