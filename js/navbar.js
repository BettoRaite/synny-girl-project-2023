const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active-button");
});
