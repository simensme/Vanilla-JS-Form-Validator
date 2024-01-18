const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Functionality

let isValid = false;
const validateForm = () => {
    isValid = form.checkValidity();
    message.textContent = 'Kindly fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    
};

const processFormData = e => {
     e.preventDefault(); /*Have to prevent default as by default a submit will just refresh the page, assuming there is no backend handling it */
    //  Validate Form
    validateForm();
};

// Event Listeners
form.addEventListener('submit', processFormData);