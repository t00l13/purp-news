import './index.css';
import {
     initialPost,
     commentsList,
     selectorObject,
     buttonAddNews,
     buttonComments
} from '../utils/constants';
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';
import NewsCard from '../components/NewsCard.js';
import PopupWithForm from '../components/PopupWithForm.js';
import AddComment from '../components/AddComment.js';
import Comment from '../components/Comment.js';

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

const sectionNewsComments = new AddComment(selectorObject.commentsSelector);
sectionNewsComments.setEventListeners();

buttonAddNews.addEventListener('click', () => {
    popupAddNews.open();
})

buttonComments.addEventListener('click', () => {
    sectionNewsComments.toggle();
})


function createNewsCard(dataNewsCard) {
    const newsCard = new NewsCard ({data: dataNewsCard}, selectorObject.newsCardId);
    return newsCard.generateCard();
}

const newsList = new Section (
    {
        items:initialPost,
        render: (newsCardItem) => {
            newsList.prependItem(createNewsCard(newsCardItem));
        },
    },
    selectorObject.galleryNewsSelector,
);
newsList.renderItems();

function createNewsComments(dataNewsComment) {
    const newsComment = new Comment ({data: dataNewsComment}, selectorObject.newsCommentId);
    
    return newsComment.generateComment();
}

const newsCommentList = new Section (
    {
        items:commentsList,
        render: (newsCommentItem) => {
            newsCommentList.appendItem(createNewsComments(newsCommentItem));
        },
    },
    selectorObject.galleryCommentsSelector,
)
newsCommentList.renderItems();


function handlePopupAddNews (inputsData) {
    newsList.prependItem(createNewsCard(inputsData));
    formAddNews.reset();
    popupAddNews.close();
};

function handleSectionAddComments (inputsData) {
    newsCommentList.appendItem(createNewsComments(inputsData));
}


const formPopupAddNews = new PopupWithForm(selectorObject.popupAddNewsSelector , handlePopupAddNews);
formPopupAddNews.setEventListeners();

const formAddComment = new AddComment(selectorObject.commentsSelector, handleSectionAddComments);
formAddComment.setEventListeners();


