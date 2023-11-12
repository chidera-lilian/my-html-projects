//for burger menu
// select elements
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu")
const navLink = document.querySelectorAll(".nav-links")
const navItem = document.querySelectorAll(".nav-item");

burger.addEventListener("click", function () {
    //toggles the burger
    burger.classList.toggle("is-active");

    //toggles the nav menu
    navMenu.classList.toggle("nav-active");
});
//removes well, you should know
navLink.forEach(n => n.addEventListener("click", function () {
    burger.classList.remove("is-active");
    navMenu.classList.remove("nav-active");
}));

console.log(burger)