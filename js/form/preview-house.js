const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const PHOTO_WIDTH = 70;
const PHOTO_HEIGHT = 70;
const housePhotoInput = document.querySelector('.ad-form__input');
const housePhotoPreview = document.querySelector('.ad-form__photo');
const photo = document.createElement('img');

const onChangefileOffer = () => {
  const file = housePhotoInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    housePhotoPreview.appendChild(photo);
    photo.width = PHOTO_WIDTH;
    photo.height = PHOTO_HEIGHT;

    const onChangeOffer = () => {
      photo.src = reader.result;
    };

    reader.addEventListener('load', onChangeOffer);

    reader.readAsDataURL(file);
  }
};


const clearFileHousePhoto = () => {
  photo.parentNode.removeChild(photo);
};

export { clearFileHousePhoto, housePhotoInput, onChangefileOffer };
