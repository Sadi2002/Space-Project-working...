// Fetching Elements
const burgerIcon = document.querySelector(".container__nav__burger");
const closeIcon = document.querySelector(".close-btn");
const homeList = document.querySelector(".container__nav__list");
const navbarMobileList = document.querySelectorAll(".container__nav__link");

// Function which show hiden navigation
const showNavbar = () => {
  homeList.classList.remove("hide");
};

// Function which hide our navigation
const closeNavbar = () => {
  homeList.classList.add("hide");
  homeList.style.tranform = "translateX(100%)";
};

// Listeners
burgerIcon.addEventListener("click", showNavbar);
closeIcon.addEventListener("click", closeNavbar);
navbarMobileList.forEach((item) => item.addEventListener("click", closeNavbar));
