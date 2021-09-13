const lista1 = [100, 200, 300, 500];

const average = (list) => {
  let elements = list.length;
  const sumOfList = list.reduce((a, b) => a + b);
  return sumOfList / elements;
};

average(lista1);

// function average(lista) {
//   let sumaLista = 0;
//   let listElements = lista.length;
//   for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//   }
//   const realAverage = sumaLista / listElements;
//   return realAverage;
// }

