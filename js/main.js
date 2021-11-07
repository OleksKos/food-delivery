const buttonAuth = document.querySelector('.buton-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('pasword');

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
})

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none';
})