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

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();
    const emailError = document.getElementById("emailError");

    if (email.length === 0) {
        emailError.textContent = "Email is required";

    } else if (!validateEmail(email)) {
        emailError.textContent = "Invalid email address";

    } else {
        emailError.textContent = "";
    }
});