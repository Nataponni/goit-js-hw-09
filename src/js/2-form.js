document.querySelector('input[name="email"]').classList.add('input-email');
document
  .querySelector('textarea[name="message"]')
  .classList.add('textarea-message');
document.querySelector('button[type="submit"]').classList.add('submit');

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

function saveDataToLocalStorage() {
  const message = textarea.value.trim();
  const email = form.elements.email.value.trim();
  const data = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, data);
}

function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    textarea.value = message;
    form.elements.email.value = email;
  }
}

form.elements.email.addEventListener('input', saveDataToLocalStorage);
textarea.addEventListener('input', saveDataToLocalStorage);

loadDataFromLocalStorage();

function formSubmitHandler(event) {
  event.preventDefault();
  const message = textarea.value;
  const email = form.elements.email.value;
  if (message === '' || email === '') {
    alert('Заповніть всі поля, будь ласка');
    return;
  }

  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log('Email:', email, 'Message:', message);
}

form.addEventListener('submit', formSubmitHandler);
