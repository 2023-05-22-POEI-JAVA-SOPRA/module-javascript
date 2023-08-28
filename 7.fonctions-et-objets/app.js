// sayHello("Christian");
// function sayHello(name) {
//   console.log(`Salut ${name}`);
// }

// const sayGoodMorning = function (name) {
//   console.log(`Good morning ${name}`);
// };
// sayGoodMorning("Christophe");
// function doSomething(name) {
//   var fullName = `#${name}`;
//   console.log(fullName);
// }
// function f1() {
//   console.log(this);

//   function f2() {
//     console.log(this);
//     function f3() {
//       console.log(this);
//     }
//     //Appel de f3
//     f3();
//   }
//   //Appel de f2
//   f2();
// }

// f1();
function f1(firstName, lastName, age) {
  // {}
  this.firstName = firstName; //firstName='Christian'
  this.lastName = lastName; // lastName="Lisangola"
  this.age = age; // age = 31
  // return { firstName:'Christian',lastName:'Lisangola',age:31 }
}

// const resultat = f1("Christian", "Lisangola", 31);
// const resultat2 = new f1("Christian", "Lisangola", 31); //Appel à une fonction constructeur

function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

const amine = new Person("Amine", "Skali", 78);
const julie = new Person("Julie", "Thomas", 79);
const chris = new Person("Chris", "Lis", 80);
const zod = Person("Zod", "Zad", 200);
