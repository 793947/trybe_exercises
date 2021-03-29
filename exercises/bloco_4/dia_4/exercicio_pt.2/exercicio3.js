function minimumIndex (numbers) {
  let minIndex = 0;
  for (let index in numbers){
    if (numbers[minIndex] > numbers[index]){
      minIndex = index 
    }
  }
  return minIndex;
}

console.log(minimumIndex([2, 4, 6, 7, 10, 0, -3]));