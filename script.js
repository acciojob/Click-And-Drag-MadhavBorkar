// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  if (e.which !== 1) return;

  isDown = true;

  startX = e.pageX || e.clientX;
  startScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const currentX = e.pageX || e.clientX;
  const delta = currentX - startX;

  slider.scrollLeft = startScrollLeft - delta;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});
