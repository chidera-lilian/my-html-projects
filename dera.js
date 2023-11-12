//for navbar
//for burger menu
// select elements
//const show = document.getElementsByClassName("form-show")
//const form = document.getElementsByClassName("form")
//console.log(show)
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-links")
const navItem = document.querySelectorAll(".nav-tem");
//toggle about me
const me = document.querySelector(".me");
const aboutText = document.querySelector(".about-text");
//const none = document.querySelector(".none");
//const contact = document.querySelector(".contact");
//console.log(contact)
me.addEventListener("click", function () {
    aboutText.classList.toggle("show");
    //contact.classList.remove("wow")
})

// none.addEventListener("click", function () {
//     contact.classList.toggle("wow");
//     aboutText.classList.remove("show")
// })

burger.addEventListener("click", function () {
    //toggles the burger
    burger.classList.toggle("is-active");

    //toggles the nav menu
    navMenu.classList.toggle("nav-is-active");

    //
    // aboutText.classList.remove("show")
});
//removes well, you should know
navLink.forEach(n => n.addEventListener("click", function () {
    burger.classList.remove("is-active");
    navMenu.classList.remove("nav-is-active");
}));
//end of nav bar


//for contact me. for some unknown reson, tis seems to work yet i cnt find were i wrote te code. it is well wit jvscript o
// show.addEventListener("click", function () {
//     form.classList.remove("appear")
// })


//for typewriter effect
//create an array for the message you want to display22+*-
var messageArray = ["Chidera Lilian,"];
//text position is which array position the animation should start from. 0 means first letter in the array
var textPosition = 0;
//the speed variable indicates how fast the message would go. the lower, the faster
var speed = 170;

function typewriter() {
    document.getElementById("message").innerHTML = messageArray[0].substring(0, textPosition) + "<small>|</small>";

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);
//end of typewriter effect







//to toggle essentials
const port = document.getElementById("port");
const essence = document.getElementById("essence");
const essentials = document.getElementById("essentials");
const header = document.querySelector(".header");
const chidera = document.querySelector(".chidera")
const main = document.getElementById("m");
console.log(chidera);

essence.addEventListener("click", function () {
    essentials.classList.add("clicked");
    essence.classList.toggle("yellow");
    essence.style.textDecoration = "none";
    port.style.textDecoration = "none";
    port.classList.remove("yellow");
    main.classList.add("left");
    header.classList.add("header-yellow");
    chidera.classList.add("lilian");

});
port.addEventListener("click", function () {
    essentials.classList.remove("clicked");
    essence.classList.remove("yellow");
    essence.style.textDecoration = "underline"
    port.style.textDecoration = "underline"
    port.classList.toggle("yellow");
    main.classList.remove("left");
    header.classList.remove("header-yellow");
    chidera.classList.remove("lilian");
})
//end of toggling essentials








//for chrome game
/*let chromeGame = document.querySelector(".chrome-game");
let animal = document.querySelector(".animal");
let trees = document.querySelector(".trees");
let cloud = document.querySelector(".cloud");
let road = document.querySelector(".road");
let score = document.querySelector(".score");
let gameOver = document.querySelector(".game-over");
console.log(score)

//declaring var for svore
let interval = null;
let playerSCore = 0;

//function for score 
let scoreCounter = () => {
    playerSCore++
    score.innerHTML = `Score: <b>${playerSCore}</b>`
}

//start Game
// interval = setInterval (scoreCounter, 350);
window.addEventListener(
    "keydown", (start) => {
        // console.log(start)
        if (start.code === "space") {
            console.log("hcvghudgscuyj")

            gameOver.style.display = "none";

            trees.classList.add("active-tree");
            
            road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";

            cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

            //score
            playerSCore = 0;
            interval = setInterval (scoreCounter, 350);
        }
})
    
//jump your character
window.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key == "ArrowUP") {
        if (animal.classList != "active-animal") {
            animal.classList.add("animal.active");
            //removes class after 0.5s 
            setTimeout(() => {
                animal.classList.remove("animal.active");
            }, 500)
        }
    }
})
//game over
let result = setInterval(() => {
    let animalBottom = parseInt(getComputedStyle(animal).getPropertyValue("bottom"));
    // console.log("AnimalBottom" + animalBottom);
    let treesLeft = parseInt(getComputedStyle(trees).getPropertyValue("left"));
    // console.log("TreesLeft" + treesLeft);

    if (animalBottom <= 90 && treesLeft >= 20 && treesLeft <= 145) {
        console.log("game over")

        
        gameOver.style.display = "block";
        trees.classList.remove("active-tree");
            
        road.firstElementChild.style.animation = "none";

        cloud.firstElementChild.style.animation = "none";

        clearInterval(interval)
        playerSCore=0
    }
},10)*/







//for stop-watch 
var min = 10;
var sec = 00;
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const start = document.querySelector(".start");
const watchReset = document.querySelector(".watch-reset")
var nowSec = 00;
var nowMin = 00;
console.log(watchReset)

var interval = null
function timer() {
    if (sec === 0) {
        sec = 60-1;
        min--
    } else {
        sec--;
        second.innerText = nowSec;
        minute.innerText = nowMin;
    }

    if (min < 10) {
        nowMin = "0" + min;
    } else {
        nowMin = min;
    }

    if (sec < 10) {
        nowSec = "0" + sec;
    } else {
        nowSec = sec;
    }

    if (min === 0 && sec === 0) {
        alert("Time Out");
        clearInterval(interval);
        min = 10
        second.innerText = 00;
        minute.innerText = 00
    }
}
start.addEventListener("click", function () {
    interval = setInterval(timer, 999)
});
watchReset.addEventListener("click", function () {
    clearInterval(interval);
    sec = 00;
    min = 00;
    second.innerText = "00";
    minute.innerText = "10";
});
//end of stop-watch





















//for todo list
const input = document.querySelector("input");
const renderItemnsHere = document.querySelector (".task-show");
const allTask = document.getElementsByClassName("all-task")
const bye = document.getElementsByClassName("del-btn");
const container = document.querySelector(".container")
const toDo = document.getElementsByClassName("to-do");
const taskFinished = document.querySelector(".complete");
const itemfin = document.getElementsByClassName("todo-item");
const completebtn = document.getElementsByClassName("completed-btn");
const contain = container;

function addMe(){
    //alert(input.value.length);
    if (input.value.length === 0) {
        //alert("add task damn it")
    } else {
        renderItemnsHere.innerHTML += `
        <div class="all-task">
            <p class="todo-item" id="item-todo">
                ${input.value}
            </p>
            <button class="completed-btn" onclick="completed()">
                Done
            </button>

            <button class="del-btn" onclick="removeMe()">
                Delete
            </button>
        </div >`;
        //clears task in the input menu
        input.value = "";
            }
//to remove an item
    removeMe();
    completed();
};
addMe();

function removeMe (){
    if (allTask.length > 0) {
        //alert("okay o")
        for (let i = 0; i < bye.length; i++) {
            bye[i].onclick = function () {
                this.parentElement.remove();
            };

        } 
    }
}

function completed() {
    if (itemfin.length === 0) {
        //alert("nothing in task field")
    } else {
        for (let i = 0; i < itemfin.length; i++) {
            completebtn[i].onclick = function () {
                taskFinished.innerHTML += `
                <div>
                    <p class="um">${itemfin[i].innerHTML}</p>
                    <button class="del-btn" onclick="removeMe()">
                    Remove
                    </button>
                </div>
        `;
                // if (taskFinished.contains(itemfin[i])) {
                //     console.log("funny you")
                // } else {
                //     alert("huhn")
                // }
            };
        }
    }
}
//explanation.
// console logging itemfin returns an array i.e HTMLCollection[] in the console, as a result when you try to add that p tag in the completed section, it returns the number of items in said array. i.e if you have three items in the section, instead of (item1, item2, item3), it returns (0,1,2). to fix it, since itemfin is regarded as an array, you loop through it, add the onclick attribute to the completebtn, then, at whatever index the button is clicked at, let the .innerHTML be returned. :) took me the whole fucking night to do this!!!!!!!!!!!!!!
//end of todo list











//for counter
var count = 0;
const container2 = document.querySelector(".container2")
var number = document.querySelector(".count-number");
const addBtn = document.querySelector(".add");
const reduceBtn = document.querySelector(".reduce");
const resetBtn = document.querySelector(".reset");
console.log(number.innerHTML);

function increaseMe() {
    addBtn.addEventListener("click", () => {
        count++
        number.textContent = count;
        if (count > 0) {
            number.style.color = "#039e51"
        }

        if (count === 0) {
            number.style.color = "#475569"
        }
    })
}

function reduceMe() {
    reduceBtn.addEventListener("click", () => {
        count--;
        number.textContent = count;
        if (count < 0) {
            number.style.color = "#932B3F"
        }

        if (count === 0) {
            number.style.color = "#475569"
        }
    })
}

function resetMe() {
    resetBtn.addEventListener("click", () => {
        count = 0;
        number.textContent = count;
        if (count === 0) {
            number.style.color = "#475569"
        }
        
    })
}
increaseMe();
reduceMe();
resetMe();
//end of counter






//for local storage
// const addstn = document.querySelector(".add-task")
// var cart = [];
// cart.push(container, container2)
// console.log(cart)
// function saveToLocalStorage() {
//     localStorage.setItem("saved", cart)
// }

