// navbar menu on landing page
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});

//alert message
alert(
  'PL: Niniejsza strona powstała na potrzeby projektu i jest całkowicie fikcyjna.\n\nENG: This website was created as a portfolio project and is not real.'
);
