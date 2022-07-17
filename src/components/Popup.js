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

    _handlePopupClick(evt) {
        if (evt.target.classList.contains('popup')) {
          this.close();
        }
      }

    setEventListeners () {
        this._popupBtnClose.addEventListener('click', () => { this.close()});

        this._popupSelector.addEventListener("mousedown", (evt) => this._handlePopupClick(evt));
    }
}