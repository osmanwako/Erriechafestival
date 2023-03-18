const body = document.getElementsByTagName('BODY')[0];
const hamburgerMenu = document.getElementById('hamburgerMenu');
const nav = document.getElementById('nav');
const mobileMenuBg = document.querySelector('.mobile-menu-bg');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change');
  nav.classList.toggle('change');
  mobileMenuBg.classList.toggle('change');
  body.classList.toggle('change');
});
