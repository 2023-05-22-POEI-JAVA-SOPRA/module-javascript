// Version 1 : Code sans fonctions
// const tab1 = Array.from(
//   { length: 10 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// const tab2 = Array.from(
//   { length: 5 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// const tab3 = Array.from(
//   { length: 3 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// const tab4 = Array.from(
//   { length: 7 },
//   () => Math.floor(Math.random() * 100) + 1
// );

// Version 2 : Utilisation des fonctions
function generateArrayWithRandomValues(size) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100) + 1
  );
}

const tab1 = generateArrayWithRandomValues(4);
const tab2 = generateArrayWithRandomValues(2);
const tab3 = generateArrayWithRandomValues(6);
const tab4 = generateArrayWithRandomValues(3);

console.log("Tab 1", tab1);
console.log("Tab 2", tab2);
console.log("Tab 3", tab3);
console.log("Tab 4", tab4);

// Solution sans fonctions
// let sommeMultiples3 = 0;
// tab1
// for (let i = 0; i < tab1.length; i++) {
//   if (tab1[i] % 3 === 0) {
//     console.log(tab1[i]);
//     sommeMultiples3 += tab1[i];
//   }
// }
//tab2
// for (let i = 0; i < tab2.length; i++) {
//   if (tab2[i] % 3 === 0) {
//     console.log(tab2[i]);
//     sommeMultiples3 += tab2[i];
//   }
// }

// tab3
// for (let number of tab3) {
//   if (number % 3 === 0) {
//     console.log(number);
//     sommeMultiples3 += number;
//   }
// }

// tab4
// for (let number of tab4) {
//   if (number % 3 === 0) {
//     console.log(number);
//     sommeMultiples3 += number;
//   }
// }

// Solution1 avec une fonction
// function sumMultiples3(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num % 3 === 0) {
//       console.log(num);
//       sum += num;
//     }
//   }
//   return sum;
// }

// const sommeMultiples3 =
//   sumMultiples3(tab1) +
//   sumMultiples3(tab2) +
//   sumMultiples3(tab3) +
//   sumMultiples3(tab4);

// Solution2 : fonction generique
function sumMultiplesOf(number, arr) {
  let sum = 0;
  for (let value of arr) {
    if (value % number === 0) {
      console.log(value);
      sum += value;
    }
  }
  return sum;
}

const sommeMultiples3 =
  sumMultiplesOf(3, tab1) +
  sumMultiplesOf(3, tab2) +
  sumMultiplesOf(3, tab3) +
  sumMultiplesOf(3, tab4);

console.log(`Somme : ${sommeMultiples3}`);
