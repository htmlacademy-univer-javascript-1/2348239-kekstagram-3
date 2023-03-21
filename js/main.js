import {getData} from './data.js';
const usersNum = 25;

const similarListElement = document.querySelector('.pictures');
const similarPicture = document.querySelector('#picture').content.querySelector('.picture');

const similarPictInfo = similarPicture.querySelector('.picture__info');
const photo = getData(usersNum);

const similarListFragment = document.createDocumentFragment();

photo.forEach((url, lickes, comments) => {
  const pictElement = similarPicture.cloneNode(true);
  const pictInfo = similarPictInfo.cloneNode(true);
  pictElement.querySelector('.picture__img').src = url;
  pictInfo.querySelector('.picture__likes').textContent = lickes;
  pictInfo.querySelector('.picture__comments').textContent = comments;
  similarListElement.appendChild(pictElement);
});

similarListElement.appendChild(similarListFragment);

