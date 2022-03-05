import {Section} from "../components/Section.js"
import {Card} from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import {PopupWithForm} from "../components/PopupWithForm.js"
import {PopupWithImage} from "../components/PopupWithImage.js"
import {UserInfo} from "../components/UserInfo.js"

 
  export const enableValidator = ({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active"
});
export const initialCards = [
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

  //все, что связано с профилем
 const profile = document.querySelector('.profile');
export const editButton = document.querySelector('.profile__edit-button'); //кнопка профиля
export const addButton = document.querySelector('.profile__add-button');//кнопка карты
export const profileForm =  document.querySelector('.popup__form-edit');
export const formAdd = document.querySelector(".popup__form_add")
//все, что связано с popup профилем
  const popupEdit = '.popup_edit';//попап профиль
  const popupAdd = '.popup_add';//попап карт

//работа с темплом
export const template = document.querySelector('.template');
export const cardTemplateSelector = "#card-template"; //карта в темпле
export const cardList = document.querySelector(".photo-grid"); // список карт

//профиль

export const profileMod = new PopupWithForm (popupEdit,saveProfile);
export const unfoValueUser = new UserInfo({name:".profile__name", info:".profile__job"});
export const newUnfoValueUser = unfoValueUser.getUserInfo();
export const editFormValidator = new FormValidator(enableValidator, profileForm); //вальдация профиля


//карта

export const cardMod = new PopupWithForm (popupAdd,saveAddCard);
export const addCardFormValidator = new FormValidator(enableValidator, formAdd); //валидация карточки
export const popupBigImage = new PopupWithImage(".popup_photo")

//работа с Section
export const section = new Section ({items:initialCards,renders:createCard},cardList)
  
//работа с Card
export function createCard(date) {
  const card = new Card(date, cardTemplateSelector,(name, link)=>{popupBigImage.open(name, link);})
  const cardListItem = card.generateCard()
  return  cardListItem // возваращаете готовую карточку
}
//ф-я сохранения карты
function saveAddCard(element){
  const date = {}; 
  date.name  =element.form1; 
  date.link  =element.form2;
  section.addItems(createCard(date));
  formAdd.reset();
   
}
//ф-я сохранения нового профиля
function saveProfile(element){
  unfoValueUser.setUserInfo({name:element.form1, info:element.form2});
  
  
 
   
}






