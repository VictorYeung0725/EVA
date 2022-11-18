let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".navbar-nav li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}


/* --------------------------------------------- */

window.addEventListener("mousedown", cursorclicked);

function cursorclicked() {
  mouseCursor.innerHTML = '<img src="./img/aboutUs/camera2.png" alt="" />';
}

window.addEventListener("mouseup", cursornormal);

function cursornormal() {
  mouseCursor.innerHTML = '<img src="./img/aboutUs/camera.png" alt="" />';
}