import {Popup} from "./Popup.js"
export class PopupWithImage extends Popup {
    constructor( popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector(".popup__img");
        this._imageText = this._popup.querySelector(".popup__text");
      
         
        
    }
   open(name, link) {
    this._image.alt = name;
    this._imageText.textContent = name;
    this._image.src = link;
    super.open();
    }
   
} 