//calback
// input: el, index(optional), array(optional)
// output : boolean

//alg
// 1.create new array
// 2.iterate input array
// 3. apply calback for every element
// 4. If true -- push
const filterArrayElements = (arr, callback) => {
  const newArr = []
  for (let index = 0; index < arr.length; index += 1) {
    const elem = arr[index]
    if (callback(elem, index, arr) === true) {
      newArr.push(elem)
    }
  }
  return newArr;
}
//---test data---
const testArray = [1, 0, 6, 0, 99, -2]
const compare3 = function (num) {
  return num > 3
}
console.log(compare3(10))
console.log(filterArrayElements(testArray, compare3))

const testArr = [1, 2, 11, 0, -5, 5, 4, 8, NaN, 60, 50];
const callback = (el, index, arr) => {
  if (index > 5 && el > 10) {
    return true;
  }
  return false;
};
console.log(filterArrayElements(testArr, callback))
// ---multuply
/// number1, number2... numberN
function multuply(...args) {
  
 console.log(args.reduce((acc, el) => acc* el));
}
multuply(2, 6, 8, 2);