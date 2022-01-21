//все, что связано с профилем
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const editButton = profile.querySelector('.profile__edit-button');
//все, что связано с popup профилем
const popupEdit = document.querySelector('.popup_edit');
const closeForm = popupEdit.querySelector('.popup__close-container');
const profileForm =  document.querySelector('.popup__form-edit');
const fieldset = profileForm.querySelector('.popup__fieldset');
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
///overlay
const overlayProfile = popupEdit.querySelector(".popup__overlay");
const overlayPlace = popupAdd.querySelector(".popup__overlay");
const overlayPhoto = slider.querySelector(".popup__overlay");

function renderCard () {
    
  initialCards.forEach( function (element){
    const el = createCard (element)
    card.append (el)
  })
}
renderCard ();//функция для карт
function likeCard (evt){
  evt.target.classList.toggle('photo-container__like_active')
} 
function deleteCard (evt){
  evt.target.closest('.photo-container').remove();
}
//работа со слайдами
function openImagePopup(evt){
  sliderPhoto.src = evt.target.src;
  sliderPhoto.alt = evt.target.textContent;
  sliderText.textContent = evt.target.alt
  openPopup (slider)
}
//ф-я новой карты
function createCard (element)  {
  const templateClone = template.cloneNode(true);//клонировали карту
  const templateCloneImg = templateClone.querySelector(".photo-container__img");
  templateCloneImg.src = element.link;
  templateCloneImg.alt = element.name;
  templateClone.querySelector(".photo-container__text").textContent = element.name;
  setEventListeners (templateClone)//место для ф-и лайка удаления просмотра фото
  return templateClone
}
//ф-я работы карты
function setEventListeners (templateClone) {
  const likeBtn = templateClone.querySelector(".photo-container__like");
  const deleteBtn = templateClone.querySelector(".photo-container__dlt");
  const photo = templateClone.querySelector('.photo-container__img'); 
   //лайки карты
  likeBtn.addEventListener('click', likeCard);
//удаление карты
  deleteBtn.addEventListener('click', deleteCard);
//открытие попап карта
  photo.addEventListener ('click', openImagePopup);}
//закрытие слайда
//общие ф-и открыть и закрыть попап
function openPopup (popup) {
  popup.classList.add ('popup_opened');
  document.addEventListener("keydown", keyHandler);
}
function closePopup (popup) {
  popup.classList.remove ('popup_opened');
  document.removeEventListener("keydown", keyHandler);
}
function keyHandler(evt) {
  
  if (evt.key === 'Escape') {
  const popup = document.querySelector('.popup_opened');
  closePopup (popup);
}
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
  formAdd.reset();
  closePopup (popupAdd);
 
}
function resetForm (formElement){
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));                               
  inputList.forEach((inputElement) => {                                
    hideInputError(formElement, inputElement);            
});
}
function closePopupEdit(evt) {
  closePopup(popupEdit, evt)
  resetForm(popupEdit, evt)
  
}
function closePopupAdd(evt) {
closePopup(popupAdd, evt)
resetForm(popupAdd, evt)
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