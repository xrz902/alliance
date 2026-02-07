const navbar = document.querySelector('.navbar')
const logoLight = document.querySelector('.logo-light')
const logoDark = document.querySelector('.logo-dark')

window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    navbar.classList.add('navbar-light')

    logoLight.classList.add('hidden')
    logoDark.classList.remove('hidden')

  } else {
    navbar.classList.remove('navbar-light')

    logoLight.classList.remove('hidden')
    logoDark.classList.add('hidden')
  }
})