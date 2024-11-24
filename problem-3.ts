const countWordOccurrences = (sentence: string, word: string): number => {
  const wordsInSentence: string[] = sentence.toLowerCase().split(" ");
  const inputWord: string = word.toLowerCase();

  return wordsInSentence.filter((w) => w === inputWord).length;
};

console.log(countWordOccurrences("I love typescript", "typescript"));
