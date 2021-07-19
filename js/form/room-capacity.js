const ROOM_CAPACITY_VALUES = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

const onNumberRoomsSelectChange = (evt) => {
  const target = evt.target;
  const capacitySelectItems = capacitySelect.querySelectorAll('option');

  capacitySelectItems.forEach((item) => {
    item.disabled = true;
  });

  ROOM_CAPACITY_VALUES[target.value].forEach((item) => {
    capacitySelect.querySelector(`option[value="${item}"]`).disabled = false;
    capacitySelect.value = item;
  });
};

export { roomNumberSelect, onNumberRoomsSelectChange };
