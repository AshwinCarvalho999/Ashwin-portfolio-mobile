document.querySelector('#submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'email should be in lowercase';
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  }
});

const nameForm = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const messageForm = document.querySelector('#message');
function handleChange() {
  const formData = {
    fullName: nameForm.value,
    email: emailForm.value,
    message: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    nameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    messageForm.value = formObject.message;
  }
});
nameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;
