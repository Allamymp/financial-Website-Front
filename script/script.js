const form = document.querySelector('form');
const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', login);

function login(event) {
  event.preventDefault();

  const email = document.querySelector('#emailForm').value;
  const password = document.querySelector('#passwordForm').value;

  fetch('./DB/registerTest.json')
    .then(response => response.json())
    .then(data => {
      if (email === data.login && password === data.senha) {
        alert('Login sucessful!');
      
      } else {
        alert('Incorrect email or password!');
      }
    })
    .catch(error => console.error(error));
}

// Selecting html elements
const showPasswordButton = document.getElementById('showPassword');
const passwordInput = document.getElementById('passwordForm');
const confirmPasswordInput = document.getElementById('confirmPasswordForm');

// Adding a click event to the "Show Password" button
showPasswordButton.addEventListener('click', () => {
  // Checking if the button is checked or not
  if (showPasswordButton.checked) {
    // If checked, make password entries visible
    passwordInput.type = 'text';
    confirmPasswordInput.type = 'text';
  } else {
    // Otherwise, hide the entered password
    passwordInput.type = 'password';
    confirmPasswordInput.type = 'password';
  }
});