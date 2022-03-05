import {Popup} from "./Popup.js"
 export class PopupWithForm extends Popup {
    constructor( popupSelector, valueForms) {
        super(popupSelector);
        this._valueForms = valueForms;
        this._form = this.popupSelector.querySelector(".popup__form")
        
    }
  close() { 
      this._form.reset();
      super.close();
     }  
   
  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this.popupSelector.querySelectorAll('.popup__input');
  
    // создаём пустой объект
    this._formValues = {};
  
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
  
    // возвращаем объект значений
    return this._formValues;
  } 
  setEventListeners() {
    super.setEventListeners()
    this.popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
  
      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._valueForms(this._getInputValues());
  
      this.close();
    });
  } 

  
     
       
} 