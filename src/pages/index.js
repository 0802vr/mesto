import './index.css';   
import {section, profileMod, cardMod, editFormValidator,addCardFormValidator, editButton, newUnfoValueUser, 
  addButton } from "../script/utils/constants.js"

//валидация формы редактирования профиля

editFormValidator.enableValidation();
editFormValidator.resetValidForm();

//валидация формы добавления новой карточки

addCardFormValidator.enableValidation();
addCardFormValidator.resetValidForm();

profileMod.setEventListeners();
cardMod.setEventListeners();

section.renderItems(); 

//ф-я открыть форму профиля
function openEditProfile(){
  
  document.querySelector('.popup__input_name_name').value = newUnfoValueUser.name;  
  document.querySelector('.popup__input_name_job').value = newUnfoValueUser.info;  
  profileMod.open();
  

  
}
function openAddProfile(){
  cardMod.open(); 
  addCardFormValidator.resetValidForm();
}


//обработчики работы с профилем
editButton.addEventListener ('click', () => openEditProfile());//добавить
addButton.addEventListener ('click',() => openAddProfile());//добавить
 

