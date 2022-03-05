export class Popup {
    constructor( popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        
    }
    _handleEscClose = (evt) =>
        {if (evt.keyCode === 27) 
        {this.close();}
        }
  //открыть попап
  open() {
    this.popupSelector.classList.add ('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    
    }
//закрыть попап
  close() { 
    this._inputList = this.popupSelector.querySelectorAll('.popup__input');
    this._inputList.forEach(input => { input.value = '';});
    this.popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    }  
    
    setEventListeners()
    {
        this.popupSelector.addEventListener('click', (evt) =>
        { if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('popup__close-container')) 
           {this.close();}
        }
        ); 
    }    
} 