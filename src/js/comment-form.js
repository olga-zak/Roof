import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refsList from './refs';
const throttle = require('lodash.throttle');

const refs = refsList();
const STORAGE_KEY = 'comment_form_data';
const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

refs.commentForm.addEventListener('input', throttle(onInputDataSave, 500));
refs.commentForm.addEventListener('submit', onCommentFormSubmit);

formAutofill();

function onInputDataSave(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formAutofill() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.commentFormTextarea.value =
      savedData[refs.commentFormTextarea.name] || '';
    refs.commentFormInputs.forEach(
      input => (input.value = savedData[input.name] || '')
    );
  }
}

function onCommentFormSubmit(evt) {
  evt.preventDefault();
  if (
    [...refs.commentFormInputs].some(input => input.value === '') ||
    refs.commentFormTextarea.value === '' ||
    refs.commentFormTextarea.value.match(/^\s+$/)
  )
    return Notify.failure('Palun täitke kõik väljad!');

  refs.commentForm.reset();
  localStorage.removeItem(STORAGE_KEY);
  Notify.success('Aitäh! Teie sõnum on edukalt edastatud!');
}
