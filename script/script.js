//common script funcionts


function showHidePassword() {
    const passwordInput = document.getElementById('passwordForm');
    const confirmPasswordInput = document.getElementById('confirmPasswordForm');
    const showPasswordCheckbox = document.getElementById('showPassword');
  
    if (showPasswordCheckbox.checked) {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  }
  
  const showPasswordCheckbox = document.getElementById('showPassword');
  showPasswordCheckbox.addEventListener('change', showHidePassword);
  