import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popupSelector.querySelector('.popup__form');
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._categoryList = this._popupSelector.querySelector('.news-category__list');
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    _getInputValues () {
        this._formValues = {};

        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    }
}