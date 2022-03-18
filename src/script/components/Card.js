export class Card {
  constructor(date, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = date.name;
    this._link = date.link;
    this._likes = date.likes;
    this._id = date.id;
    this._userId = date.userId;
    this._ownerId = date.ownerId;



    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._isLiked = this.isLiked();
  }

  // клонируем шаблон
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-container')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".photo-container__img");
    this._elementLike = this._element.querySelector(".photo-container__like");
    this._elementDlt = this._element.querySelector(".photo-container__dlt");
    this._likeCountElement = this._element.querySelector('.photo-container__like_count');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".photo-container__text").textContent = this._name;
    this._setEventListeners()//место для ф-и лайка удаления просмотра фото
    this.setLikes(this._likes)
    if (this._ownerId !== this._userId) {
      this._elementDlt.style.display = 'none'
    }

    return this._element;
  }
  _setEventListeners() {
    this._elementLike.addEventListener('click', () => { this._handleLikeClick(this._id) });
    this._elementDlt.addEventListener('click', () => { this._handleDeleteClick(this._id) });
    this._elementImage.addEventListener('click', () => { this._handleImageClick() });
  }


  // _likeCard (evt){
  //  evt.target.classList.toggle('photo-container__like_active')
  // } 



  deleteCard() {
    this._element.remove();
    this._element = null;

  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

   
   isLiked() {
    const userList = this._likes.find((user) => user._id === this._userId)

    return userList
 } 

_likeCard() { 
  this._elementLike.classList.add('photo-container__like_active') }

  _dislikeCard() {  this._elementLike.classList.remove('photo-container__like_active') }

setLikes(newLikes) {
  this._likes = newLikes
  
  this._likeCountElement.textContent = this._likes.length;

  if (this.isLiked()) { this._likeCard() }
  else { this._dislikeCard() }
}



}
