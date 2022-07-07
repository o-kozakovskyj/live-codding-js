
// input: array, callback
// output: new array(the same length)

//calback
// input: el, index(optional), array(optional)
// output : new element

//alg
// 1.create new array
// 2.iterate input array
// 3. apply calback for every element
// 4.  push new element into new array
//5. return new array


const mapArrayElements = (arr, callback) => {
  const newArr = []
  for (let index = 0; index < arr.length; index += 1) {
    const elem = arr[index]
      newArr.push(callback(elem, index, arr));
  }
  return newArr;
}
//---test data---

const testArray = ['$', 1, 0, 6, 0, 99, -2]
const sum = function (elem, index, arr) {
  if (index > 3 && arr.includes('$') === true) {
    return elem + 100;
  }
  return elem;
}
console.log(sum(30))
console.log(`start array:`,testArray,'\n','result array:', mapArrayElements(testArray, sum))

