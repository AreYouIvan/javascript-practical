function calculateQuaterPerimeter() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimeter = squarePerimeter(value);

  alert(perimeter);
}

const squarePerimeter = (side) => {
  const SIDES_SQUARE = 4;
  if (side === NaN) {
    throw Error;
  }
  return side * SIDES_SQUARE;
};

function calculateQuaterArea() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = squareArea(value);
  alert(area);
}

const squareArea = (side) => {
  return side * side;
};

