const salutations = {
  french: "Salut!",
  english: "Hello",
  german: "Guten tag",
  spanish: "Hola",
};
let language = prompt("Entrez une langue:"); //english

// if (salutations[language]) {
//   alert(salutations[language]);
// } else {
//   alert("Langue non supportée");
// }

alert(salutations[language] ? salutations[language] : "Langue non supportée");
