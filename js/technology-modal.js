const refs = {
    container: document.querySelector('.grid'),
    technologyBackdrop: document.querySelector('.backdrop'),
    technologyModal: document.querySelector('.technology-modal__content'),
    closeBtn: document.querySelector('.technology-button'),
};

refs.container.addEventListener('click', onClickModalOpen);
refs.closeBtn.addEventListener('click', onClickClose);

function onClickModalOpen(evt) {
    if (evt.target.nodeName === 'IMG' || evt.target.classList.contains('technology__picture-title')) {
        refs.technologyBackdrop.classList.toggle('backdrop_is-hidden');
    }

    refs.technologyModal.insertAdjacentHTML('afterbegin', createModalContent(evt.target));
    
}

function onClickClose() {
    refs.technologyBackdrop.classList.toggle('backdrop_is-hidden');
    refs.technologyModal.innerHTML = '';
}

function createModalContent(element) {
    const heading = element.parentNode.querySelector('.technology__picture-title');
    const text = element.parentNode.querySelector('.technology__description');
    const image = element.parentNode.querySelector('img');
    return `<h2 class="technology-modal__title">${heading.textContent}</h2><p class="technology-modal__text">${text.textContent}</p><img class="technology-modal__img" src=${image.src} alt=${image.alt}/>`;

}