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


/* --------------------------For cursor to display: */

let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".navbar-nav li");

const cursor = (e)=> {
  const mouseY = e.pageY + 30;
  const mouseX = e.pageX + 20;

  mouseCursor.style.top = `${mouseY}px`;
  mouseCursor.style.left = `${mouseX}px`;
}

window.addEventListener("mousemove", cursor);


/* ------------------------For cursor change on active: */


window.addEventListener("mousedown", () => {
  mouseCursor.innerHTML = '<img src="./img/camera2.png" alt="" />';
});

window.addEventListener("mouseup", () => {
  mouseCursor.innerHTML = '<img src="./img/camera.png" alt="" />';
});
