const hamburger = document.querySelector('.hamburger')
const menuOverlay = document.querySelector('.menu-overlay-container')
const bars = document.querySelectorAll('.bar')

function toggleMenu(){
    hamburger.classList.toggle('change')
    bars.forEach( (bar) =>
        bar.classList.toggle('color-white')
    )
    menuOverlay.classList.toggle('top0')
}

hamburger.addEventListener('click', toggleMenu)