const fs = require('fs');

if (document.querySelector('#btn-login')) {
  const form = document.querySelector('form');
  const btnLogin = document.querySelector('#btn-login');

  btnLogin.addEventListener('click', login);

  function login(event) {
    event.preventDefault();

    const email = document.querySelector('#emailForm').value;
    const password = document.querySelector('#passwordForm').value;

    // Lê o arquivo JSON com os usuários
    const users = JSON.parse(fs.readFileSync('./DB/registerTest.json'));

    // Busca um usuário pelo email e senha
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful!');
    } else {
      alert('Incorrect email or password!');
    }
  }
}

if (document.querySelector('#register-form')) {
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

  function register(event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('passwordForm').value,
      confirmPassword: document.getElementById('confirmPasswordForm').value
    };

    // Lê o arquivo JSON com os usuários
    const users = JSON.parse(fs.readFileSync('./DB/registerTest.json'));

    // Insere um novo usuário no arquivo JSON
    users.push(formData);
    fs.writeFileSync('./DB/registerTest.json', JSON.stringify(users));

    console.log(result);
    // aqui você pode exibir uma mensagem de sucesso para o usuário
  }
}
