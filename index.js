document.addEventListener('DOMContentLoaded', function (e) {
  let field = document.querySelector('.field');
  let input = document.querySelector('input');
  let copyBtn = document.querySelector('.field button');

  copyBtn.onclick = () => {
    input.select();
    if (document.execCommand('copy')) {
      field.classList.add('active');
      copyBtn.innerText = 'Copied';
      setTimeout(() => {
        field.classList.remove('active');
        copyBtn.innerText = 'Copy';
      }, 3500);
    }
  };
});

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

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.navbar-nav li');

const cursor = (e) => {
  const mouseY = e.pageY + 30;
  const mouseX = e.pageX + 20;

  mouseCursor.style.top = `${mouseY}px`;
  mouseCursor.style.left = `${mouseX}px`;
};

window.addEventListener('mousemove', cursor);

/* ------------------------For cursor change on active: */

window.addEventListener('mousedown', () => {
  mouseCursor.innerHTML = '<img src="./img/camera2.png" alt="" />';
});

window.addEventListener('mouseup', () => {
  mouseCursor.innerHTML = '<img src="./img/camera.png" alt="" />';
});

// ------------------ postBtn for comment

const postBtn = document.querySelector('#post-comment');
const commentText = document.querySelector('#textAreaExample');
let newText;
let newComment;

const commentbox = document.querySelector('#comment-container');
console.log(commentbox);

commentText.addEventListener('input', function handleChange(event) {
  newText = event.target.value;
  console.log(newText);
});

postBtn.addEventListener('click', () => {
  newComment = commentText.value;
  newComment = newText;
  console.log(newComment);
  commentbox.insertAdjacentHTML('afterend', `<div>${newComment}</div>`);
});

// const message = document.getElementById('message');

// // ✅ GET value of textarea
// console.log(message.value); // 👉️ ""

// // ✅ SET value of textarea
// message.value = 'Hello world!';

// // ✅ Append to value of textarea
// message.value += ' Appended text.';

// // ✅ get value of textarea on change
// message.addEventListener('input', function handleChange(event) {
//   console.log(event.target.value);
// });
