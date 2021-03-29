let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let otherInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };

  for (let key in info){
    if (
    info[key] === info.recorrente &&
    info[key]  === 'sim' &&
    otherInfo[key] === 'sim'
    ){
    console.log('ambos recorrente');
    }else{
      console.log(info[key] + ' e ' + otherInfo[key]);
    }
  }
