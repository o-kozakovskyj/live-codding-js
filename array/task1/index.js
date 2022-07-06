// function metod(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
// }
const numbersList1 = [1, 2, 3, 4, 5];
// ----pop---
console.log('pop before', numbersList1)
const lastNumber = numbersList1.pop();
console.log('pop result', lastNumber);
console.log('pop after', numbersList1);

// ---push---
const lastNumber1 = numbersList1.push(777);
console.log('push result', lastNumber1);
console.log('push after', numbersList1);
//---shift----
const lastNumber2 = numbersList1.shift();
console.log('shift result', lastNumber1);
console.log('shift after', numbersList1);
// ---filter---
//input: callback
         // input: Element;
         // output: boolean
//output: new array
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
function callback(element) {
  return element > 100;
}
// -----option one----
const bigNumbers1 = anotherNumbersList.filter(function callback(element) {
  return element > 5;
});
console.log('filter1 result', bigNumbers1)
// -----option two----
const bigNumbers = anotherNumbersList.filter(element => callback(element));
console.log('filter2 result', bigNumbers)

function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  resolver(resolver())
}
// ---test---
function funcAlert(number) {
  alert(number);
};
console.log(sum(13, 18, funcAlert(10)));