//import { setFilePreview } from '../convert.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PREVIEW_IMAGE = 'img/muffin-grey.svg';
const avatarInput = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const onChangeFileAvatar = () => {
  const file = avatarInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    const onChangeFile = () => {
      avatarPreview.src = reader.result;
    };

    reader.addEventListener('load', onChangeFile);

    reader.readAsDataURL(file);
  }
};

const clearFileFoto = () => {
  avatarInput.value = '';
  avatarPreview.src = DEFAULT_PREVIEW_IMAGE;

};

export { clearFileFoto, onChangeFileAvatar, avatarInput };
