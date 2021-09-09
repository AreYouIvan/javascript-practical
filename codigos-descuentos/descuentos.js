// DOM manipulating library.

const productPrice = document.getElementById("price");
const productDiscount = document.getElementById("discount");
const container = document.createElement("div");
const section = document.querySelector("section");
const text = document.createElement("p");

section.append(container);
container.append(text);

/** Challenge
 * Instead of make a calculate we're gonna create a cupons sections, the people
 * may choose any coupon for their stuff.
 *
 * So we'll create the following.
 *
 * - Create an array with the discount percents
 * - Validate discount codes.
 * - If they're valid then execute the discount
 * - Return the discount to the User
 */

const coupons = [
  { name: "cryptocositas", discount: 15 },
  { name: "areyouivan", discount: 10 },
  { name: "sacalasfrias", discount: 40 },
];

function validatingCoupons(code) {
  code = productDiscount.value;
  let realCode = code.toLowerCase();

  if (!realCode) {
    throw new Error("Woops, tu código no es válido..");
  } else {
    applyingDiscount();
  }
}

// Logic
function showPrice() {
  // Element content value
  const priceValue = productPrice.value;
  const discountValue = productDiscount.value;
  text.textContent = `El precio del producto es ${discount(
    priceValue,
    discountValue
  )}`;
}
function discount(price, discount) {
  const FULL_PRICE = 100;
  const discountPrice = FULL_PRICE - discount;
  const newPrice = (price * discountPrice) / FULL_PRICE;
  return newPrice;
}
