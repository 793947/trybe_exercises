function highestindex (numbers){
  let highIndex = 0;
 for (let index in numbers){
   if (numbers[highIndex] < numbers[index]){
     highIndex = index
   }
 }
 return highIndex;
}

 console.log(highestindex([2, 3, 6, 7, 10, 1]));