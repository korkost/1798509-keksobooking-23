let showRandomNumber = function (min, max) {
  for (let i = 0; i >= min.length; i++) {
  }
  return Math.floor((Math.random() * 10) + 0);
};
showRandomNumber(0, 10);

let showRandomNumber = function (min, max) {
  for (let i = 0; i >= min.length; i++) {
  }
  return Math.random() * (max - min) + min;
}
showRandomNumber(0, 10);
