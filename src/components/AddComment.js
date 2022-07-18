export default class AddComment {
    constructor(commentsSelector, handleSubmitComment){
        this._commentsSelector = document.querySelector(commentsSelector);

        this._handleSubmitComment = handleSubmitComment;
        this._commentsForm = this._commentsSelector.querySelector('.news-comments__form');
        this._inputList = this._commentsSelector.querySelectorAll('.comments__input');
    }

    toggle() {
        this._commentsSelector.classList.toggle('active');
    }

    close() {
        this._commentsSelector.classList.remove('active');
    }

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        this._commentsForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitComment(this._getInputValues());
            this._commentsForm.reset();
        });
    }
}