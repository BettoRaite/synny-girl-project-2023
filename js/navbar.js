const toggleButton = document.querySelector('.toggle-button');
const toggleButtonActivation = document.querySelector('#mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('is-active');
})