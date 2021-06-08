const getRandomInt = (from, to) => {
  if (to <= from || from < 0) {
    return;
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
getRandomInt(0, 10);


const getRandomArbitrary = (from, to) => {
  if (to <= from || from < 0) {
    return;
  }
  const result = Math.random() * (to - from) + from;
  return parseFloat(result.toFixed(1));
};
getRandomArbitrary(1, 10);
