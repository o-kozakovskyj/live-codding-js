/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
const transaction = {
  value: 170,
};

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj
}
// ---test data----
console.log(addPropertyV1(transaction, 'currency', 'USD'))
console.log(addPropertyV1(transaction, '1', 'USD'))


function addPropertyV2(obj, key, value) {
 return Object.assign(obj, { [key]: value });
}
// ---test data----
console.log(addPropertyV2(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 1, 'Income'));
console.log(addPropertyV2(transaction, 'clients', ['clientOne', 'clientTwo',undefined]));

function addPropertyV3(obj, key, value) {
  return Object.assign({}, { [key]: value }, obj);
}
// ---test data---
const res1 = addPropertyV3(transaction, 'currency', 'USD')
const res2 = addPropertyV3(transaction, 'amount', 300)
   console.log(res1);
   console.log(res2)
console.log(transaction)


function addPropertyV4(obj, key, value) {
  return  {  ...obj, [key]: value };
  // return Object.assign({ ...obj }, { [key]: value })
}
// ----test data-----
console.log(addPropertyV4(transaction, 'currency', 'USD')); 
console.log(transaction)



console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
 // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction)