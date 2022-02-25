// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 25) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Nav Hide 

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel

const nextIcon = '<img src="assets/img/right-arrow.svg" alt="right">';
const prevIcon = '<img src="assets/img/left-arrow.svg" alt="left" >';

$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
