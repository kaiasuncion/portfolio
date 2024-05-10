// navigation 
const hamMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.nav-ul');
const contactMenuItem = document.querySelector('.contact-button');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');
})

contactMenuItem.addEventListener('click', () => {
  contactMenuItem.classList.toggle('active');
  navigationMenu.classList.toggle('active');
})

// hide nav menue on scroll
const navHeader = document.querySelector('.nav-header');
var resizeTimer;
window.onresize = () => {
  navigationMenu.classList.add('no-transition');
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => navigationMenu.classList.remove('no-transition'), 250);
};

  