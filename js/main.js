const form = document.getElementById('contact');

const success = document.getElementById('success');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

// Storing the submitted form
function storeForm() {
    // Using sessionStorage instead of localStorage for testing purposes
    sessionStorage.setItem('name', document.getElementById('name').value);
    sessionStorage.setItem('email', document.getElementById('email').value);
    sessionStorage.setItem('tel', document.getElementById('tel').value);
    sessionStorage.setItem('url', document.getElementById('url').value);
    sessionStorage.setItem('address', document.getElementById('address').value);
    success.style.display = 'initial';
    console.log(sessionStorage);
}

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.textContent = ''; 
    } else {
        showError();
    }
});

form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    } else {
        storeForm();
    }
});

// Error messages for email field
function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }

}