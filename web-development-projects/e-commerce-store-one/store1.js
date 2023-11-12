
//code for add to cart functionality
//select elements
const firstSectionEl = document.querySelector("#first-section");
const secondSectionEl = document.querySelector("#second-section");
const thirdSectionEl = document.querySelector("#third-section");
const fourthSectionEl = document.querySelector("#fourth-section");
// the above are for the four products categories.
const cartItemsEl = document.querySelector(".cart-items");
const subTotal = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".totalItemsInCart");

//render for first section with id first section
function renderProducts() {
  productsNew.forEach((product) => { 
    if (product.category === "first") {
      firstSectionEl.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else if (product.category === "section1") {
      secondSectionEl.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else if (product.category === "section2") {
      thirdSectionEl.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>${product.price}</samp>
        </div>
        <button class="cart-btn" onclick="addToCart(${product.id})">
        <p>
        Add-cart
        </p>
        </button>
    </div>
        `
    } else {
      fourthSectionEl.innerHTML += `
        <div class="product">
        <picture>
        <img src= "${product.imgsrc}" alt="where my image at?">
        </picture>
        <div class="details">
        <p>
            <b>${product.name}</b>
            <small>New Arrival</small>
        </p>
        <samp>${product.price}</samp>
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
    const item = productsNew.find((product) => product.id === id);


    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

addToCart();

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
};

// code for carousel hopefully
var span = document.getElementsByTagName("span");
var carousel1 = firstSectionEl.getElementsByClassName("product");
var carousel2 = firstSectionEl.getElementsByClassName("product");
var carousel3 = firstSectionEl.getElementsByClassName("product");
var carousel4 = firstSectionEl.getElementsByClassName("product");
var l = 0;
console.log(carousel1)

span[1].onclick = () => {
    l++;
    for (var i of carousel1) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; } //-740
        if (l == 2) { i.style.left = "-960px"; } //-1480
        if (l == 3) { i.style.left = "-1440px"; } //-2220
        if (l == 4) { i.style.left = "-1920px"; } //3500
        if (l > 4) { l = 4; }
    };
};

span[0].onclick = () => {
    l--;
    for (var i of carousel1) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-480px"; }
        if (l == 2) { i.style.left = "-960px"; }
        if (l == 3) { i.style.left = "-1440px"; }
        if (l < 0) { l = 0; }
    };
};


