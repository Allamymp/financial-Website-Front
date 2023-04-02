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


function register(event) {
event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('passwordForm').value;
  const confirmPassword = document.getElementById('confirmPasswordForm').value;
  
  // Cria um objeto de usuário com os valores obtidos
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
  
  // Obtém o conteúdo atual do arquivo JSON
  let users = [];
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "DB/registerTest.json", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      users = JSON.parse(xhr.responseText);
    }
  };
  xhr.send();
  
  // Adiciona o novo usuário ao array
  users.push(user);
  
  // Salva o array atualizado no arquivo JSON
  const xhr2 = new XMLHttpRequest();
  xhr2.open("POST", "DB/registerTest.json", true);
  xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
      console.log("Novo usuário registrado com sucesso!");
    }
  };
  xhr2.send(JSON.stringify(users));
}

