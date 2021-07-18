const addressInput = document.querySelector('#address');


const сompleteAddressInput = (coords) => {
  if (coords) {
    addressInput.value = coords;
  }
};

export { сompleteAddressInput };
