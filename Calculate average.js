// Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.

const findAverage = (array) => {
  if (array.length === 0) return 0;

  const sum = array.reduce((acc, curr) => {
    return curr + acc;
  }, 0);

  return sum / array.length;
};
