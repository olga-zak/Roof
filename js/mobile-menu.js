const refs = {
    menuBtn: document.querySelector('.burger-button'),
    mobileMenu: document.querySelector('.menu'),
}

refs.menuBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);
    refs.mobileMenu.classList.toggle('is-open');
}
console.log(refs.menuBtn)