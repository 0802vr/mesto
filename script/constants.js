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
export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__job');
export const editButton = profile.querySelector('.profile__edit-button');
//все, что связано с popup профилем
export const popupEdit = document.querySelector('.popup_edit');
export const closeForm = popupEdit.querySelector('.popup__close-container');
export const profileForm =  document.querySelector('.popup__form-edit');
export const fieldset = profileForm.querySelector('.popup__fieldset');
export const nameInput = fieldset.querySelector('.popup__input_name_name');
export const jobInput = fieldset.querySelector('.popup__input_name_job');
//работа с темплом
export const template = document.querySelector('.template');
export const cardTemplateSelector = "#card-template"; //карта в темпле
export const cardList = document.querySelector(".photo-grid"); // список карт
//работа с формой карт
export const addButton = profile.querySelector('.profile__add-button');//выбрали кнопку добавления
export const popupAdd = document.querySelector('.popup_add')//попап карты

export const closeFormAdd = popupAdd.querySelector('.popup__close-container');//закрытие попап карта

export const cardNameInput = popupAdd.querySelector(".popup__input_type_name")//название места
export const cardLinkInput = popupAdd.querySelector(".popup__input_type_link")//ссылка на это место
export const formAdd = popupAdd.querySelector(".popup__form_add")// форма карт

//для слайдов
export const slider = document.querySelector(".popup_photo");
export const sliderPhoto = slider.querySelector(".popup__img");
export const sliderText = slider.querySelector(".popup__text");
export const closeSlider = slider.querySelector('.popup__close-container');//закрытие попап карта
///overlay
export const overlayProfile = popupEdit.querySelector(".popup__overlay");
export const overlayPlace = popupAdd.querySelector(".popup__overlay");
export const overlayPhoto = slider.querySelector(".popup__overlay");


  