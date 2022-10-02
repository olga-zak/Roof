import refsList from './refs';

const refs = refsList();

refs.heroBtn.addEventListener('click', onHeroBtnClickModalOpen);
refs.orderBtn.addEventListener('click', onOrderBtnClickModalClose);
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});

function onHeroBtnClickModalOpen() {
  refs.orderBackdrop.classList.remove('backdrop_is-hidden');

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;

  window.addEventListener('keydown', onEscClose);
  refs.orderBackdrop.addEventListener('click', onBackdropClickClose);
}

function onOrderBtnClickModalClose() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  refs.orderBackdrop.classList.add('backdrop_is-hidden');

  window.removeEventListener('keydown', onEscClose);
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onEscClose(evt) {
  if (evt.key === 'Escape')
    refs.orderBackdrop.classList.add('backdrop_is-hidden');
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  window.removeEventListener('keydown', onEscClose);
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
}

function onBackdropClickClose(evt) {
  if (!evt.target.classList.contains('backdrop')) return;
  refs.orderBackdrop.classList.add('backdrop_is-hidden');
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  refs.orderBackdrop.removeEventListener('click', onBackdropClickClose);
  window.removeEventListener('keydown', onEscClose);
}
