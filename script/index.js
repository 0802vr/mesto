import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js"
import {initialCards, profileName, profileJob, editButton, popupEdit, closeForm, cardTemplateSelector, cardList,
  profileForm, nameInput, jobInput, addButton, popupAdd, 
  closeFormAdd, cardNameInput,cardLinkInput, formAdd, slider, closeSlider, overlayProfile, overlayPlace, overlayPhoto, enableValidator } from "./constants.js"
import { openPopup, closePopup } from "./utils.js";

//валидация формы редактирования профиля
const editFormValidator = new FormValidator(enableValidator, profileForm);
editFormValidator.enableValidation();
editFormValidator.resetValidForm();

//валидация формы добавления новой карточки
const addCardFormValidator = new FormValidator(enableValidator, formAdd);
addCardFormValidator.enableValidation();
addCardFormValidator.resetValidForm();

function createCard(data) {
  const card = new Card(data, cardTemplateSelector)
  const cardListItem = card.createCard()
  return  cardListItem // возваращаете готовую карточку
}

initialCards.forEach((data) => {
  cardList.prepend(createCard(data, cardList))
})
//ф-я открыть форму профиля
function editProfile(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup (popupEdit);
  editFormValidator.resetValidForm();
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
  cardList.prepend(createCard({ link: cardLinkInput.value, name:cardNameInput.value}));
  formAdd.reset();
  closePopup (popupAdd);
 
}
function closePopupEdit(evt) {
  closePopup(popupEdit, evt)
  
  
}
function closePopupAdd(evt) {
closePopup(popupAdd, evt)
formAdd.reset()
}

//обработчики работы с профилем
editButton.addEventListener ('click', editProfile);//добавить
closeForm.addEventListener ('click', closePopupEdit);//закрыть
profileForm.addEventListener('submit', saveProfile);//сохранить
//обработчики работы с картами
addButton.addEventListener ('click', function() {
  openPopup(popupAdd);addCardFormValidator.resetValidForm()});//добавить
closeFormAdd.addEventListener ('click', closePopupAdd);//закрыть
formAdd.addEventListener('submit', saveAddCard);//сохранить
//для закрытия слайда вынесен из ф-и
closeSlider.addEventListener ('click', function() {
  closePopup(slider)});

overlayProfile.addEventListener('click', closePopupEdit);
overlayPlace.addEventListener('click', closePopupAdd);
overlayPhoto.addEventListener('click', function() {
  closePopup(slider)});