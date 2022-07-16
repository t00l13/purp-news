const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.link__opened');
const closePopupBtn = document.querySelector('.popup__btn-close');

openPopupBtn.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})
