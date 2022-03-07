export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') { this.close(); }
    }
    //открыть попап
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);

    }
    //закрыть попап
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('popup__close-container')) { this.close(); }
        }
        );
    }
} 