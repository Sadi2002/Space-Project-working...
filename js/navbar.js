// Fetching Elements
const burgerIcon = document.querySelector(".container__nav__burger");
const closeIcon = document.querySelector(".close-btn");
const homeList = document.querySelector(".container__nav__list");

const showNavbar = () => {
  homeList.classList.remove("hide");
};

const closeNavbar = () => {
  homeList.classList.add("hide");
};

burgerIcon.addEventListener("click", showNavbar);
closeIcon.addEventListener("click", closeNavbar);
