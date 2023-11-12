const dropMenu = document.querySelector('.drop-menu');
console.log(dropMenu)
const showBurger = document.querySelector('.show-burger')
const closeBurger = document.querySelector('.close-burger')

const bro = document.getElementsByClassName('bro')

console.log(bro)
showBurger.addEventListener('click', function () {
    //showBurger.classsList.add('is-active')
    dropMenu.classList.toggle('nav-active');
    
    closeBurger.classList.add('show')
})



closeBurger.addEventListener('click', function () {
    dropMenu.classList.remove('nav-active');
    closeBurger.classList.remove('show')
})