const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const createAccountForm = document.querySelector('.task-five-form');
const submitButton = document.getElementById('createAccount');

const REGEXP_FULL_NAME = /^[A-Za-z\s]{2,}$/g;
const REGEXP_EMAIL_ADDRESS = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const REGEXP_PHONE = /^\+\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2}$/;
const REGEXP_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{8,}$/;


fullName.addEventListener("change", () => {
    const valueFullName = fullName.value;
    !REGEXP_FULL_NAME.test(valueFullName) && alert("Incorrect entry of full name! \n Try again and be careful.");
});

email.addEventListener("change", () => {
    const valueEmail = email.value;
    !REGEXP_EMAIL_ADDRESS.test(valueEmail) && alert("Incorrect entry of email address! \n Try again and be careful.");
});

phone.addEventListener("change", () => {
    const valuePhone = phone.value;
    !REGEXP_PHONE.test(valuePhone) && alert("Incorrect entry of phone! \n Try again and be careful.");
});

password.addEventListener("change", () => {
    const valuePassword = password.value;
    !REGEXP_PASSWORD.test(valuePassword) && alert("Incorrect entry of password! \n Try again and be careful.");
});

confirmPassword.addEventListener("change", () => {
    const valueConfirmPassword = confirmPassword.value;
    const valuePassword = password.value;
    const REGEXP_CONFIRM_PASSWORD = new RegExp(`\\b${valuePassword}\\b`);
    !REGEXP_CONFIRM_PASSWORD.test(valueConfirmPassword) && alert("The confirmation password doesn't match the password! \n Try again and be careful.");
});