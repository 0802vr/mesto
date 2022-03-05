import {Popup} from "./Popup.js"
export class PopupWithImage extends Popup {
    constructor( popupSelector) {
        super(popupSelector);
        super.setEventListeners();
        
    }
   open(name, link) {
    document.querySelector(".popup__img").alt = name;
    document.querySelector(".popup__text").textContent = name;
    document.querySelector(".popup__img").src = link;
    super.open();
    }
   
} 