

 
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
export const popupEdit = '.popup_edit';//попап профиль
export const popupAdd = '.popup_add';//попап карт

//работа с темплом
export const template = document.querySelector('.template');
export const cardTemplateSelector = "#card-template"; //карта в темпле
export const cardList = document.querySelector(".photo-grid"); // список карт

export const inputName = document.querySelector('.popup__input_name_name') ;
export const inputJob = document.querySelector('.popup__input_name_job') ;
  
  
 
   







