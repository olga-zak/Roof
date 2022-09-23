const refs = {
    container: document.querySelector('.grid'),
    technologyModal: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.technology-button'),
};

refs.container.addEventListener('click', onClickModalOpen);
refs.closeBtn.addEventListener('click', onClickClose);

function onClickModalOpen(evt) {
    if (evt.target.nodeName === 'IMG' || evt.target.classList.contains('technology__picture-title')) {
        refs.technologyModal.classList.toggle('backdrop_is-hidden');
    }
    
}

function onClickClose() {
     refs.technologyModal.classList.toggle('backdrop_is-hidden');
}