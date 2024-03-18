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

  var resultObject = {
    email: email,
    message: message
};
console.log(resultObject);
}

form.addEventListener('submit', formSubmitHandler);
