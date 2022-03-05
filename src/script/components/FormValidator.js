//класс валидации
export class FormValidator {
  constructor(settings, form) {
    this._form = form
    this._settings = settings
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }
//показать ошибку
_showInputError = (inputElement, errorMessage) => {
  const {errorClass, inputErrorClass} = this._settings
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
}
  //скрыть ошибку
_hideInputError = (inputElement) => {
  const {errorClass, inputErrorClass} = this._settings
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}
  //проверить валидность
_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
  this._showInputError( inputElement, inputElement.validationMessage);
} 
  else {
  this._hideInputError(inputElement);
}
}
_hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
}
_toggleButtonState  = () => {
  const { inactiveButtonClass } = this._settings
  if (this._hasInvalidInput()) {
  this._buttonElement.setAttribute("disabled", true);
  this._buttonElement.classList.add(inactiveButtonClass);
} 
  else {
  this._buttonElement.removeAttribute("disabled");
  this._buttonElement.classList.remove(inactiveButtonClass); 
} 
}; 
_setEventReaders = () => {
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () =>  {
    this._checkInputValidity(inputElement);
    this._toggleButtonState();
    });
  });
};
  
enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    });
  this._setEventReaders();
  }

resetValidForm() {
  this._inputList.forEach((formInput) =>
  { this._hideInputError(formInput);});
    this._toggleButtonState();
}
}

  
