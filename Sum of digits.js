const sumOfDigits = (number) => {
  const numbers = number.toString().split("");

  if (numbers.length <= 1) return number;

  const sum = numbers.reduce((acc, number) => +number + acc, 0);

  return sumOfDigits(sum);
};

console.log(sumOfDigits(456));
