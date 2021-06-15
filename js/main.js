// Данные для объекта
const offerTitle = [
	'Большая квартира'
];

const offerType = ['palace', 'flat', 'house', 'bungalo', 'hotel'];
const offerCheckIn = ['12:00', '13:00', '14:00'];
const offerCheckOut = ['12:00', '13:00', '14:00'];
const offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const offerPhotos = [
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// Функция случайного числа из диапазона
function getRandomIntegerRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция получения массива заданной длинны
function getArrayRandomLength(array, length) {
	const shufleArray = array.slice();
	const temporaryValue;
	const randomIndex;

	for (const currentIndex = shufleArray.length - 1; currentIndex > 0; currentIndex--) {
		randomIndex = Math.floor(Math.random() * (currentIndex + 1));
		temporaryValue = shufleArray[currentIndex];
		shufleArray[currentIndex] = shufleArray[randomIndex];
		shufleArray[randomIndex] = temporaryValue;
	}
	shufleArray.length = length;
	return shufleArray;
}

// Функция генерации объекта
function createObject(index) {
	const objectRoom = {
		'author': {
			'avatar': 'img/avatars/user0' + (index + 1) + '.png'
		},

		'offer': {
			'title': offerTitle[index],
			'address': getRandomIntegerRange(35.65000, 35.70000) + ', ' + getRandomIntegerRange(139.70000, 139.80000),
			'price': getRandomIntegerRange(1000, 1000000),
			'type': offerType[getRandomIntegerRange(0, offerType.length - 1)],
			'rooms': getRandomIntegerRange(1, 100),
			'guests': getRandomIntegerRange(1, 100),
			'checkin': offerCheckIn[getRandomIntegerRange(0, offerCheckIn.length - 1)],
			'checkout': offerCheckOut[getRandomIntegerRange(0, offerCheckOut.length - 1)],
			// Случайное кол-во, случаные значения, не должны повторяться
			'features': getArrayRandomLength(offerFeatures, getRandomIntegerRange(1, offerFeatures.length - 1)),
			'description': '',
			// Случ. порядок
			'photos': getArrayRandomLength(offerPhotos, offerPhotos.length)
		},

		'location': {
			'lat': getRandomIntegerRange(35.65000, 35.70000),
			'lng': getRandomIntegerRange(139.70000, 139.80000),
		}
	};

	return objectRoom;
}

function createListOffers(quantityElements) {
	const listElement = [];
	for (let i = 0; i < quantityElements; i++) {
		listElement[i] = createObject(i);
	}
	return listElement;
}

