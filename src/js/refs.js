export default function refsList() {
  return {
    heroBtn: document.querySelector('.hero__button'),
    orderBackdrop: document.querySelector('.order__backdrop'),
    orderBtn: document.querySelector('.order__button'),
    commentForm: document.querySelector('.form'),
    commentFormInputs: document.querySelectorAll('.form__input'),
    commentFormTextarea: document.querySelector('.form__textarea'),
    fileUplaod: document.querySelector('.input-file'),
    fileUploadLabel: document.querySelector(
      '.input-file .order-form__field-name'
    ),
  };
}
