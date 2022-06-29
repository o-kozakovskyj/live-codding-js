function getSenseOfLife() {
  return 42;
}
// ---test data
const res = getSenseOfLife();
console.log(res);
console.log(getSenseOfLife());

const getSquared = num => {
  return num * num;
};
// ---test data
console.log(getSquared(3));

const sum = (numOne, numTwo) => numOne + numTwo;
// ---test data---
console.log(sum(3, 16));
console.log(sum(-4, 5));
console.log(sum(0, -1));
console.log(sum('5', -1));

const printMessage = age => `I am ${age} years old`;
//  ---test data---
console.log(printMessage(34));
console.log(printMessage('34'));
console.log(printMessage(' 34 '));

function sumFunc(from, to) {
  let res = 0;
  for (let i = from; i <= to; i++) {
    res += i;
  }
  return res;
}
console.log(sumFunc(5, 8));

const mult = (firstNum, secondNum) => firstNum * secondNum;
//  ---test data---
console.log(mult(3, 16));
console.log(mult(3, -10e20));
console.log(mult(100e10, 16));
console.log(mult(0, 16));
console.log(mult(3, -16));

const getsquaredArrow = num => num * num;
//  ---test data---
console.log(getsquaredArrow(6));
console.log(getsquaredArrow(0));
console.log(getsquaredArrow(-6));
console.log(getsquaredArrow(10e10));

const getMagicNumber = () => 17;
//  ---test data---
console.log(getMagicNumber());
console.log(getMagicNumber([]));
console.log(getMagicNumber(100));

function sumFunc(from, to) {
  let result = 0;
  for (let i = from; i <= to; i++) {
    result += i;
  }
  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const compare = sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
  return compare;
}

// test data
console.log(compareSums(15, 16, 19, 27));
console.log(compareSums(100, 90, 96, 76));
