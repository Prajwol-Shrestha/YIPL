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


let mybutton = document.querySelector(".scroll-to-top");



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}