const initialPost = [
    {
      title: 'The owner of Zara announced his intention to return to Russia "as soon as possible"',
      description: 'Spanish retailer Inditex closed its stores in the country in March. The company is monitoring the situation and would like to return when possible, its CEO said.'
    }, 
    {
        title: 'Iconic Dior boutique on Avenue Montaigne reopens in Paris',
        description: 'After two and a half years of reconstruction, the Dior boutique in Paris will reopen its doors on March 6 at the famous address of 30 Avenue Montaigne. The legendary mansion that enchanted Christian Dior in 1946 has been a witness to the collections of the fashion house for more than seven decades.'
    }, 
    {
        title: 'Purple and orange - the most fashionable color combination of spring',
        description: 'We all remember that Pantone announced the color of 2022 lilac, very close to purple, or, as the Very Peri Institute called it. And before that, we saw plum, lilac, eggplant and other similar shades in the spring-summer 2022 collections of Valentino, Isabel Marant and Lanvin.'
    },
];

const selectorObject = {
    popupAddNewsSelector : '.popup__type_add-news',
    galleryNewsSelector : '.gallery-news__list',
    newsCardId: '#news-card',
}

const buttonAddNews = document.querySelector('.header__add-news');

export {
    initialPost,
    selectorObject,
    buttonAddNews
};