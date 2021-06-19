function getRandomIntegerRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomArrayElement = (elements) => (elements[getRandomIntegerRange(0, elements.length - 1)]);

export { getRandomIntegerRange, getRandomArrayElement };
