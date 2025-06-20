const btn = document.querySelector('.btn');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    btn.textContent = 'Clair';
  } else {
    btn.textContent = 'Sombre';
  }
});
