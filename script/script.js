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

//caroussel 

const carrossel = document.querySelector(".carrossel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const items = document.querySelectorAll(".item");
const itemCount = items.length;
const itemWidth = items[0].clientWidth;

let currentIndex = 0;
let position = 0;

function updatePosition() {
  carrossel.style.transform = `translateX(${position}px)`;
}

function updateButtons() {
  if (position === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (position <= -(itemCount - 3) * itemWidth) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    position += itemWidth;
    updatePosition();
    updateButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < itemCount - 3) {
    currentIndex++;
    position -= itemWidth;
    updatePosition();
    updateButtons();
  }
});

updateButtons();
