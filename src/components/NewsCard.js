export default class NewsCard {
    constructor({data}, templateSelector) {
        this._templateSelector = templateSelector;
        this._category = data.category;
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
        this._newsCategory = this._news.dataset;
        this._newsHead = this._news.querySelector('.news__head');

        this._newsTitle.textContent = this._title;
        this._newsDescription.textContent = this._description;
        this._newsCategory.textContent = this._category;
        this._newsHead.textContent = this._category;

        return this._news;
    }
}