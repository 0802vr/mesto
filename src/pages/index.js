import './index.css'; 
import { Section } from "../script/components/Section.js"
import { Card } from "../script/components/Card.js"
import { FormValidator } from "../script/components/FormValidator.js"
import { PopupWithForm } from "../script/components/PopupWithForm.js"
import { PopupWithImage } from "../script/components/PopupWithImage.js"
import { UserInfo } from "../script/components/UserInfo.js"
import { editButton, addButton, popupEdit, profileForm, popupAdd, formAdd, cardList, enableValidator, cardTemplateSelector, inputName, inputJob, avatarButton, avatarPhoto, popupAvatar, popupformAvatar, inputAvatar } from "../script/utils/constants.js"
import { Api } from "../script/components/Api.js"

let userId

const api = new Api({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37', headers: { authorization: '02137663-47a8-479f-86ad-354889aa2dd3', 'Content-Type': 'application/json' } })
api.getUserInfo()
  .then(res => {
     
    unfoValueUser.setUserInfo(res.name, res.about, res.avatar)
    userId = res._id
  })
api.getInitialCards()
  .then(checklist => {
    checklist.forEach(date => {
      const card = createCard({ name: date.name, link: date.link, likes: date.likes, id: date._id, userId: userId, ownerId: date.owner._id })
      section.addItems(card)
    })

  })

//работа с Card
function createCard(date) {
  const card = new Card(
    date,
    cardTemplateSelector,
    () => {
      popupBigImage.open(date.name, date.link)
    },
    (id) => {
      cardDelete.open()
      cardDelete.changeSubmitHandler(() => {
        api.removeCard(id)
          .then(res => {

            card.deleteCard()
          })
          .catch((err) => {
            console.log(err);
          });
      })

    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
      }
      else {
        api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
      }

    }

  )
  const cardListItem = card.generateCard()
  return cardListItem // возваращаете готовую карточку
}
//ф-я сохранения карты
const saveAddCard = (date) => {
  cardMod.getButtonText('Сохранение...');
  api.addCard({ name: date.inputFormName, link: date.inputFormAddition })
    .then(res => {
      const card = createCard({ name: res.name, link: res.link, likes: res.likes, id: res._id, userId: userId, ownerId: res.owner._id });
      section.addItems(card);
    })
    .finally(() =>{
      cardMod.getButtonText('Сохранить');
    });

}

//ф-я сохранения нового профиля
function saveProfile(element) {
  profileMod.getButtonText('Сохранение...');
  const { inputFormName, inputFormAddition } = element
  api.editProfile(inputFormName, inputFormAddition)
    .then(res => {
      unfoValueUser.setUserInfo(res.name, res.about)
    })
    .finally(() =>{
      profileMod.getButtonText('Сохранить');
    });
}
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
function openAvatarProfile(){
  avatarFormValidator.resetValidForm();
  inputAvatar.value = unfoValueUser.getUserInfo().userAvatar; 
  avatarMod.open();

}
function saveAvatarProfile(element){
  avatarMod.getButtonText('Сохранение...');
  const { inputFormAddition } = element
  api.addAvatar({avatar:inputFormAddition})
  .then((res) => {
    console.log(res)
   unfoValueUser.setUserInfo( res.name, res.about, res.avatar);
    
  })
  .finally(() =>{   
    avatarMod.getButtonText('Сохранить');
  });
}



const profileMod = new PopupWithForm(popupEdit, saveProfile);
const unfoValueUser = new UserInfo({ name: ".profile__name", info: ".profile__job", userAvatar: ".profile__avatar" });
const editFormValidator = new FormValidator(enableValidator, profileForm); //вальдация профиля
//карта
const addCardFormValidator = new FormValidator(enableValidator, formAdd); //валидация карточки
const popupBigImage = new PopupWithImage(".popup_photo")
//работа с Section
const section = new Section({ items: [], renders: createCard }, cardList)
const cardMod = new PopupWithForm(popupAdd, saveAddCard);
const cardDelete = new PopupWithForm('.popup_delete');
const avatarMod = new PopupWithForm('.popup_avatar', saveAvatarProfile);
const avatarFormValidator = new FormValidator(enableValidator, popupformAvatar);



//валидация формы редактирования профиля
editFormValidator.enableValidation();
//валидация формы добавления новой карточки
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//профиль



//навешиваем обработчики
profileMod.setEventListeners();
cardMod.setEventListeners();
popupBigImage.setEventListeners();
cardDelete.setEventListeners();
avatarMod.setEventListeners();
section.renderItems();



//обработчики работы с профилем
editButton.addEventListener('click', () => openEditProfile());//добавить
addButton.addEventListener('click', () => openAddProfile());//добавить
avatarButton.addEventListener('click', () => openAvatarProfile());//добавить

