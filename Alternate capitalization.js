// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!

const capitalize = (s) => {
  const letters = s.split("");

  const even = letters
    .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
    .join("");

  const odd = letters
    .map((letter, index) => (index % 2 !== 0 ? letter.toUpperCase() : letter))
    .join("");

  return [even, odd];
};

console.log(capitalize("asdasfaf"));
