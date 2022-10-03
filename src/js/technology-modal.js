import refsList from './refs';

const refs = refsList();

refs.container.addEventListener('click', onClickModalOpen);
refs.mobContainer.addEventListener('click', onClickModalOpen);
refs.closeBtn.addEventListener('click', onBtnClickClose);
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});

function onClickModalOpen(evt) {
  if (
    evt.target.nodeName === 'IMG' ||
    evt.target.classList.contains('technology__picture-title')
  ) {
    refs.technologyBackdrop.classList.remove('backdrop_is-hidden');
  }

  refs.technologyModal.insertAdjacentHTML(
    'afterbegin',
    createModalContent(evt.target)
  );

  refs.html.style.scrollBehavior = 'auto';

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}`;
  document.body.style.width = '100%';

  window.addEventListener('keydown', onEscClose);
  refs.technologyBackdrop.addEventListener('click', onBackdropClickClose);
}

function onBtnClickClose() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  refs.html.style.scrollBehavior = 'smooth';

  refs.technologyBackdrop.classList.add('backdrop_is-hidden');
  refs.technologyModal.innerHTML = '';

  refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
  window.removeEventListener('keydown', onEscClose);
}

function createModalContent(element) {
  const heading = element.parentNode.querySelector(
    '.technology__picture-title'
  );
  const text = element.parentNode.querySelector('.technology__description');
  const image = element.parentNode.querySelector('img');
  return `<h2 class="technology-modal__title">${heading.textContent}</h2><p class="technology-modal__text">${text.textContent}</p><img class="technology-modal__img" src=${image.src} alt=${image.alt}/>`;
}

function onEscClose(evt) {
  if (evt.key === 'Escape') {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    refs.html.style.scrollBehavior = 'smooth';

    refs.technologyBackdrop.classList.add('backdrop_is-hidden');
    refs.technologyModal.innerHTML = '';
  }

  window.removeEventListener('keydown', onEscClose);
  refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onBackdropClickClose(evt) {
  if (!evt.target.classList.contains('backdrop')) return;

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  refs.html.style.scrollBehavior = 'smooth';

  refs.technologyBackdrop.classList.add('backdrop_is-hidden');
  refs.technologyModal.innerHTML = '';

  refs.technologyBackdrop.removeEventListener('click', onBackdropClickClose);
  window.removeEventListener('keydown', onEscClose);
}
