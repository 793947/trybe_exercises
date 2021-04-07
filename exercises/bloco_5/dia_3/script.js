function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//exercicio 1 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function criaDiaDoMes(){
  let listaDosDias = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1){
    let dia = dezDaysList[index];
    let itensDia = document.createElement('li');
    if (dia === 24 || dia === 31){
      itensDia.className = 'dia holiday';
      itensDia.innerHTML = dia;
      listaDosDias.appendChild(itensDia);
    } else if (dia === 4 || dia === 18){
      itensDia.className = 'dia friday';
      itensDia.innerHTML = dia;
      listaDosDias.appendChild(itensDia);
    } else if (dia === 25){
      itensDia.className = 'dia holiday friday';
      itensDia.innerHTML = dia;
      listaDosDias.appendChild(itensDia);
    } else {
      itensDia.className = 'dia';
      itensDia.innerHTML = dia;
      listaDosDias.appendChild(itensDia);
    }
  }
}

criaDiaDoMes();

//exercicio 2;
function criaBotaoDeFeriado(Feriados){
Feriados = document.createElement('button');
Feriados.id = 'btn-holiday';
Feriados.innerHTML = 'Feriados';
document.querySelector('.buttons-container').appendChild(Feriados);
}
criaBotaoDeFeriado();