
const body = document.querySelector('body');
const section = document.querySelector('section');
const header = document.querySelector('header');


const modeToggle = document.getElementById('mode-toggle');

const modeStatus = document.querySelector('.mode-status');


function toggleMode() {

body.classList.toggle('dark-mode');
section.classList.toggle('dark-mode');
section.classList.toggle('header');
}


modeToggle.addEventListener('click', toggleMode);



