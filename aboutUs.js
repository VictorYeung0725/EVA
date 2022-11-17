/* For hover / click to display nav items: */

const navbar = document.querySelector('.navbar');
const navlist = document.querySelectorAll('.navbar-nav');

navbar.addEventListener('mouseover', () => {
  navlist.forEach((nav) => {
    nav.classList.remove('d-none');
  });
});

navbar.addEventListener('mouseout', () => {
  navlist.forEach((nav) => {
    nav.classList.add('d-none');
  });
});
