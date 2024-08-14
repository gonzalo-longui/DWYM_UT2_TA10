function getSum(array) {
  let suma = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(suma);
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getSum(myArray);