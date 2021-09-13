const lista = [1, 2, 2, 2, 2, 3, 3, 4, 6, 8];

// Transform from array to object.
// const listaArray = Object.entries(listaCount);

// listaArray.sort((a, b) => {
//   return a - b;
// });

function makingModa(arr) {
  const arrToObject = {};
  // Go through the array and returns another one.
  arr.map((e) => {
    arrToObject[e] ? (arrToObject[e] += 1) : (arrToObject[e] = 1);
  });

  arr = Object.entries(arrToObject).sort((a, b) => {
    return a[1] - b[1];
  });

  return arr[arr.length - 1];
}
