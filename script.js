// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  if (e.which !== 1) return; // left click only
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const delta = e.pageX - startX;
  slider.scrollLeft = startScrollLeft - delta;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
