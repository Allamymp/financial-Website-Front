document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        register(event);
    });
});

showHidePassword();
validateEmail();

function register(event) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("passwordForm").value;

    const user = {
        name: firstName + " " + lastName,
        email: email,
        password: password
    }

    alert(`Name: ${user.name}, Email: ${user.email}, Password: ${user.password}`);
}