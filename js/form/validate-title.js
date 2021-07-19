const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const titleInput = document.querySelector('#title');

const onTitleInputValid = () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Осталось еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Превышен лимит символов на ${valueLength - MAX_TITLE_LENGTH}`);
  } else {
    titleInput.setCustomValidity('');
  }
};

export { titleInput, onTitleInputValid };
