import {sliderPhoto, sliderText, slider} from "./constants.js";
import { openPopup } from "./utils.js";
export class Card {
    constructor(date, cardSelector) {
        this._name = date.name;
        this._link = date.link;
        this._cardSelector = cardSelector;
  }

  // клонируем шаблон
  _getTemplate() {
    const cardListItem = document.querySelector(this._cardSelector).content.cloneNode(true);

    return cardListItem;
  }

  createCard() {
   
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
        this._element.querySelector('.photo-container__img').addEventListener ('click', () => {this._openImagePopup()});}  
        

    _likeCard (evt){
      evt.target.classList.toggle('photo-container__like_active')
      } 
    _deleteCard (evt){
      evt.target.closest('.photo-container').remove();
      } 
     
    _openImagePopup(){
        sliderPhoto.src = this._link;
        sliderPhoto.alt = this._name;
        sliderText.textContent = this._name;
        openPopup (slider)
      } 
      
      

     
}
