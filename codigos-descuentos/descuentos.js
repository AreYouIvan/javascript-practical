// DOM manipulating library.

const productPrice = document.getElementById("price");
const discountCode = document.getElementById("code");
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
  { name: "mamador", discount: 50 },
];

const readableCode = (code) => {
  code = code.value;
  return code.toLowerCase();
};

function validatingCoupons(code) {
  let userCode = readableCode(code);
  try {
    for (let coupon of coupons) {
      if (userCode === coupon.name) {
        const discountToBeApplied = coupon.discount;
        // return applyingDiscount(discountToBeApplied);
          return applyingDiscount(discountToBeApplied);
      }
    }
    throw new Error("Woops, tu código no es válido..");

  } catch (err) {
    text.textContent = err.message;
  }

}

// function applyingDiscount(discount) {
// }

// Logic
function applyingDiscount(discount) {
  // Element content value
  const priceValue = productPrice.value;
  text.textContent = `El precio del producto es ${priceWithDiscount(
    priceValue,
    discount
  )}`;
}
function priceWithDiscount(price, discount) {
  const FULL_PRICE = 100;
  const discountPrice = FULL_PRICE - discount;
  const newPrice = (price * discountPrice) / FULL_PRICE;
  return newPrice;
}