let button = document.querySelector('.hamburger-menu');
let navbar = document.querySelector('.navbar');
let closeButton = document.querySelector('.close-button');

function openHamburgerMenu(){
   navbar.classList.remove('hidden');
   closeButton.classList.remove('hidden');
   button.classList.add('hidden');
   closeButton.classList.add('close-button');
   navbar.classList.add('navbar-burger');
}

button.addEventListener('click',openHamburgerMenu);