import { Card } from "./Cards.js";
import { FormValidator } from "./validate.js"
import {initialCards, profileName, profileJob, editButton, popupEdit, closeForm, cardTemplateSelector, cardList,
  profileForm, nameInput, jobInput, addButton, popupAdd, 
  closeFormAdd, cardNameInput,cardLinkInput, formAdd, slider, closeSlider, overlayProfile, overlayPlace, overlayPhoto, enableValidator } from "./constants.js"
import { openPopup, closePopup } from "./utils.js";

//валидация формы редактирования профиля
const editFormValidator = new FormValidator(enableValidator, profileForm);
editFormValidator.enableValidation();

//валидация формы добавления новой карточки
const addCardFormValidator = new FormValidator(enableValidator, formAdd);
addCardFormValidator.enableValidation();

const renderCard = (data) => {
  const card = new Card(data, cardTemplateSelector)
  const cardListItem = card.createCard()

  cardList.prepend(cardListItem);
};

initialCards.forEach((data) => {
  renderCard(data, cardList)
})
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
  renderCard({ link: cardLinkInput.value, name:cardNameInput.value});
  formAdd.reset();
  closePopup (popupAdd);
 
}
function closePopupEdit(evt) {
  closePopup(popupEdit, evt)
  editFormValidator.resetValidForm()
  
}
function closePopupAdd(evt) {
closePopup(popupAdd, evt)
addCardFormValidator.resetValidForm()
formAdd.reset()
}
function disableSubmitBtn(submitBtnElement){
  submitBtnElement.disabled=true;
  submitBtnElement.classList.add("popup__save_disabled");}
//обработчики работы с профилем
editButton.addEventListener ('click', editProfile);//добавить
closeForm.addEventListener ('click', closePopupEdit);//закрыть
profileForm.addEventListener('submit', saveProfile);//сохранить
//обработчики работы с картами
addButton.addEventListener ('click', function() {
  openPopup(popupAdd);
  const buttonAdd = popupAdd.querySelector(".popup__save");
  disableSubmitBtn(buttonAdd);});//добавить
closeFormAdd.addEventListener ('click', closePopupAdd);//закрыть
formAdd.addEventListener('submit', saveAddCard);//сохранить
//для закрытия слайда вынесен из ф-и
closeSlider.addEventListener ('click', function() {
  closePopup(slider)});

overlayProfile.addEventListener('click', closePopupEdit);
overlayPlace.addEventListener('click', closePopupAdd);
overlayPhoto.addEventListener('click', function() {
  closePopup(slider)});