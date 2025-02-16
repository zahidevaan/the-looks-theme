const qtyPlusBtn = document.querySelector("#qtyPlus");
const qtyMinusBtn = document.querySelector("#qtyMinus");
const qtyInput = document.querySelector("#qtyInput");

qtyPlusBtn.addEventListener("click", () => {
  let currentQty = parseInt(qtyInput.value) || 1;
  currentQty++;
  qtyInput.value = currentQty;
  qtyInput.setAttribute("value", currentQty);
});

qtyMinusBtn.addEventListener("click", () => {
  let currentQty = parseInt(qtyInput.value) || 1;
  if (currentQty > 1) {
    currentQty--;
    qtyInput.value = currentQty;
    qtyInput.setAttribute("value", currentQty);
  }
});
