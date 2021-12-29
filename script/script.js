//все, что связано с профилем
const profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');
const editButton = profile.querySelector('.profile__edit-button');
//все, что связано с popup
const popup = document.querySelector('.popup');
const closeForm = popup.querySelector('.popup__close-container');
let form =  document.querySelector('.popup__form');
let fieldset = form.querySelector('.popup__fieldset');
let nameInput = fieldset.querySelector('.popup__input_name_name');
let jobInput = fieldset.querySelector('.popup__input_name_job');
//функции и их вызов
function editProfile(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add ('popup_opened');
}
function closePopup () {
    popup.classList.remove ('popup_opened');
}
function saveProfile(evt){
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup ()
}
//работа кнопок_добавить профиль_закрыть профиль_сохранить профиль
editButton.addEventListener ('click', editProfile);
closeForm.addEventListener ('click', closePopup);
form.addEventListener('submit', saveProfile);
//спринт 5
// добавлен массив фотографий
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

const template = document.querySelector('.template').content; //карта в темпле
const card = document.querySelector('.photo-grid'); // список карт

function renderCard () {
    
    initialCards.forEach( function (element){
        templateClone = template.cloneNode(true);//клонировали карту
        templateClone.querySelector(".photo-container__img").src = element.link;
        templateClone.querySelector(".photo-container__img").alt = element.name;
        templateClone.querySelector(".photo-container__text").textContent = element.name;
        action (templateClone)
        card.append (templateClone)
    })
}
renderCard ();//функция для карт

const addButton = profile.querySelector('.profile__add-button');//выбрали кнопку добавления
const popupAdd = document.querySelector('.popup_Add')

function addProfile(){
popupAdd.classList.add ('popup_opened');}//открытие попап карта

addButton.addEventListener ('click', addProfile);

const closeFormAdd = popupAdd.querySelector('.popup__close-container');//закрытие попап карта

function closeAddPopup () {
popupAdd.classList.remove ('popup_opened');
}
closeFormAdd.addEventListener ('click', closeAddPopup);

function createCard (name, link)  {
    templateClone = template.cloneNode(true);//клонировали карту
    templateClone.querySelector(".photo-container__img").src = link;
    templateClone.querySelector(".photo-container__img").alt = name;
    templateClone.querySelector(".photo-container__text").textContent = name;
    action (templateClone)//место для ф-и лайка удаления просмотра фото
    return templateClone
}
function addCard (name, link)   {
     const newCard = createCard (name, link)
      card.prepend (newCard)
 }

const cardNameInput = popupAdd.querySelector(".popup__input_type_name")
const cardLinkInput = popupAdd.querySelector(".popup__input_type_link")
const formAdd = popupAdd.querySelector(".popup__form_add")

 function saveAddCard(evt){
    evt.preventDefault();
    addCard(cardNameInput.value, cardLinkInput.value);
    closeAddPopup ()}

formAdd.addEventListener('submit', saveAddCard);///новая карта при клике

///ф-я которая описывает лайк удаление и просмотр фото 
function action (templateClone) {
//лайки
const likeBtn = templateClone.querySelector(".photo-container__like");
function likeCard (){
likeBtn.classList.toggle('photo-container__like_active')
} 
likeBtn.addEventListener('click', likeCard);
//удаление
const deleteBtn = templateClone.querySelector(".photo-container__dlt");
function deleteCard (){
deleteBtn.closest('.photo-container').remove();
} 
deleteBtn.addEventListener('click', deleteCard);
//работа со слайдами

const photo = templateClone.querySelector('.photo-container__img'); 
const text = templateClone.querySelector('.photo-container__text'); 
const slider = document.querySelector(".popup_photo");
function addSlider(){

const sliderPhoto = slider.querySelector(".popup__img");
const sliderText = slider.querySelector(".popup__text");
sliderPhoto.src = photo.src;
sliderPhoto.alt = text.textContent;
sliderText.textContent = sliderPhoto.alt
slider.classList.add ('popup_opened');
}//открытие попап карта

photo.addEventListener ('click', addSlider);

const closeSlider = slider.querySelector('.popup__close-container');//закрытие попап карта

function closeSliderPopup () {
slider.classList.remove ('popup_opened');
}
closeSlider.addEventListener ('click', closeSliderPopup);

}
