// Código del Cuadrado.
// Showing the sides of a square.
const squareSides = (side) => {
  console.log("Los lados de tu cuadrado miden: " + side + "cm");
};

squareSides(4);
// Calculating square perimeter.
const squarePerimeter = (side) => {
  const SIDES_SQUARE = 4; 
  return side * SIDES_SQUARE;
};
squarePerimeter(5)

// Calculating square area.
const squareArea = (side) => {
  side * side;
};

// Código del Triangulo.

const measuringTriangle = (side1, side2, base) => {
  const ladoTriangulo = side1;
  const ladoTriangulo2 = side2;
  const baseTriangulo = base;

  console.group("Propiedades del triángulo:");

  console.log(
    `Los lados del triángulo miden: ${ladoTriangulo} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`
  );

  const alturaTriangulo = 5.5;
  console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

  const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
  console.log(`El périmetro del triángulo es de: ${perimetroTriangulo}`);

  const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  console.log(`El área del triángulo es de: ${areaTriangulo} cm^2 `);

  console.groupEnd();
};

measuringTriangle(3, 3, 5);

// Código del Círculo.

const propertiesOfCircle = (radio) => {
  console.group("Propiedades del círculo");
  const PI = Math.PI;
  console.log(`Este es el valor de PI: ${PI}cm `);
  // radio
  const radioCirculo = radio;
  console.log(`El radio del círculo es de: ${radioCirculo}cm `);
  // diametro
  const diametroCirculo = radioCirculo * 2;
  console.log(`El diámetro del círculo es de: ${diametroCirculo}cm `);
  // circunferencia
  const circunferencia = Math.floor(diametroCirculo * PI);
  console.log(`La circunferencia del círculo es de: ${circunferencia}cm `);

  // area
  const areaCirculo = Math.floor(radioCirculo * radioCirculo * PI);
  console.log(`El área del círculo es de: ${areaCirculo}cm `);

  console.groupEnd();
};

propertiesOfCircle(4);
