const menuIcon = document.querySelector(".menu-icon");
const navUl = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const logo = document.querySelector(".logo");
const learnMore = document.querySelector(".learn-more");
const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header_content");

menuIcon.addEventListener("click", () => {
  navUl.classList.toggle("active");
  if (navUl.classList.contains("active")) {
    navUl.style.width = "100%";
  } else {
    navUl.style.width = "auto";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
  });
});

logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

const scrollToSection = (section) => {
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", function () {
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
