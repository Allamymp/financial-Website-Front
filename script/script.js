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

// Selecionando os elementos HTML
const showPasswordButton = document.getElementById('showPassword');
const passwordInput = document.getElementById('passwordForm');
const confirmPasswordInput = document.getElementById('confirmPasswordForm');

// Adicionando um evento de clique no botão "Show Password"
showPasswordButton.addEventListener('click', () => {
  // Verificando se o botão está marcado ou não
  if (showPasswordButton.checked) {
    // Se estiver marcado, tornar os inputs de senha visíveis
    passwordInput.type = 'text';
    confirmPasswordInput.type = 'text';
  } else {
    // Caso contrário, ocultar a senha digitada
    passwordInput.type = 'password';
    confirmPasswordInput.type = 'password';
  }
});