//here we go again

//code for responsive nav bar
// select elements
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const navItem = document.querySelectorAll(".nav-item")

burger.addEventListener("click", function () {
  //toggles the burger
  burger.classList.toggle("is-active");

  //toggles the nav menu
  navMenu.classList.toggle("active");
});
//removes well, you should know
navLink.forEach(n => n.addEventListener("click", function () {
  burger.classList.remove("is-active");
  navMenu.classList.remove("active");
}))

//code for add to cart functionality
//select elements
const section1El = document.querySelector(".first");
const Section2El = document.querySelector(".second");
const Section3El = document.querySelector(".third");
const Section4El = document.querySelector(".fourth");
// the above are for the four products categories.
const cartItemsEl = document.querySelector(".cart-items");
const subTotal = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".totalItemsInCart");

// render first section with classname '.first'
function renderProducts() {
  products.forEach((product) => { 
    if (product.category === "first") {
      section1El.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>$${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else if (product.category === "second") {
      Section2El.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>$${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else if (product.category === "third") {
      Section3El.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>$${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else {
      Section4El.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>$${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    }
  });
}
renderProducts();

//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//add to cart
function addToCart(id) {
  //check if product already exists in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

//update cart

function updateCart() {
  renderCartItems();
  renderSubtotal(); //save cart to local storage

  localStorage.setItem("CART", JSON.stringify(cart));
}

//calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subTotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(
    2
  )}`;
  totalItemsInCart.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; //clear cart elements
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
          <div class="item-info" onclick="removeItemFromCart(${item.id})">
            <img src="${item.imgsrc}" alt="${item.name}">
            <h4>${item.name}</h4>
          </div>
          <div class="unit-price">
            <small>$</small>${item.price}
          </div>
          <div class="units">
            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
          </div>
        </div>
        `;
  });
}

//remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

//change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits: numberOfUnits,
    };
  });

  updateCart();
}

//code for carousel
var span = document.getElementsByTagName("span");
var carousel1 = section1El.getElementsByClassName("product");
var carousel2 = Section2El.getElementsByClassName("product");
var carousel3 = Section3El.getElementsByClassName("product");
var carousel4 = Section4El.getElementsByClassName("product");
console.log(carousel1);
console.log(carousel2);
console.log(carousel3);
console.log(carousel4);
var l = 0;
span[1].onclick = function () {
    l++;
    for (var i of carousel1) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[0].onclick = ()=>{
    l--;
    for(var i of carousel1) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}

span[3].onclick = function () {
    l++;
    for (var i of carousel2) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[2].onclick = ()=>{
    l--;
    for(var i of carousel2) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}

span[5].onclick = function () {
    l++;
    for (var i of carousel3) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[4].onclick = ()=>{
    l--;
    for(var i of carousel3) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}

span[7].onclick = function () {
    l++;
    for (var i of carousel4) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    }
}

span[6].onclick = ()=>{
    l--;
    for(var i of carousel4) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-480px";}
        if (l==2) {i.style.left = "-960px";}
        if (l==3) {i.style.left = "-1440px";}
        if (l<0) {l=0;}
    }
}


