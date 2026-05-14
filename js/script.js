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
window.addEventListener("resize", navBarPosition);
// Opening-Closing Nav Bar

const changeMenuIcon = function (prop1, prop2) {
  closeMenuIcon.style.display = prop1;
  openMenuIcon.style.display = prop2;
};

const openCloseMenu = function () {
  navBarLinks.classList.toggle("nav-bar-hide");
  if (!navBarLinks.classList.contains("nav-bar-hide")) {
    changeMenuIcon("block", "none");
  } else {
    changeMenuIcon("none", "block");
  }
};
openCloseMenuIcon.addEventListener("click", openCloseMenu);
