import './index.css';   
import { Section } from "../script/components/Section.js"
import { Card } from "../script/components/Card.js"
import { FormValidator } from "../script/components/FormValidator.js"
import { PopupWithForm } from "../script/components/PopupWithForm.js"
import { PopupWithImage } from "../script/components/PopupWithImage.js"
import { UserInfo } from "../script/components/UserInfo.js"
import { editButton, addButton, popupEdit, profileForm, popupAdd, formAdd, initialCards, cardList, enableValidator, cardTemplateSelector, inputName, inputJob } from "../script/utils/constants.js"



//профиль

const profileMod = new PopupWithForm(popupEdit, saveProfile);
const unfoValueUser = new UserInfo({ name: ".profile__name", info: ".profile__job" });

const editFormValidator = new FormValidator(enableValidator, profileForm); //вальдация профиля


//карта

const cardMod = new PopupWithForm(popupAdd, saveAddCard);
const addCardFormValidator = new FormValidator(enableValidator, formAdd); //валидация карточки
const popupBigImage = new PopupWithImage(".popup_photo")

//работа с Section
const section = new Section({ items: initialCards, renders: createCard }, cardList)

//работа с Card
function createCard(date) {
  const card = new Card(date, cardTemplateSelector, (name, link) => { popupBigImage.open(name, link); })
  const cardListItem = card.generateCard()
  return cardListItem // возваращаете готовую карточку
}
//ф-я сохранения карты
function saveAddCard(element) {
  const date = {};
  date.name = element.inputFormName;
  date.link = element.inputFormAddition;
  section.addItems(createCard(date));


}
//ф-я сохранения нового профиля
function saveProfile(element) {
  unfoValueUser.setUserInfo({ name: element.inputFormName, info: element.inputFormAddition });
}

//валидация формы редактирования профиля

editFormValidator.enableValidation();


//валидация формы добавления новой карточки

addCardFormValidator.enableValidation();

//навешиваем обработчики
profileMod.setEventListeners();
cardMod.setEventListeners();
popupBigImage.setEventListeners();
section.renderItems();

//ф-я открыть форму профиля
function openEditProfile() {
  const newUnfoValueUser = unfoValueUser.getUserInfo();
  inputName.value = newUnfoValueUser.name;
  inputJob.value = newUnfoValueUser.info;
  editFormValidator.resetValidForm();
  profileMod.open();



}
function openAddProfile() {
  cardMod.open();
  addCardFormValidator.resetValidForm();
}


//обработчики работы с профилем
editButton.addEventListener('click', () => openEditProfile());//добавить
addButton.addEventListener('click', () => openAddProfile());//добавить


