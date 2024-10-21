const uniqueInOrder = (iterable) => {
  if (!iterable.length) return [];

  const result = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) result.push(iterable[i]);
  }

  return result;
};
