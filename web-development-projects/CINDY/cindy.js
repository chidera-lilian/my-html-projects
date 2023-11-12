
//navigation start
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //togle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.style.display = 'flex';

        /*navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + .3}s`;
            }
        })*/;

        burger.classList.toggle('toggle');
    });
}
      
      navSlide();

//navigation end


      
//carousel start

let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

//mobile view
let mobile_view = window.matchMedia("(max-width: 768px)");
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 508;
}

let right_mover = function () {
    l = l + movePer;
    if (product == 1) { l = 0; }
    for (const i of product) {
        if (product_page > 1)
            i.style.left = '-' + l + '%';
    }
}

let left_mover = function () {
    l = l - movePer;
    if (l <= 0) { l = 0; }
    for (const i of product) {
        if (l > maxMove) { l = l - movePer; }
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = function () { right_mover(); }
span[0].onclick = function () { left_mover(); }
span[3].onclick = function () { right_mover(); }
span[2].onclick = function () { left_mover(); }
span[5].onclick = function () { right_mover(); }
span[4].onclick = function () { left_mover(); }




