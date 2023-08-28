const numbers = [2, 3, 5, 7, 8, 12, 13];

// Solution sans reduce
let sum = 0;
for (const number of numbers) {
  sum += number;
}

console.log("Sum : ", sum);

// Solution avec reduce
// let sumReduce = numbers.reduce(function (sum, number) {
//   return sum + number;
// }, 0);
let sumReduce = numbers.reduce((sum, number) => sum + number, 0);

console.log("Sum reduce : ", sumReduce);
