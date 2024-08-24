// navbar
let index = 0;
const navbarContainer = document.querySelector(".navbar_container");
const hamburger = document.getElementById("hamburger");
const navLink = document.querySelector(".nav__links");
const title = document.getElementById("title");
hamburger.addEventListener("click", () => {
  navLink.style.display = "flex";

  title.style.display = "none";
  hamburger.src = "../images/icon-close.svg";
});

// about

const about = document.querySelectorAll(".about");
const mediaQuery = window.matchMedia("max-width:768px");
const ContentSlide = () => {
  for (let i = 0; i < about.length; i++) {
    about[i].style.display = "none";
  }
  about[index].style.display = "block";

  // changing background image of navbar
  if (index === 0) {
    navbarContainer.style.backgroundImage =
      'url("../images/desktop-image-hero-1.jpg")';
    if (mediaQuery.matches) {
      ('url("../images/mobile-image-hero-1.jpg")');
    }
  } else if (index === 1) {
    navbarContainer.style.backgroundImage =
      'url("../images/desktop-image-hero-2.jpg")';
    if (mediaQuery.matches) {
      ('url("../images/mobile-image-hero-2.jpg")');
    }
  } else {
    navbarContainer.style.backgroundImage =
      'url("../images/desktop-image-hero-3.jpg")';
    if (mediaQuery.matches) {
      ('url("../images/mobile-image-hero-3.jpg)');
    }
  }
};
ContentSlide();
const next = document.getElementById("next");
next.addEventListener("click", () => {
  index++;
  if (index > about.length - 1) {
    index = 0;
  }
  ContentSlide();
});
const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = about.length - 1;
  }
  ContentSlide();
});
