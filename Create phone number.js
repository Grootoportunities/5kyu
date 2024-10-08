const createPhoneNumber = (numbers) => {
  if (numbers.length < 10) return new Error("Length is less than 10");

  const firstPart = numbers.slice(0, 3).join("");
  const secondPart = numbers.slice(3, 6).join("");
  const thirdPart = numbers.slice(6).join("");

  return `(${firstPart}) ${secondPart}-${thirdPart}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
