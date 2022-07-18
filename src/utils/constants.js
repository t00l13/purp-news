const initialPost = [
    {
      category: 'Nike',
      title: 'Nike объявила о полном уходе с российского рынка',
      description: 'На российском сайте компании появилось сообщение, что монобрендовые магазины Nike «больше не откроются». Компания присутствовала в России с 1994 года, в начале марта она приостановила онлайн-продажи в стране'
    }, 
    {
        category: 'Haliky',
        title: 'Бренд Haliky открыл свой первый флагменский магазин в Москве',
        description: 'Рады представить вам первый флагманский магазин от Haliky. Часы-работы: 12:00-22:00 Адрес:Ул. Тверская 20/1 стр. 4. Так же в пятницу мы отмечаем открытие нашего первого флагманского магазина в Москве! С нас бесплатный алкоголь, лучшие диджеи Москвы эксклюзивные айтемы в магазине.'
    }, 
    {
        category: 'Марк Родовский(Yumms)',
        title: 'Марк Родовский хочет добавить в SOLDOUTMARKET отдельнйы раздел для кроссовок',
        description: 'Так как находить интересные пары стало сложнее, мы подумываем над тем, чтобы сделать небольшой реселл-шоп в рамках уже существующего Солдаутмаркета, где будет скромный сток ходовых недорогих позиций, а также возможность привезти вам пару под заказ за 3-4 недели.'
    },
    {
        category: 'Марк Родовский(Yumms)',
        title: 'Марк Родовский открыл новый магазин "YUMMS"',
        description: 'В Москве по адресу: Кривоколенный пер., 10 строение 6, Марк Родовский открыл новый магазин-кафе под названием "YUMMS", в этом кафе можно попробывать мороженное, кофе и т.д, а так же купить новый мерч'
    },
    {
        category: 'SRC Merch',
        title: 'Последний дроп от SRC Merch продался за 2 минуты',
        description: 'Последний дроп "STAR ZIP-HOODIE", разлетелся за 2 минуты поставив ноый рекорд в ру-стритвире! Данила Лебедев заработал около 1.5 миллиона за 2 минуты распродав 200 зип-худи'
    },
];

const commentsList = [
    {
        name:'hater',
        comment: 'АХахаа какая же фигня',
    },
    {
        name:'Toolie',
        comment: 'Согласен фиолетовый сейчас в моде! Всю неделю буду ходить только в фиолетовом',
    },
    {
        name:'nastiem',
        comment: 'Фиолетовый мой любимый! Крутая статья',
    },

];

const selectorObject = {
    popupAddNewsSelector : '.popup__type_add-news',
    popupProfileSelector : '.popup__type_profile',
    galleryNewsSelector : '.gallery-news__list',
    galleryCommentsSelector: '.news__comment__list',
    commentsSelector: '.news__comments',
    newsCardId: '#news-card',
    newsCommentId: '#news-comment',
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__job',
}

const buttonProfile = document.querySelector('.header__profile');
const buttonAddNews = document.querySelector('.header__add-news');
const buttonComments = document.querySelector('.news__comment');
const buttonEditProfile = document.querySelector('.profile-edit__btn');
const popupProfileInputs = document.querySelectorAll('.profile__input');

export {
    initialPost,
    commentsList,
    selectorObject,
    buttonProfile,
    buttonAddNews,
    buttonComments,
    buttonEditProfile,
    popupProfileInputs,
};