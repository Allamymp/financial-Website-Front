const form = document.querySelector('form');
const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', login);

function login(event) {
  event.preventDefault();

  const email = document.querySelector('#emailForm').value;
  const senha = document.querySelector('#passwordForm').value;

  fetch('./DB/registerTest.json')
    .then(response => response.json())
    .then(data => {
      if (email === data.login && senha === data.senha) {
        alert('Login realizado com sucesso!');
      } else {
        alert('Email ou senha incorretos!');
      }
    })
    .catch(error => console.error(error));
}