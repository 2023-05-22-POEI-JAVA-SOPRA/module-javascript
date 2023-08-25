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

// Solution2 : fonction generique
// function factory 
// Currying
function sumMultiplesOf(number) {
  return function (arr) {
    let sum = 0;
    for (let value of arr) {
      if (value % number === 0) {
        console.log(value);
        sum += value;
      }
    }
    return sum;
  };
}

const sumOfMultipleOf3 = sumMultiplesOf(3);

const sommeMultiples3 =
  sumOfMultipleOf3(tab1) +
  sumOfMultipleOf3(tab2) +
  sumOfMultipleOf3(tab3) +
  sumOfMultipleOf3(tab4);

console.log(`Somme : ${sommeMultiples3}`);
