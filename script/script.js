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
let nameInput = fieldset.querySelector('.popup__input_name');
let jobInput = fieldset.querySelector('.popup__input_job');
//функции и их вызов
function addProfile(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add ('popup_opened');
}
function closePopup () {
    popup.classList.remove ('popup_opened');
}
function saveProfile(evt){
    evt.preventDefault();
    let newName = nameInput.value;
    let newJob = jobInput.value;
    profileName.textContent = newName;
    profileJob.textContent = newJob;
    closePopup ()
}
//работа кнопок_добавить профиль_закрыть профиль_сохранить профиль
editButton.addEventListener ('click', addProfile);
closeForm.addEventListener ('click', closePopup);
form.addEventListener('submit', saveProfile);