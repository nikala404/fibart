const menuIcon = document.querySelector(".menu-icon");
const navUl = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const logo = document.querySelector(".logo");
const learnMore = document.querySelector(".learn-more");

menuIcon.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
  });
});

logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

learnMore.addEventListener("click", () => {
  window.moveTo(1450, 0);
});
