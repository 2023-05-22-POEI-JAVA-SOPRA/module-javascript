const tb = [];
tb[0] = 15;

const tb2 = [12, 15, 17, 9, 8, 15];
const tb3 = tb2;

//***** Insertions à la fin du tableau -> push(value) : Ajouter à la fin du tableau O(1)
const countries = ["France", "Germany", "USA"];
countries.push("China");
countries.push("Japan");
countries.push("Spain");

//*****  Suppression à fin du tableau -> pop() : Supprimer le dernier element du tableau O(1)
// pop() fait 2 choses
// - Supprimer le dernier element du tableau
// - Retourne l'element supprimé
countries.pop(); //Cette instruction supprime "spain" du tableau countries
const derniereValeurSupprimee = countries.pop(); // -> Japan

//** Ajouter au début du tableau -> unshift(value) : O(n)
countries.unshift("South Korea");

//** Supprimer le premier element du tableau -> shift() :O(n)
// 1. Supprimer au début
// 2. Retourner la valeur supprimée
countries.shift();
const premiereValeurSupprimee = countries.shift(); //

//** Iteration
// 1. Boucle for classique
for (let i = 0; i < countries.length; i++) {
  console.log("Avec for classique : ", countries[i]);
}
// 2. Boucle for..of : Ce que j'aime
for (let country of countries) {
  console.log("Avec for..of", country);
}

// 3. For in
for (let index in countries) {
  console.log("Avec for..of", countries[index]);
}

//** Copier un tableau
const names = [
  "Chris",
  "Amandine",
  "Maxence",
  "Laurent",
  "Zidane",
  "Jackie Chan",
];
const names2 = [...names];
// Combiner plieurs tableaux
const bresiliensDuFcBarcelone = [
  "Ronaldinho",
  "Silvinho",
  "Belleti",
  "Edmilson",
];

const bresiliensDuRealMadrid = [
  "Ronaldo",
  "R.Carlos",
  "Robinho",
  "J.Baptista",
  "Christito",
];

const equipeBresil = [...bresiliensDuFcBarcelone, ...bresiliensDuRealMadrid];
