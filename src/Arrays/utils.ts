export const getSortedRandomArray = (length) => {
  return [...Array(length)]
    .map(() => ~~(Math.random() * length))
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
};

export const getRandomArray = (length) => {
  return [...Array(length)].map(() => ~~(Math.random() * length));
};
