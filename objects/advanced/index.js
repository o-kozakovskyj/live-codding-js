

//algo
// 1.get array of keys from input obj;
// 2. iterate input obj over  obj values;
// 3.create new array of obj & add id into every obj
// 4. sort;

//refactor algo
// 1. get array of key-value-entries
//2. iterate array of entries- on every step create new obj
//3. sort

// get array keys
// iterate array keys -['key1', 'key2'...]
// const getCustomersList = (obj) => {
//   const customersIdList = Object.keys(obj);
  
//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };
//--test data---
const customers = {
  'customer-id-1': {
    name: 'Wiliam',
    age: 54,
  },
  'customer- id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-6': {
    name: 'John',
    age: 14,
  },
  'customer-id-3': {
    name: 'Biliam',
    age: 14,
  },
  
  'customer-id-5': {
    name: 'Bob',
    age: undefined,
  },
};
// console.log(getCustomersList(customers));
// console.log(customers);

// const getCustomersList1 = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

   
// const getCustomersList1 = obj =>
//   Object.entries(obj)
//     .map((entry) => {
      
//     //   const obj = {};
//     //   Object.assign(obj, { id: entry[0] })
//     //  return Object.assign(obj, entry[1])
      
//       return {id:entry[0],...entry[1]}
//     })
//     .sort((a, b) => a.age - b.age);
// final
//====================
// const getCustomersList1 = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

//     console.log(getCustomersList1(customers));
// console.log(customers);
//=========
//     Anna
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// white_check_mark
// eyes
// raised_hands

// use destructuring

//=====

// roman
// const getCustomersList = (customers) =>
//    Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

//use push instead of concat
//rename data

//aleks
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);
 
//a,b ok


//anast
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values.map((key, index) => ({ ...obj[key], id: key})).sort((a, b) => a.age - b.age);
// };
//dont use values
// dont use index, we can get keys
//==========
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
//===========================
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };


  // const getCustomersList = obj => {
  //   const moderArr = Object.entries(obj).map(arr => {
  //     let id = { id: arr.shift() };
  //     return (arr[0] = { ...arr[0], ...id });
  //   });
  
  //   return moderArr.sort((a, b) => a.age - b.age);
  // };

  // dont use shift
  // redundunt moderArr
  //
  
  //===================
// bad
  // const getCustomersList = customers =>  Object.keys(customers).reduce((acc, elem, index) => {
  //   acc[index] = { id: elem, ...customers[elem] };
  //   return acc;
  // }, [])
  //   .sort((a, b) => a.age - b.age);
  //dont use index;
  // bad naming
  
  //==============================
  //bad
  // const getCustomersList = obj => {
  //   // obj is the object we want to get the keys from
  //   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
  //   const first = order.map(el => el[1]); // get the values
  //   const second = order.map(el => el[0]); // get the keys
  //   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
  // };
  
  