class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  }
}

var cart = new Cart();

function displayProduct(productId) {
  var productImage = document.getElementById("product" + productId + "Image");
  productImage.style.display = "block";
}

var viewButtons = document.querySelectorAll(".button-view");
viewButtons.forEach(function (viewButton) {
  viewButton.addEventListener("click", function () {
    var productId = this.getAttribute("data-product-id");
    displayProduct(parseInt(productId));
  });
});

var cartButtons = document.querySelectorAll(".button-cart");
cartButtons.forEach(function (cartButton) {
  cartButton.addEventListener("click", function () {
    var productName = this.getAttribute("data-product-name");
    var productPrice = parseFloat(this.getAttribute("data-product-price"));
    var product = new Product(productName, productPrice);
    cart.addProduct(product);
    updateCartItems();
    updateTotalPrice();
  });
});

function updateCartItems() {
  var cartItemsList = document.getElementById("cartItems");
  cartItemsList.innerHTML = "";

  cart.products.forEach(function (product) {
    var listItem = document.createElement("li");
    listItem.textContent = product.name + " - $" + product.price.toFixed(2);
    cartItemsList.appendChild(listItem);
  });
}

function updateTotalPrice() {
  var totalPriceElement = document.getElementById("totalPrice");
  var totalPrice = cart.getTotalPrice();
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}

var modal = document.getElementById("myModal");
var closeButton = document.querySelector(".close");
var discountCodeInput = document.getElementById("discountCodeInput");
var applyDiscountButton = document.getElementById("applyDiscountButton");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

const totalPriceElement = document.getElementById("totalPrice");

applyDiscountButton.addEventListener("click", applyDiscount);

function applyDiscount() {
  var discountPercentage = parseFloat(discountCodeInput.value);
  if (discountPercentage >= 0 && discountPercentage <= 100) {
    var totalPrice = cart.getTotalPrice();
    var discountAmount = totalPrice * (discountPercentage / 100);
    var discountedPrice = totalPrice - discountAmount;
    totalPriceElement.textContent = "Total Price: $" + discountedPrice.toFixed(2);
    closeModal();
  } else {
    alert("Please enter a valid discount percentage (0-100).");
  }
}
