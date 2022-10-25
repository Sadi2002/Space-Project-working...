// Fetching elements
const circles = document.querySelectorAll(".container__commander__circle");

const changeCircle = () => {
  circles.forEach((circle) => circle.classList.remove(".active"));
};

circles.forEach((circle) => circle.addEventListener("click", changeCircle));
