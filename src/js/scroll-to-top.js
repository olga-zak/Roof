import refsList from './refs';

const refs = refsList();

document.addEventListener('scroll', btnVisibility);

refs.scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function btnVisibility() {
  if (window.scrollY > 400) {
    refs.scrollBtn.style.visibility = 'visible';
  } else {
    refs.scrollBtn.style.visibility = 'hidden';
  }
}
