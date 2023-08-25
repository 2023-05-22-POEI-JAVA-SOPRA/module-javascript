// const chris = {
//   fname: "Chris",
//   lname: "Lisangola",
//   age: 31,
//   fullName() {
//     return `${this.fname} ${this.lname}`;
//   },
// };

// const amine = {
//   fname: "Amine",
//   lname: "Skali",
//   fullName() {
//     return `${this.fname} ${this.lname}`;
//   },
// };

const user = {
  id: 1,
  fname: "Christian",
  lname: "Lisangola",
  age: 31,
};

user.lname = "Zozo";
user.country = "USA";
user["profession"] = "Software Developer";

console.log(`
  #ID : ${user.id}
  Nom : ${user.lname}
  Prenom : ${user.fname}
  Age: ${user.age}
  Pays : ${user.country}
  Profession : ${user["profession"]}
`);

// Destructuration : Objects
const { id, lname, fname, country, profession, age } = user;
// const id=user.id
// const lname=user.lname
// const fname=user.fname..
console.log(id);
console.log(lname);
console.log(`
  #ID : ${id}
  Nom : ${lname}
  Prenom : ${fname}
  Age: ${age}
  Pays : ${country}
  Profession : ${user["profession"]}
`);

// Destructuration : Arrays
const companies = ["Google", "Meta", "Netflix", "Uber", "Amazon"];

console.log(companies[0]); //Google
const [google, , netflix] = companies;
console.log(google);
console.log(netflix);

// Swap avec la destructuration
let a = 4;
let b = 9;
[a, b] = [b, a]; //[9,4]
