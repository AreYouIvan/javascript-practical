/* Calculating the median of these salarys.
    - Create an array with just the salarys
    - Sort from minor to major
    - Return just the values of the middle
*/

const salariosCol = colombia.map((e) => {
  return e.salary;
});

const salariosColSorted = salariosCol.sort((a, b) => {
  return a - b;
});

const salariosMediana = (arr) => {
  const isPair = arr.length % 2 === 0;
  let mitad = null;
  if (isPair) {
    mitad = arr[arr.length / 2];
    let mitad2 = arr[arr.length / 2 - 1];
    return average([mitad, mitad2]);
  } else {
    mitad = parseInt(arr.length / 2);
    return average(mitad);
  }
};

// Utils

const average = (list) => {
  let elements = list.length;
  const sumOfList = list.reduce((a, b) => a + b);
  return sumOfList / elements;
};


// Calculate percent.
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const medianaGeneral = salariosMediana(salariosColSorted);

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const mediana10Percent = salariosMediana(salariosColTop10);


console.log({medianaGeneral, mediana10Percent});
