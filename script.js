// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.clientX;
  startScrollLeft = slider.scrollLeft;
});

document.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const deltaX = e.clientX - startX;
  slider.scrollLeft = startScrollLeft - deltaX;
});
