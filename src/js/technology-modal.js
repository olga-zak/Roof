const refs = {
    container: document.querySelector('.grid'),
    mobContainer: document.querySelector('.technology__mobile-gallery'),
    technologyBackdrop: document.querySelector('.backdrop'),
    technologyModal: document.querySelector('.technology-modal__content'),
    closeBtn: document.querySelector('.modal-button'),
};

refs.container.addEventListener('click', onClickModalOpen);
refs.mobContainer.addEventListener('click', onClickModalOpen);
refs.closeBtn.addEventListener('click', onBtnClickClose);

function onClickModalOpen(evt) {
    if (evt.target.nodeName === 'IMG' || evt.target.classList.contains('technology__picture-title')) {
        refs.technologyBackdrop.classList.remove('backdrop_is-hidden');
    }

    refs.technologyModal.insertAdjacentHTML('afterbegin', createModalContent(evt.target));

    window.addEventListener('keydown', onEscClose);
    refs.technologyBackdrop.addEventListener('click', onBackdropClickClose);
    
}

function onBtnClickClose() {
    refs.technologyBackdrop.classList.add('backdrop_is-hidden');
    refs.technologyModal.innerHTML = '';
    refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
    window.removeEventListener('keydown', onEscClose);
}

function createModalContent(element) {
    const heading = element.parentNode.querySelector('.technology__picture-title');
    const text = element.parentNode.querySelector('.technology__description');
    const image = element.parentNode.querySelector('img');
    return `<h2 class="technology-modal__title">${heading.textContent}</h2><p class="technology-modal__text">${text.textContent}</p><img class="technology-modal__img" src=${image.src} alt=${image.alt}/>`;

}

function onEscClose (evt) {
    if (evt.key === 'Escape') {
        refs.technologyBackdrop.classList.add('backdrop_is-hidden');
        refs.technologyModal.innerHTML = '';
    }

    window.removeEventListener('keydown', onEscClose);
    refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onBackdropClickClose(evt) {
    if (evt.target.classList.contains('backdrop')) {
        refs.technologyBackdrop.classList.add('backdrop_is-hidden');
        refs.technologyModal.innerHTML = '';
    }

    refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
    window.removeEventListener('keydown', onEscClose);
}