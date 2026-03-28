// const burgerWrap = document.querySelector('.menu-header__burger');
// const burgerPopup = document.querySelector('.menu-header__content');
// const burgerMenu = document.querySelector('.menu-header__points');
// const burgerClose = document.querySelector('.menu-header__burger-close');

// burgerWrap.addEventListener('click', function(e) {
//     console.log('салага, работай пожалуйста работай')
//     burgerPopup.classList.add('active');
//     burgerMenu.classList.add('active');
//     burgerWrap.classList.remove('active');
//     burgerClose.classList.add('active');

// })

// burgerClose.addEventListener('click', function(e) {
//     burgerPopup.classList.remove('active');
//     burgerMenu.classList.remove('active');
//     burgerWrap.classList.add('active');
//     burgerClose.classList.remove('active');
// })

// console.log('djdjd')

const burgerBtn = document.querySelector('.menu-header__burger');
const menu = document.querySelector('.menu-header__content');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        // Переключаем ОДИН класс active на кнопке и на меню
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });
}