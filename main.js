const form = document.querySelector("form");
const formControl = document.querySelector(".form_control");
const emailInput = document.querySelector(".form_control input");
const submitButton = document.getElementById("btn");
let errorIcon = document.querySelector(".error_icon");
// let errorIcon = document.getElementsByClassName('')
const errorMsg = document.querySelector(".error_msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   errorIcon.style.innerHTML = "<span> Hello</span>";
// });

submitButton.addEventListener("click", (e) => {
  const emailInputValue = emailInput.value.trim();
  e.preventDefault();
  if (validateEmail(emailInputValue)) {
    errorMsg.classList.add("hidden");
    errorIcon.classList.add("hidden");
    formControl.classList.remove("error");
  } else {
    formControl.classList.add("error");
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
