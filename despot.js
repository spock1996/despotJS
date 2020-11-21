// === Welcome to despot JS ===

// === For smooth scroling use ===

/* <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>
 */

 // And include this 
/* var scroll = new SmoothScroll('a[href*="#"]'); */


// === navbar burger settings === 


const burger = document.querySelector(".burger");

const navbarLinks = document.querySelector(".navbar-links");

burger.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
    burger.classList.toggle("burgerX")
    
})


const btnOpen = document.getElementById("btn-open");
btnClose = document.getElementById("btn-close")
const navBar2 = document.querySelector(".navbar2")

btnOpen.addEventListener("click", () => {
    navBar2.classList.toggle("toggle")

})


btnClose.addEventListener("click", () => {
    navBar2.classList.remove("toggle")
})