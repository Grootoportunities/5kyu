// Numbers ending with zeros are boring.
//
//     They might be fun in your world, but not here.
//
//     Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

const noBoringZeros = (n) => {
  if (n === 0) return 0;
  else if (n % 10 === 0) return noBoringZeros(n / 10);
  else return n;
};

console.log(noBoringZeros(111100));
