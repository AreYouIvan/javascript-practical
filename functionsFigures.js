// Código del Cuadrado.
// Showing the sides of a square.
const squareSides = (side) => {
  console.log("Los lados de tu cuadrado miden: " + side + "cm");
};


// Calculating square perimeter.
const squarePerimeter = (side) => {
  const SIDES_SQUARE = 4;
  return side * SIDES_SQUARE;
};
squarePerimeter(5);

// Calculating square area.
const squareArea = (side) => {
  side * side;
};

// Código del Triangulo.

  const ladoTriangulo = side1;
  const ladoTriangulo2 = side2;
  const baseTriangulo = base;



  const alturaTriangulo = 5.5;

  const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;

  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

};

measuringTriangle(3, 3, 5);

// Código del Círculo.

const PI = Math.PI;

// radio
const radio = null;

// diametro
function diametro(radio) {
  return radio * 2;
}

// circunferencia

function circunferencia(diametro, pi) {
  return Math.floor(diametro * pi);
}

// area
function areaCirculo(radio, pi) {
  Math.floor(radio * radio * pi);
}
