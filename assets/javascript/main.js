/*HAMBURGER MENU*/
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navMenu')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
/*TAB MENU*/
const tabHome = document.querySelector('#tabHome')
const tabPortfolio = document.querySelector('#tabPortfolio')
const tabAbout = document.querySelector('#tabAbout')

tabHome.addEventListener('click', tabHomeActive) 
tabPortfolio.addEventListener('click', tabPortfolioActive)
tabAbout.addEventListener('click', tabAboutActive)

function tabHomeActive() {
    tabPortfolio.classList.remove('active')
    tabPortfolio.classList.add('inactive')
    tabAbout.classList.remove('active')
    tabAbout.classList.add('inactive')

    tabHome.classList.remove('inactive')
    tabHome.classList.add('active')
}
function tabPortfolioActive() {
    tabHome.classList.remove('active')
    tabHome.classList.add('inactive')
    tabAbout.classList.remove('active')
    tabAbout.classList.add('inactive')

    tabPortfolio.classList.remove('inactive')
    tabPortfolio.classList.add('active')
}
function tabAboutActive() {
    tabHome.classList.remove('active')
    tabHome.classList.add('inactive')
    tabPortfolio.classList.remove('active')
    tabPortfolio.classList.add('inactive')

    tabAbout.classList.remove('inactive')
    tabAbout.classList.add('active')
}