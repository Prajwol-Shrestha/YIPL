const hamburger = document.querySelector('.hamburger')
const menuOverlay = document.querySelector('.menu-overlay')
const menuSm = document.querySelector('.mobile-menu')

function toggleMenu(){
    hamburger.classList.toggle('change')
    menuOverlay.classList.toggle('top30VH')
}

hamburger.addEventListener('click', toggleMenu)