const form = document.querySelector('form');

const key = "feedback-form-state";
const textarea = form.elements.message;
const emailInput = form.elements.email;
let dataObject = {};

const savedData = JSON.parse(localStorage.getItem(key)) || {};
textarea.value = savedData.message || '';
emailInput.value = savedData.email || '';

form.addEventListener('input', addToLocalStorage);
form.addEventListener('submit', checkInput);

function addToLocalStorage(event) {

    const emailValue = event.currentTarget.elements.email.value.trim();
    const messageValue = event.currentTarget.elements.message.value.trim();
    dataObject = { email: emailValue, message: messageValue };

    if (emailValue === '' && messageValue === '') {
        return
    }

    localStorage.setItem(key, JSON.stringify({
        email: emailValue,
        message: messageValue
    }));
};

function checkInput(event) {
    event.preventDefault();

    if (emailInput.value === '' || textarea.value === '') {
        return alert('All form fields must be filled in!');
    } else {
        console.log(dataObject);
    }

    localStorage.removeItem(key);
    form.reset();
};
