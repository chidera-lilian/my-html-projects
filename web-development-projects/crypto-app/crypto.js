//for navbar
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.getElementsByClassName("nav-links")
const navItem = document.getElementsByClassName("nav-item");


burger.addEventListener("click", function () {

    //toggles the nav menu
    navMenu.classList.add("is-active");

    //
    // aboutText.classList.remove("show")
});
//removes well, you should know
// navLink.forEach(n => n.addEventListener("click", function () {
//     navMenu.classList.remove("is-active");
// }));

function closeNav() {
    navMenu.classList.remove("is-active");
}

closeNav()
//end of nav bar

//for section 2

const headings = document.getElementsByClassName("heading");
const paragraph = document.getElementsByClassName("p");
const button = document.getElementsByClassName("button");
const mine = document.getElementsByClassName("mine");
const icon = document.getElementsByClassName("i");
const wrapContents = document.getElementsByClassName("wrap-content")
console.log(paragraph[2].textContent)

wrapContents[1].addEventListener("click", function () {
    wrapContents[0].classList.remove("wrap-content-active");
    headings[0].classList.remove("heading-active")
    // button[0].classList.remove("active-button")
    // paragraph[0].classList.remove("p-active")
    // mine[0].classList.remove("mine-active")
    // icon[0].classList.remove("i-active")
    wrapContents[1].classList.add("wrap-content-active")
    headings[1].classList.add("heading-active")
    button[1].classList.add("active-button")
    paragraph[1].classList.add("p-active")
    mine[1].classList.add("mine-active")
    icon[1].classList.add("i-active")

    wrapContents[2].classList.remove("wrap-content-active");
    headings[2].classList.remove("heading-active")
    button[2].classList.remove("active-button")
    paragraph[2].classList.remove("p-active")
    mine[2].classList.remove("mine-active")
    icon[2].classList.remove("i-active")
})

wrapContents[0].addEventListener("click", function () {
    wrapContents[1].classList.remove("wrap-content-active");
    headings[1].classList.remove("heading-active")
    // button[0].classList.remove("active-button")
    // paragraph[0].classList.remove("p-active")
    // mine[0].classList.remove("mine-active")
    // icon[0].classList.remove("i-active")

    wrapContents[0].classList.add("wrap-content-active")
    headings[0].classList.add("heading-active")
    button[0].classList.add("active-button")
    paragraph[1].classList.add("p-active")
    mine[0].classList.add("mine-active")
    icon[0].classList.add("i-active")

    wrapContents[2].classList.remove("wrap-content-active");
    headings[2].classList.remove("heading-active")
    button[2].classList.remove("active-button")
    paragraph[2].classList.remove("p-active")
    mine[2].classList.remove("mine-active")
    icon[2].classList.remove("i-active")
})


wrapContents[2].addEventListener("click", function () {
    wrapContents[0].classList.remove("wrap-content-active");
    headings[0].classList.remove("heading-active")
    // button[0].classList.remove("active-button")
    // paragraph[0].classList.remove("p-active")
    // mine[0].classList.remove("mine-active")
    // icon[0].classList.remove("i-active")

    wrapContents[2].classList.add("wrap-content-active")
    headings[2].classList.add("heading-active")
    button[2].classList.add("active-button")
    paragraph[2].classList.add("p-active")
    mine[2].classList.add("mine-active")
    icon[2].classList.add("i-active")

    wrapContents[1].classList.remove("wrap-content-active");
    headings[1].classList.remove("heading-active")
    button[1].classList.remove("active-button")
    paragraph[1].classList.remove("p-active")
    mine[1].classList.remove("mine-active")
    icon[1].classList.remove("i-active")
})

