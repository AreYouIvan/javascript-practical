const productPrice = document.getElementById("price");
const productDiscount = document.getElementById("discount");
const container = document.createElement("div");
const section = document.querySelector("section");


const text = document.createElement("p");
// This is an scalable solution but is easier use the innerText like the class.

section.append(container);
container.append(text);

function showPrice() {
  // Element content value
  const priceValue = productPrice.value;
  const discountValue = productDiscount.value;
  text.textContent = `El precio del producto es ${discount(priceValue, discountValue)}`;
}
function discount(price, discount) {
  const FULL_PRICE = 100;
  const discountPrice = FULL_PRICE - discount;
  const newPrice = (price * discountPrice) / FULL_PRICE;
  return newPrice;
}

