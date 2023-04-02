const form = document.querySelector('form');
const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', login);

function login(event) {


  const email = document.querySelector('#emailForm').value;
  const password = document.querySelector('#passwordForm').value;

  fetch('./DB/registerTest.json')
    .then(response => response.json())
    .then(data => {
      const { login, senha } = data;

      if (email === login && password === senha) {
        alert('Login successful!');
      } else {
        alert('Incorrect email or password!');
      }
    })
    .catch(error => console.error(error));
}
