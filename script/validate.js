//показать ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_active');
  inputElement.classList.add('popup__input_type_error');
}
  //скрыть ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_active');
  errorElement.textContent = '';
}
  //проверить валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage);
} 
  else {
  hideInputError(formElement, inputElement);
}
}
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
}
const toggleButtonState  = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add('popup__save_disabled');
} 
  else {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove('popup__save_disabled'); 
} 
}; 
const setEventReaders = (formElement, inputSelector) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector('.popup__save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    });
  });
};
  
const enableValidation = ({formSelector, inputSelector}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    });
  setEventReaders(formElement, inputSelector);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active"
});
  
  
