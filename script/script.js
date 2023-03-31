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
        alert('Email or password incorretos!');
      }
    })
    .catch(error => console.error(error));
}