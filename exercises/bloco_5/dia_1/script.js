function mudaTexto(){
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerHTML = 'Estar trabalhando em uma empresa boa e ganhando bem';
};
mudaTexto();

function alteraCor(elementos, cor){
  document.querySelector(elementos).style.backgroundColor = cor;
};

alteraCor('.main-content', 'rgb(76,164,109)');

function mudaCor(elementos, cor){
  document.querySelector(elementos).style.backgroundColor = cor;
};

mudaCor('.main-content .center-content', 'white');