const numbersList = [5, 0, 8, 10, -4, 50, 220];
// const newArr = numbersList.map(el => {
//   const newEl =el * el
//   return newEl;
// });
// const newArr = numbersList.map(el => el * el);

// console.log(newArr)
const newArr1 = numbersList.map((el, index) => index > 2 ? el * el : el);

console.log(newArr1);
const forEachRes = numbersList.forEach(el => {
  return el * el;
})

numbersList.forEach(elem => {
  if (elem > 0) {
    console.log(elem)
  }
})
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// const sumOfTransactions = transactions.reduce((acc, el) => {
//   if (el > 100) {
//    return acc += el;
//   }
//   return acc;
// },0)

const sumOfTransactions = transactions.reduce((acc, el) => (el > 100 ? acc + el : acc), 0);
console.log(sumOfTransactions);