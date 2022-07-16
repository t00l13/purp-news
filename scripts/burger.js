
const burgerSpan = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyPage = document.querySelector('.page');

burgerSpan.addEventListener('click', () => {
    burgerSpan.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyPage.classList.toggle('lock');
});

