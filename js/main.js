const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.classList.add("navbar-light");
    logoLight.classList.add("hidden");
    logoDark.classList.remove("hidden");
  } else {
    navbar.classList.remove("navbar-light");
    logoLight.classList.remove("hidden");
    logoDark.classList.add("hidden");
  }
});
mMenuToggle.addEventListener("click", (event) => {
  // запускаем ивент
  event.preventDefault(); // ивент - приказать браузеру не реагировать на это событие
  menu.classList.toggle("is-open"); // toggle - присвоить
});
  