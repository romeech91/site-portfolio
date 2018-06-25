const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".hero__nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("hero__nav--active");
});