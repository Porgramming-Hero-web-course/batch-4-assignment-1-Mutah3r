const sumArray = (numbers: number[]): void => {
  let sum: number = 0;

  numbers.forEach((num) => {
    sum += num;
  });

  console.log(sum);
};

sumArray([1, 2, 3, 4, 5]);
