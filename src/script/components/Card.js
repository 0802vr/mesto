export class Card {
    constructor(date, cardSelector,handleCardClick) {
        this._name = date.name;
        this._link = date.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
  }

  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document.querySelector(this._cardSelector).content.cloneNode(true);

    return cardListItem;
  }

  generateCard() {
   
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".photo-container__img");
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector(".photo-container__text").textContent = this._name;
        this._setEventListeners ()//место для ф-и лайка удаления просмотра фото
        return this._element;
      }  
      _setEventListeners () {
        this._element.querySelector(".photo-container__like").addEventListener('click',(evt) => { this._likeCard(evt)});
        this._element.querySelector(".photo-container__dlt").addEventListener('click', (evt) => { this._deleteCard(evt)});
        this._element.querySelector('.photo-container__img').addEventListener ('click', () => {this._handleImageClick()});}  
        

    _likeCard (evt){
      evt.target.classList.toggle('photo-container__like_active')
      } 
    _deleteCard (evt){
      evt.target.closest('.photo-container').remove();
      } 
     
     _handleImageClick(){
       this._handleCardClick(this._name, this._link);
      } 
      
      

     
}
