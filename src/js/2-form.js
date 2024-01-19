const form = document.querySelector('form');

const key = "feedback-form-state";
const textarea = form.elements.message;
const emailInput = form.elements.email;

const savedData = JSON.parse(localStorage.getItem(key)) || {};
textarea.value = savedData.message || '';
emailInput.value = savedData.email || '';

form.addEventListener('input', addToLocalStorage);
form.addEventListener('submit', checkInput);

function addToLocalStorage(event) {

    localStorage.setItem(key, JSON.stringify({
        email: event.currentTarget.elements.email.value.trim(),
        message: event.currentTarget.elements.message.value.trim()
    }));
};

function checkInput(event) {
    event.preventDefault();
    const dataObject = {};

    if (emailInput.value === '' || textarea.value === '') {
        return alert('All form fields must be filled in!');
    } else {
        dataObject.email = emailInput.value;
        dataObject.message = textarea.value;
        console.log(dataObject);
    }

    localStorage.removeItem(key);
    form.reset();
};
