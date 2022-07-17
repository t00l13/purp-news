export default class NewsCard {
    constructor({data}, templateSelector) {
        this._templateSelector = templateSelector;
        this._title = data.title;
        this._description = data.description;
    }

    _getTemplate () {
        const newsCardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.news')
        .cloneNode('true');

        return newsCardElement;
    }

    generateCard() {
        this._news = this._getTemplate();

        this._newsTitle = this._news.querySelector('.news__title');
        this._newsDescription = this._news.querySelector('.news__subtitle');

        this._newsTitle.textContent = this._title;
        this._newsDescription.textContent = this._description;

        return this._news;
    }
}