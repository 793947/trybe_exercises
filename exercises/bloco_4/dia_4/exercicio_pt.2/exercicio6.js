function sum (numbers){
  let total = 0;
  for (let index = 1; index <= numbers; index += 1){
    total = total + index;
  }
  return total;
}
console.log(sum(5));