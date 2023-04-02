const form = document.querySelector('#login-form');
const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  login();
});

function login() {
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
