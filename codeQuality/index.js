//remove logic from if
//get rid of duplicated code
// dont use find

//bad
// const withdraw = (clients, balances, client, amount) => {
// // good
//   balances[clients.indexOf(client)]

//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

//==================================

// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
    //const res = bool ? value1: value2


    //bad

// const withdraw1 = (clients, balances, client, amount) => {
//      let clientBalance = balances[clients.indexOf(client)]
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return (clientBalance);
//   };
  
//   return -1;
// }

// //good
// const withdraw = (clients, balances, client, amount) => {
//       const clientIndex = clients.indexOf(client)
     
//       if (balances[clientBalance] <= amount) {
//         return -1;
//       }
//   balances[clientIndex] -= amount;
//      return (balances[clientIndex]);
//  }

//bad
// logica
// validation
// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };
 //norm
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };
// //good
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client)
//   if (balances[clientIndex] < amount ) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };


// const withdraw=(clients,balances,client,amount)=>{
//   let clientIndex=clients.indexOf(client);
//   return balances[clientIndex]<amount?-1:balances[clientIndex]-=amount;
// }

// const withdraw=(clients,balances,client,amount)=>{
//   const clientIndex=clients.indexOf(client);
//   return balances[clientIndex]<amount?-1:balances[clientIndex]-=amount;
// }

// // DIMA
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// }
// if (a > 2) {
//   console.log('hello')

// } else {
  
// }

// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  // if (to - from < 1) {
  //   return null;
  // }
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (fromCeil - toCeil < 1) {
    return null;
  }
  return arr.fill(Math.trunc(Math.random() * toCeil - fromCeil) + Math.ceil(from));
};