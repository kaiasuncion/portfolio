const hamMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.nav-ul');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');
})

const navHeader = document.querySelector('.nav-header');
var resizeTimer;
window.onresize = () => {
  navigationMenu.classList.add('no-transition');
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => navigationMenu.classList.remove('no-transition'), 250);
};

  