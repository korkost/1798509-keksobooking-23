function getRandomIntegerRange(min, max) {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const getRandomCoordinates = (min, max, decimal) => {
  if (min < 0) {
    return undefined;
  }
  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }
  const resultCords = (Math.random() * (max - min) + min).toFixed(decimal);
  return parseFloat(resultCords);
};

const getRandomArrayElement = (elements) => (elements[getRandomIntegerRange(0, elements.length - 1)]);

const getRandomArray = (array) => array.filter(() => getRandomIntegerRange(0, 1));

export { getRandomIntegerRange, getRandomArrayElement, getRandomCoordinates, getRandomArray };
