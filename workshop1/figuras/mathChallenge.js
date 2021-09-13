/** Find the height of a Triangle using a function. */
 

const height = (base, lado1, lado2) => {
  try {
    if (lado1 === lado2) {
      lado1 = lado1 **= 2;
      base = base / 2;
      base = base **= 2;
      const realHeight = Math.floor(Math.sqrt(lado1 - base));
      return realHeight;
    } else {
      throw new Error("Este no es un triángulo isosceles");
    }
  } catch (err) {
    console.error(err.name + ": " + err.message);
  }
};
