const topNav = document.querySelector('.topNav');
const close = document.querySelector('.close');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');

burger.addEventListener('click', (e) => {
    topNav.classList.add('show');
    topNav.classList.remove('hide');
});
close.addEventListener('click', (e) => {
    topNav.classList.remove('show');
    topNav.classList.add('hide');
});
