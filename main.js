


const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
  const isExpended = JSON.parse(navBtn.getAttribute('aria-expend'));
  navBtn.setAttribute('aria-expended', !isExpended);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
});