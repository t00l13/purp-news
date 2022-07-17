import './index.css';
import {
     initialPost,
     selectorObject,
     buttonAddNews,

} from '../utils/constants';
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';
import NewsCard from '../components/NewsCard.js';
import PopupWithForm from '../components/PopupWithForm.js';

const burgerIcon = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyPage = document.querySelector('.page');
const formAddNews = document.querySelector('.popup__form');


burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyPage.classList.toggle('lock');
});

const popupAddNews = new Popup(selectorObject.popupAddNewsSelector);
popupAddNews.setEventListeners();

buttonAddNews.addEventListener('click', () => {
    popupAddNews.open();
})

function handlePopupAddNews (inputsData) {
    newsList.addItem(createNewsCard(inputsData));
    formAddNews.reset();
    popupAddNews.close();
};

const formPopupAddNews = new PopupWithForm(selectorObject.popupAddNewsSelector , handlePopupAddNews);
formPopupAddNews.setEventListeners();



function createNewsCard(dataNewsCard) {
    const newsCard = new NewsCard ({data: dataNewsCard}, selectorObject.newsCardId);
    return newsCard.generateCard();
}

const newsList = new Section (
    {
        items:initialPost,
        render: (newsCardItem) => {
            newsList.addItem(createNewsCard(newsCardItem));
        },
    },
    selectorObject.galleryNewsSelector,
);
newsList.renderItems();
console.log(document.querySelector('.news-card-template'));

