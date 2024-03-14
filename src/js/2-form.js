document.querySelector('input[name="email"]').classList.add('input-email');
document
  .querySelector('textarea[name="message"]')
  .classList.add('textarea-message');
document.querySelector('button[type="submit"]').classList.add('submit');
const labels = document.querySelectorAll('form.feedback-form label');
if (labels.length > 0) {
  labels[0].classList.add('label');
  labels[1].classList.add('label');
}

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

function formSubmitHandler(event) {
  event.preventDefault();
  const message = textarea.value;
  const email = form.elements.email.value;
  if (message === '' || email === '') {
    alert('Заповніть всі поля, будь ласка');
    return;
  }
  const data = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, data);
}

form.addEventListener('submit', formSubmitHandler);

const jsn = localStorage.getItem(STORAGE_KEY);
const data = JSON.parse(jsn);
textarea.value = data.message;
form.elements.email.value = data.email;
console.log(data);
