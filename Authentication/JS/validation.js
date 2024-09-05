//! --------------GLobal Variables---------------------------
const firstNameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,}$/;
const lastNameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,}$/;
const userNameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$#!%*?&]{8,64}$/;
const textWorningUsers = document.querySelectorAll(".text-worning-users");

//! --------------Functions--------------------
// ? Add New User
function mainValidation() {
  if (
    firstNameRegex.test(firstNameInput[0].value) &&
    lastNameRegex.test(lastNameInput[0].value) &&
    userNameRegex.test(userNameInput[0].value) &&
    emailRegex.test(emailInput[0].value) &&
    passwordRegex.test(passwordInput.value)
  ) {
    addUserToStorage();
    alert("تم إضافة المستخدم بنجاح!");
    firstNameInput[0].value = "";
    lastNameInput[0].value = "";
    userNameInput[0].value = "";
    emailInput[0].value = "";
    passwordInput.value = "";
    firstNameInput[0].classList.remove("border-green-500");
    lastNameInput[0].classList.remove("border-green-500");
    userNameInput[0].classList.remove("border-green-500");
    emailInput[0].classList.remove("border-green-500");
    passwordInput.classList.remove("border-green-500");
  } else {
    firstNameValidation();
    lastNameValidation();
    userNameValidation();
    emailValidation();
    passwordValidation();
  }
}
document.getElementById("add-user").addEventListener("click", mainValidation);

function firstNameValidation() {
  if (firstNameRegex.test(firstNameInput[0].value)) {
    firstNameInput[0].classList.add("border-green-500");
    firstNameInput[0].classList.remove("border-red-600");
    textWorningUsers[0].classList.add("hidden");
  } else {
    firstNameInput[0].classList.remove("border-green-500");
    firstNameInput[0].classList.add("border-red-600");
    textWorningUsers[0].classList.remove("hidden");
  }
}
function lastNameValidation() {
  if (lastNameRegex.test(lastNameInput[0].value)) {
    lastNameInput[0].classList.add("border-green-500");
    lastNameInput[0].classList.remove("border-red-600");
    textWorningUsers[1].classList.add("hidden");
  } else {
    lastNameInput[0].classList.remove("border-green-500");
    lastNameInput[0].classList.add("border-red-600");
    textWorningUsers[1].classList.remove("hidden");
  }
}
function userNameValidation() {
  if (userNameRegex.test(userNameInput[0].value)) {
    userNameInput[0].classList.add("border-green-500");
    userNameInput[0].classList.remove("border-red-600");
    textWorningUsers[2].classList.add("hidden");
  } else {
    userNameInput[0].classList.remove("border-green-500");
    userNameInput[0].classList.add("border-red-600");
    textWorningUsers[2].classList.remove("hidden");
  }
}
function emailValidation() {
  if (emailRegex.test(emailInput[0].value)) {
    emailInput[0].classList.add("border-green-500");
    emailInput[0].classList.remove("border-red-600");
    textWorningUsers[3].classList.add("hidden");
  } else {
    emailInput[0].classList.remove("border-green-500");
    emailInput[0].classList.add("border-red-600");
    textWorningUsers[3].classList.remove("hidden");
  }
}
function passwordValidation() {
  if (passwordRegex.test(passwordInput.value)) {
    passwordInput.classList.add("border-green-500");
    passwordInput.classList.remove("border-red-600");
    textWorningUsers[4].classList.add("hidden");
  } else {
    passwordInput.classList.remove("border-green-500");
    passwordInput.classList.add("border-red-600");
    textWorningUsers[4].classList.remove("hidden");
  }
}

firstNameInput[0].addEventListener("focusout", firstNameValidation);
lastNameInput[0].addEventListener("focusout", lastNameValidation);
userNameInput[0].addEventListener("focusout", userNameValidation);
emailInput[0].addEventListener("focusout", emailValidation);
passwordInput.addEventListener("focusout", passwordValidation);
