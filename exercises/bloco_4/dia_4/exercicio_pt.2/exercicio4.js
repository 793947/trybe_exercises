function biggestWord (word){
  let bigWord = word[0];
  for (let index in word){
    if (bigWord.length < word[index].length){
      bigWord = word[index];
    }
  }
  return bigWord;
}

console.log(biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));