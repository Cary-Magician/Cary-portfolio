let calculation = 0;

console.log('hello');
console.log('hello');

function openSidebar() {
  const sidebar = document.querySelector('.nav-been-moved').classList.add('open');
  const overlay = document.querySelector('.over').classList.add('open');
  if(sidebar && overlay) {
    sidebar.style.display = 'flex';
    overlay.style.display = 'block';
  }
}

document.querySelector('.over').addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSidebar();
});

function closeSidebar() {
  document.querySelector('.nav-been-moved').classList.remove('open');
  document.querySelector('.over').classList.remove('open');
  if(sidebar && overlay) {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  }
}