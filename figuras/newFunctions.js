// Código del Cuadrado.
// Showing the sides of a square.
const squareSides = (side) => {
  return side;
};

// Calculating square perimeter.
const squarePerimeter = (side) => {
  const SIDES_SQUARE = 4;
  if (side === NaN) {
    throw Error;
  }
  return side * SIDES_SQUARE;
};

// Calculating square area.
const squareArea = (side) => {
  side * side;
};

// Código del Triangulo.

// altura
function triangleHigh(high) {
  return high;
}

// Perimetro
function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

// Area

function triangleArea(base, high) {
  return (base * high) / 2;
}

// Código del Círculo.

const PI = Math.PI;

// radio
const radioCircle = null;

// diametro
function diametro(radio) {
  return radio * 2;
}

// circunferencia

function circunferencia(diametro) {
  return Math.floor(diametro * PI);
}

// area
function areaCirculo(radio) {
  Math.floor(radio * radio) * PI;
}

export default squarePerimeter;
