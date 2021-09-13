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
  isPair ? arr.length / 2 : parseInt(arr.length / 2);
};
