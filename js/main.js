function storeForm() {

    // Using sessionStorage instead of localStorage for testing purposes
    sessionStorage.setItem('name', document.getElementById('name').value);
    sessionStorage.setItem('email', document.getElementById('email').value);
    sessionStorage.setItem('tel', document.getElementById('tel').value);
    sessionStorage.setItem('url', document.getElementById('url').value);
    sessionStorage.setItem('address', document.getElementById('address').value);

    console.log(sessionStorage);
}