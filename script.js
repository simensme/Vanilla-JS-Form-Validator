const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Functionality

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Kindly fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If the form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
};

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Manipulate user data in an eventual server-side program
    console.log(user);
};

const processFormData = e => {
     e.preventDefault(); /*Have to prevent default as by default a submit will just refresh the page, assuming there is no backend handling it */
    //  Validate Form
    validateForm();
    // Submit data if the data is valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
};

// Event Listeners
form.addEventListener('submit', processFormData);