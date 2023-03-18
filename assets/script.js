const popupcontent = document.querySelector('.navbar-main');
const humbergid = document.querySelector('#humbergurid');
const closebtnid = document.querySelector('#popup-closeid');

function openmenu() {
  popupcontent.classList.toggle('popup-menu');
  document.querySelector('header').style.display = 'block';
  document.querySelector('main').style.display = 'none';
}

function closemenu() {
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'block';
  popupcontent.classList.toggle('popup-menu');
}

humbergid.addEventListener('click', openmenu);
closebtnid.addEventListener('click', closemenu);
