const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const MAX_AVATAR_PHOTOS = 3;
const MAX_ROOM_PHOTOS = 3;
const AVATAR_IMG_WIDTH = 40;
const AVATAR_IMG_HEIGHT = 44;
const ROOM_IMG_WIDTH = 70;
const ROOM_IMG_HEIGHT = 70;

const avatarImg = document.createElement('img');
avatarImg.width = AVATAR_IMG_WIDTH;
avatarImg.height = AVATAR_IMG_HEIGHT;
avatarImg.alt = 'Аватар пользователя';
avatarImg.src = 'img/muffin-grey.svg';
const avatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const roomImg = document.createElement('img');
roomImg.classList.add('ad-form__photo');
roomImg.width = ROOM_IMG_WIDTH;
roomImg.height = ROOM_IMG_HEIGHT;
roomImg.alt = 'Фотография помещения';

const roomPhotos = document.querySelector('#images');
const roomPhotosPreview = document.querySelector('.ad-form__photos-preview');

const createImagePreview = (photoInput, photoPreview, maxLength, img) => {
  photoPreview.innerHTML = '';
  const length = Math.min(photoInput.files.length, maxLength);
  for (let iterator = 0; iterator < length; iterator++) {
    const file = photoInput.files[iterator];
    const fileName = file.name.toLowerCase();
    const imgClone = img.cloneNode(true);

    const matches = FILE_TYPES.some((imageType) => fileName.endsWith(imageType));

    if (matches) {
      const reader = new FileReader();

      const onImageLoad = () => {
        imgClone.src = reader.result;
        photoPreview.appendChild(imgClone);
      };

      reader.addEventListener('load', onImageLoad);

      reader.readAsDataURL(file);
    }
  }
};

const clearFileInputs = () => {
  roomPhotos.value = '';
  roomPhotosPreview.innerHTML = '';
  const plug = document.createElement('div');
  plug.classList.add('ad-form__photo');
  roomPhotosPreview.appendChild(plug);

  avatar.value = '';
  avatarPreview.innerHTML = '';
  avatarPreview.appendChild(avatarImg);
};

const onAvatarChange = () => {
  createImagePreview(
    avatar,
    avatarPreview,
    MAX_AVATAR_PHOTOS,
    avatarImg);
};

const onRoomPhotosChange = () => {
  createImagePreview(
    roomPhotos,
    roomPhotosPreview,
    MAX_ROOM_PHOTOS,
    roomImg);
};

const addImageInputEventListeners = () => {
  avatar.addEventListener('change', onAvatarChange);
  roomPhotos.addEventListener('change', onRoomPhotosChange);
};

export { clearFileInputs, addImageInputEventListeners };
