//все, что связано с профилем
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const editButton = profile.querySelector('.profile__edit-button');
//все, что связано с popup профилем
const popupEdit = document.querySelector('.popup_edit');
const closeForm = popupEdit.querySelector('.popup__close-container');
const Profileform =  document.querySelector('.popup__form-edit');
const fieldset = Profileform.querySelector('.popup__fieldset');
const nameInput = fieldset.querySelector('.popup__input_name_name');
const jobInput = fieldset.querySelector('.popup__input_name_job');
//работа с темплом
const template = document.querySelector('.template').content; //карта в темпле
const card = document.querySelector('.photo-grid'); // список карт
//работа с формой карт
const addButton = profile.querySelector('.profile__add-button');//выбрали кнопку добавления
const popupAdd = document.querySelector('.popup_add')//попап карты

const closeFormAdd = popupAdd.querySelector('.popup__close-container');//закрытие попап карта

const cardNameInput = popupAdd.querySelector(".popup__input_type_name")//название места
const cardLinkInput = popupAdd.querySelector(".popup__input_type_link")//ссылка на это место
const formAdd = popupAdd.querySelector(".popup__form_add")// форма карт

//для слайдов
const slider = document.querySelector(".popup_photo");

const sliderPhoto = slider.querySelector(".popup__img");
const sliderText = slider.querySelector(".popup__text");

const closeSlider = slider.querySelector('.popup__close-container');//закрытие попап карта

//изначальный массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function renderCard () {
    
  initialCards.forEach( function (element){
      const el = createCard (element)
      card.append (el)
  })
}
renderCard ();//функция для карт
//ф-я новой карты
function createCard (element)  {
  templateClone = template.cloneNode(true);//клонировали карту
  templateClone.querySelector(".photo-container__img").src = element.link;
  templateClone.querySelector(".photo-container__img").alt = element.name;
  templateClone.querySelector(".photo-container__text").textContent = element.name;
  setEventListeners (templateClone)//место для ф-и лайка удаления просмотра фото
  return templateClone
}
//ф-я работы карты
function setEventListeners (templateClone) {
  const likeBtn = templateClone.querySelector(".photo-container__like");
  const deleteBtn = templateClone.querySelector(".photo-container__dlt");
  const photo = templateClone.querySelector('.photo-container__img'); 
  const text = templateClone.querySelector('.photo-container__text'); 
  //лайки карты
function likeCard (){
likeBtn.classList.toggle('photo-container__like_active')
} 
likeBtn.addEventListener('click', likeCard);
//удаление карты
function deleteCard (){
deleteBtn.closest('.photo-container').remove();
} 
deleteBtn.addEventListener('click', deleteCard);
//работа со слайдами

function addSlider(){

sliderPhoto.src = photo.src;
sliderPhoto.alt = text.textContent;
sliderText.textContent = sliderPhoto.alt

openPopup (slider)
}
//открытие попап карта
photo.addEventListener ('click', addSlider);
//закрытие слайда


//общие ф-и открыть и закрыть попап
function openPopup (popup) {
  popup.classList.add ('popup_opened');
}
function closePopup (popup) {
  popup.classList.remove ('popup_opened');
}
//ф-я открыть форму профиля
function editProfile(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup (popupEdit);
}
//ф-я сохранения нового профиля
function saveProfile(evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup (popupEdit);
}
//ф-я сохранения карты
function saveAddCard(evt){
  evt.preventDefault();
  card.prepend(createCard({ link: cardLinkInput.value, name:cardNameInput.value, alt: cardNameInput.value}));
  closePopup (popupAdd)
}
//обработчики работы с профилем
editButton.addEventListener ('click', editProfile);//добавить
closeForm.addEventListener ('click', function() {
closePopup(popupEdit)});//закрыть
Profileform.addEventListener('submit', saveProfile);//сохранить
//обработчики работы с картами
addButton.addEventListener ('click', function() {
openPopup(popupAdd)});//добавить
closeFormAdd.addEventListener ('click', function() {
closePopup(popupAdd)});//закрыть
formAdd.addEventListener('submit', saveAddCard);//сохранить
//для закрытия слайда вынесен из ф-и
closeSlider.addEventListener ('click', function() {
  closePopup(slider)})
}