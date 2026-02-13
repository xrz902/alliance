const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logoLight.classList.add("hidden");
  logoDark.classList.remove("hidden");
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logoLight.classList.remove("hidden");
  logoDark.classList.add("hidden");
};

const openMenu = (event) => {
  // функция открывания меню
  menu.classList.add("is-open"); // вешает класс is-open
  mMenuToggle.classList.add("close-menu"); // меняем на закрывающую иконку 
  document.body.style.overflow = "hidden"; // запрещаем прокрутку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => {
  // функция закрывания меню
  menu.classList.remove("is-open"); // убирает класс is-open
  mMenuToggle.classList.remove("close-menu"); // ставим обратно иконку меню
  document.body.style.overflow = ""; // возвращаем прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener("scroll", () => {
  window.scrollY > 1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  // запускаем ивент
  event.preventDefault(); // ивент - приказать браузеру не реагировать на это событие
  menu.classList.contains("is-open") ? closeMenu() : openMenu(); // если меню открыто, то закрыть меню, иначе открыть меню
});
