import refsList from './refs';

const refs = refsList();

refs.fileUplaod.addEventListener('change', fileUpload);

function fileUpload(evt) {
  const [file] = evt.target.files;
  const { name: fileName } = file;
  refs.fileUploadLabel.textContent = fileName;
}
