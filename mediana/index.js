const lista = [2000, 50, 400, 200, 1100, 1000];

// This is the script to sort from minor to major the values of an array.
lista.sort((a, b) => {
  // console.log(`a: ${a} b: ${b} = ${ a - b}`);
  return a - b;
});


// This is the script to sort from minor to major the values of an array.

function sortArray(array) {
  // debugger
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}


// The median takes the elements of the middle.
// If has pair takes the half else takes the middle.

function isPair(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function mediana(arr) {
  let mitadLista = parseInt(lista.length / 2);
  if (isPair(arr.length)) {
    const element1 = lista[mitadLista];
    const element2 = lista[mitadLista - 1];

    const promedioMediana = average([element1, element2]);
    return promedioMediana;
  }
  let mediana = lista[mitadLista];
  return mediana;
}

const average = (list) => {
  let elements = list.length;
  const sumOfList = list.reduce((a, b) => a + b);
  return sumOfList / elements;
};

// isPair(lista.length);
