// Slelecting Elements
const header = document.querySelector("header");
const navBarLinks = document.querySelector(".nav-bar-links");
const openCloseMenuIcon = document.querySelector(".open-close-menu-icon");
const openMenuIcon = document.querySelector(".open-menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");

// Making Nav-bar Bottom OF Menu
const navBarPosition = function () {
  const hight = header.getBoundingClientRect().height;
  navBarLinks.style.top = `${hight}px`;
};
navBarPosition();

// Opening-Closing Nav Bar

openCloseMenuIcon.addEventListener("click", function () {
  navBarLinks.classList.toggle("nav-bar-hide");
  if (!navBarLinks.classList.contains("nav-bar-hide")) {
    closeMenuIcon.style.display = "block";
    openMenuIcon.style.display = "none";
  } else {
    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
  }
});
