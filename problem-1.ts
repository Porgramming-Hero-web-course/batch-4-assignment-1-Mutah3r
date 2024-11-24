const sumArray = (numbers: number[]): number => {
  let sum: number = 0;

  numbers.forEach((num) => {
    sum += num;
  });

  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
