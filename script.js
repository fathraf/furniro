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
