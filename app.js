//navbar menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

//popup message
const popupCloseBtn = document.querySelector('.popup-close-btn');
const popup = document.querySelector('.popup');

popupCloseBtn.addEventListener('click', () => {
  popup.classList.add('delete');
});
