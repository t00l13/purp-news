export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._popupBtnClose = this._popupSelector.querySelector('.popup__btn-close');
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');
    }
    setEventListeners () {
        this._popupBtnClose.addEventListener('click', () => { this.close()});
    }
}