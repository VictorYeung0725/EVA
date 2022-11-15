const add = document.querySelectorAll('.add');

console.log(add);
let save = false;
let loveCount = 0;

add.forEach((ad) => {
  console.log(ad);
  ad.addEventListener('click', (e) => {
    if (ad.classList.contains('fa-regular')) {
      ad.classList.remove('fa-regular');
      ad.classList.add('fa-solid');
    } else if (ad.classList.contains('fa-solid')) {
      ad.classList.remove('fa-solid');
      ad.classList.add('fa-regular');
    }
  });
});
