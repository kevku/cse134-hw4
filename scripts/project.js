function setTheme(theme) {
  const root = document.documentElement;
  const simpleSection = document.getElementById("simpletweet");
  const parseSection = document.getElementById("parstagram");
  const virusSection = document.getElementById("viruses");
  const body = document.querySelector("body");
  if (theme === 'light') {
    root.style.setProperty('background', 'var(--light-blue-color)');
    root.style.setProperty('color','var(--text-color-light)');
    simpleSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    parseSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    virusSection.style.setProperty('background-color', 'var(--lightgreen-color)');
    body.style.setProperty('background-color', 'var(--light-blue-color)');
    body.style.setProperty('color', 'var(--text-color-light)');
  }

  else {
    root.style.setProperty('background', 'var(--background-color)');
    root.style.setProperty('color','var(--text-color)');
    simpleSection.style.setProperty('background-color', 'var(--darkgray-color)');
    parseSection.style.setProperty('background-color', 'var(--lightgray-color)');
    virusSection.style.setProperty('background-color', 'var(--darkgray-color)');
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