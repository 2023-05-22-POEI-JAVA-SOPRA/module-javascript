// let : Déclaration des variables
// let name = "Chris";
// name = "Sarah";

// const : Déclaration des constantes
const PI = 3.14;
//PI = 2.3; //Erreur

/**
 *  Anti-hoisting
 * */
// console.log(pays);
// let pays = "France";
// const pays = "France";
// console.log(pays);

// Local variables : Loops
// for (let i = 0; i < 10; i++) {
//   console.log(`Dans la boucle : ${i}`);
// }
// console.log(`En dehors de la boucle : ${i}`);

// Local variables : conditions
// if (true) {
//   let firstName = "Chris";
//   console.log("Nom : ", firstName);
// }
// console.log("Nom : ", firstName);

let age = 45;
console.log(age); //45
if (true) {
  let age = 17;
  console.log(age); //17

  if (true) {
    console.log(age); //17
  }
}
console.log(age); //45
