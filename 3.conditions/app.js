// let firstName = prompt("Entrez votre nom : ");
// alert(`Votre nom est ${firstName}`);

// Opérateurs logiques : &&(and) / ||(or)
// > : Strictement supérieur
// < : Strictement inférieur
// > = : Supérieur ou égal
// < = : Inféieur ou égal
// = = : Egalité
// = = = : Eglité stricte
// ! = : Différence
// ! = = = : Différence stricte
let language = prompt("Entrez une langue:");
// if (language == "french") {
//   alert("Salut!!");
// } else if (language == "english") {
//   alert("Hello!!");
// } else if (language == "german") {
//   alert("Guten tag");
// } else if (language == "spanish") {
//   alert("Holla");
// } else {
//   alert("Langue non supportée");
// }

switch (language) {
  case "french":
    alert("Salut!!");
    break;
  case "english":
    alert("Hello!");
    break;
  case "german":
    alert("Guten tag!");
    break;
  case "spanish":
    alert("Hola");
    break;
  default:
    alert("Langue non supportée!");
}

const age = 12;
const isMajor = age >= 18;
if (isMajor) {
  console.log("Ouiii");
} else {
  console.log("Noonn");
}
