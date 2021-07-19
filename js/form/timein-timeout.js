const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

const onTimeInSelectChange = (evt) => {
  const target = evt.target;

  timeOutSelect.value = target.value;
};

const onTimeOutSelectChange = (evt) => {
  const target = evt.target;

  timeInSelect.value = target.value;
};

export { timeInSelect, timeOutSelect, onTimeInSelectChange, onTimeOutSelectChange };
