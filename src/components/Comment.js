export default class Comment {
    constructor({data}, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._comment = data.comment;
    }

    _getTemplate () {
        const commentsElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.comment')
        .cloneNode('true');

        return commentsElement;
    }

    generateComment() {
        this._commentItem = this._getTemplate();

        this._userName = this._commentItem.querySelector('.user__name');
        this._userComment = this._commentItem.querySelector('.user__comment');

        this._userName.textContent = this._name;
        this._userComment.textContent = this._comment;

        return this._commentItem;
    }
}