const burgerIcon = document.querySelector('.burger-icon');
const navUl = document.querySelector('nav ul');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  navUl.classList.toggle('active');
});