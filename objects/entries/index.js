'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
//algo
// 1.iterate keylist
//2. put keyvalue into obj

// function buildObject(keysList, valuesList) {
//   const obj = {}
//   for (let index = 0; index < keysList.length; index++) {
//     obj[keysList[index]] = valuesList[index]
// obj = {...obj,[keysList[index]]:valuesList[index] }
//   }
//   return obj;
// }
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    // obj[key] = valuesList[index];
    //  return Object.assign({}, obj,{[key]:valuesList[index]})
    return { ...obj, [key]: valuesList[index] }
  }, {})
}
// return  keysList.reduce((obj, key, index) => (obj[key] = valuesList[index], obj), {})
//---test data--
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result)
