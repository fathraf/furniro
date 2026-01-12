const unitPrice = 2500.000;
let quantity = 1;

const quantityEl = document.querySelector('.quantity');
const priceEl = document.querySelector('product-info__price');
const increaseBtn = document.getElementById('inc');
const decreaseBtn = document.getElementById('dec');

increaseBtn.addEventListener("click", function(){
  quantity++;
  updateUI();
})
decreaseBtn.addEventListener("click", function(){
  quantity--;
  updateUI
})

function updateUI(){
  quantityEl.textContent = quantity;
  priceEl.textContent = unitPrice * quantity
}