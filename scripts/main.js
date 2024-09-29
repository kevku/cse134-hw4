/* main.js */

document.addEventListener

document.addEventListener('DOMContentLoaded', setSavedTheme);

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = email.nextElementSibling.nextElementSibling;
const givenName = document.getElementById("name-area");
const nameError = givenName.nextElementSibling.nextElementSibling;
const message = document.getElementById("message-area");
const messageError = message.nextSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nameRegEXP =
  /^[a-z ,.'-]+$/i;

window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

window.addEventListener("load", () => {
  const isValid = nameRegEXP.test(givenName.value);
  givenName.className = isValid ? "valid" : "invalid";
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

givenName.addEventListener("input", () => {
  const isValid = nameRegEXP.test(givenName.value);
  if (isValid) {
    givenName.className = "valid";
    nameError.textContent = "";
    nameError.className = "error";
  } else {
    givenName.className = "invalid";
  }
});

form.addEventListener("submit", (event) => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    emailError.textContent = "This is not an Email!";
    emailError.className = "error active";
    event.preventDefault();
  } else {
    email.className = "valid";
    emailError.textContent = "";
    emailError.className = "error";
  }
});

form.addEventListener("submit", (event) => {
  const isValid = nameRegEXP.test(givenName.value);
  if (!isValid) {
    givenName.className = "invalid";
    nameError.textContent = "This is not a name!";
    nameError.className = "error active";
    event.preventDefault();
  } else {
    givenName.className = "valid";
    nameError.textContent = "";
    nameError.className = "error";
  }
});

const textArea = document.getElementById('message-area');
const remainingChars = document.getElementById('remainingChars');
const MAX_CHARS = 250;

textArea.addEventListener('input', (event) => {
  const remaining = MAX_CHARS - textArea.value.length;
  const outOfCharColor = remaining < MAX_CHARS * 0.1 ? 'red' : null;
  console.log(remaining);
  remainingChars.textContent = `${remaining} Characters Remaining`;
  remainingChars.style.color = outOfCharColor;
});

form.addEventListener("submit", (event) => {
  const isValid = message.value.length <= 250;
  if (!isValid) {
    message.className = "invalid";
    messageError.textContent = "Too Many Letters!";
    messageError.className = "error active";
    event.preventDefault();
  } else {
    message.className = "valid";
    messageError.textContent = "";
    messageError.className = "error";
  }
});


// Themes
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
