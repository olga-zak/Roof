import refsList from './refs';

const refs = refsList();

refs.heroBtn.addEventListener('click', onHeroBtnClickModalOpen);
refs.orderBtn.addEventListener('click', onOrderBtnClickModalClose);

function onHeroBtnClickModalOpen() {
  refs.orderBackdrop.classList.remove('backdrop_is-hidden');
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  window.addEventListener('keydown', onEscClose);
  refs.orderBackdrop.addEventListener('click', onBackdropClickClose);
}

function onOrderBtnClickModalClose() {
  refs.orderBackdrop.classList.add('backdrop_is-hidden');
  document.body.style.position = '';

  window.removeEventListener('keydown', onEscClose);
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onEscClose(evt) {
  if (evt.key === 'Escape')
    refs.orderBackdrop.classList.add('backdrop_is-hidden');
  document.body.style.position = '';
  window.removeEventListener('keydown', onEscClose);
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onBackdropClickClose(evt) {
  if (!evt.target.classList.contains('backdrop')) return;
  refs.orderBackdrop.classList.add('backdrop_is-hidden');
  document.body.style.position = '';
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
  window.removeEventListener('keydown', onEscClose);
}
