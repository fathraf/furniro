let cart = {
  name: "Syltherine",
  price: 2500.000,
  quantity: 1,
  img: "icon/stylishChair.jpg"
}


const unitPrice = 2500.000;
      let quantity = 1;

      const quantityEl = document.querySelector('.quantity');
      const priceEl = document.querySelector('.product-info__price');
      const increaseBtn = document.getElementById('inc');
      const decreaseBtn = document.getElementById('dec');

      increaseBtn.addEventListener("click", function(){
        quantity++;
        updateUI();
      })
      decreaseBtn.addEventListener("click", function(){
        quantity--;
        updateUI()
      })

      function updateUI() {
        quantityEl.textContent = quantity;
        priceEl.textContent = `Rs ${(unitPrice * quantity).toFixed(2)}`;
        decreaseBtn.disabled = quantity === 1;
      }
      
      const addToCartBtn =document.getElementById("addToCartBtn");
      const sideCart = document.getElementById("sideCart");
      const closeCartBtn = document.querySelector(".close-cart");
      const overlay = document.getElementById("cartOverlay")

      addToCartBtn.addEventListener("click", () => {
        sideCart.classList.add("cart-open");
        overlay.classList.add("active");

        cart.quantity =quantity;
        renderCartItem();
        updateSubtotal()
});
      closeCartBtn.addEventListener("click", () =>{
        sideCart.classList.remove("cart-open");
        overlay.classList.remove("active")
      })
      // cart closes when clicking overlay
      overlay.addEventListener("click", () => {
        sideCart.classList.remove("cart-open")
        overlay.classList.remove("active")
      })

      const cartItemsEl = document.querySelector('.cart-items');
      function renderCartItem(){
        cartItemsEl.innerHTML = `
        <div  class="cart-item">
          <div class="cart-item__img">
            <img src="${cart.img}" alt="${cart.name}" class="item-img">
          </div>
          <div class="cart-item__info">
            <h4 class="item-name">${cart.name}</h4>
            <div class="item-meta">
              <p class="item-quantity">${cart.quantity}</p>
              <span class="item-multiply">X</span>
              <p class="item-price">Rs. ${cart.price}</p>
            </div>
          </div>
          <button class="remove-item">x</button>
        </div>
        `;
      }

      const subtotalEl = document.querySelector('.subtotal-price');
      function updateSubtotal(){
        const subtotal = cart.price * cart.quantity;
        subtotalEl.textContent = `Rs. ${subtotal.toFixed(2)}.`
      }