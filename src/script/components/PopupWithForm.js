import { Popup } from "./Popup.js"
export class PopupWithForm extends Popup {
  constructor(popupSelector, valueForms) {
    super(popupSelector);
    this._handleSubmit = valueForms;
    this._form = this._popup.querySelector(".popup__form")
    // достаём все элементы полей
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._button =  this._form.querySelector('.popup__save');
  }

  setButtonText(text){
    this._button.textContent = text; 
  }
  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {


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
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleSubmit(this._getInputValues());

       
    });
  }
  changeSubmitHandler(newSubmitHandler){
    this._handleSubmit = newSubmitHandler
  }



} 