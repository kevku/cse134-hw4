/* main.js */


const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = email.nextElementSibling.nextElementSibling;
const givenName = document.getElementById("name-area");
const nameError = givenName.nextElementSibling.nextElementSibling;
const message = document.getElementById("message-area");
const messageError = message.nextSibling.nextSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nameRegEXP =
  /^[a-z ,.'-]+$/i;
window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    email.className = "invalid";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    emailError.textContent = "This is not an Email!";
    emailError.className = "error active";
  } else {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "error";
  }
});

function setTheme(theme) {
  const root = document.documentElement;
  const aboutSection = document.getElementById("about_me");
  const workSection = document.getElementById("work_display");
  const contactSection = document.getElementById("contact_info");
  const body = document.querySelector("body");
  if (theme === 'light') {
    root.style.setProperty('background', 'var(--light-blue-color)');
    root.style.setProperty('color','var(--text-color-light)');
    aboutSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    workSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    contactSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    body.style.setProperty('background-color', 'var(--light-blue-color)');
    body.style.setProperty('color', 'var(--text-color-light)');
  }

  else {
    root.style.setProperty('background', 'var(--background-color)');
    root.style.setProperty('color','var(--text-color)');
    aboutSection.style.setProperty('background-color', 'var(--darkgray-color)');
    workSection.style.setProperty('background-color', 'var(--lightgray-color)');
    contactSection.style.setProperty('background-color', 'var(--darkgray-color)');
    body.style.setProperty('background-color', 'var(--background-color)');
    body.style.setProperty('color', 'var(--text-color)');
  }
}

function toggleTheme() {
  console.log('clicked checkbox');
  const currTheme = localStorage.getItem('theme') || 'normal';
  let newTheme = '';
  if (currTheme === 'normal'){
    newTheme = 'light';
  }
  else {
    newTheme='normal';
  }
  localStorage.setItem('theme',newTheme);
  setTheme(newTheme);
}

function setSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme){
    setTheme(savedTheme);
    document.getElementById('themeToggle').checked = savedTheme === 'light';
  }
}

document.addEventListener

document.addEventListener('DOMContentLoaded', setSavedTheme);