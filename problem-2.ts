const removeDuplicates = (numbers: number[]): number[] => {
  const uniqueNumbers: number[] = [];

  numbers.forEach((num) => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  });

  return uniqueNumbers;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6]));
