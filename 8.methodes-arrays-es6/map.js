// Array.map
// 1. Retourne toujours un tableau de même que le tableau d'origin
const fruits = ["pommes", "mangues", "ananas", "oranges"];

// Appliquer toUpperCase() à la liste des fruits
// 1. For classique
const fruitsMaj = [];
for (const fruit of fruits) {
  fruitsMaj.push(fruit.toUpperCase());
}

// 2. Avec map
// fonctionnement
// - Création d'un tableau vide en mémoire []
// - Itération sur chaque element : "pomme"
// - La valeur retournée est ajoutée à la fin du tableau : tb.push("pomme")
const fruitsMaj2 = fruits.map(function (fruit) {
  return fruit.toUpperCase();
  // console.log(fruit);// Très mauvaise pratique
});

const fruitsMaj2Arrow = fruits.map((fruit) => fruit.toUpperCase());

console.log(fruitsMaj2);
console.log(fruitsMaj2Arrow);

// Garder uniquement l'id, le nom(prenom + nom) et l'adresse email
const contacts = [
  {
    id: 1,
    nom: "Lisangola",
    prenom: "Christian",
    age: 12,
    email: "christian.lisangola@gmail.com",
  },
  {
    id: 2,
    nom: "Thomas",
    prenom: "Julie",
    age: 14,
    email: "julie.thomas@gmail.com",
  },
  {
    id: 3,
    nom: "Skali",
    prenom: "Amine",
    age: 20,
    email: "amine.skali@gmail.com",
  },
  {
    id: 4,
    nom: "Puaud",
    prenom: "Thomas",
    age: 26,
    email: "thomas.puaud@yahoo.fr",
  },
  {
    id: 5,
    nom: "Cian",
    prenom: "Amandine",
    age: 27,
    email: "amendine.cian@hotmail.fr",
  },
];

// 1. For classique
const contactSansMap = [];
for (const contact of contacts) {
  const obj = {
    id: contact.id,
    name: `${contact.prenom} ${contact.nom}`,
    email: contact.email,
  };
  contactSansMap.push(obj);
}

console.log(contactSansMap);

// 2. Avec map
const contactAvecMapReturn = contacts.map((contact) => {
  return {
    id: contact.id,
    name: `${contact.prenom} ${contact.nom}`,
    email: contact.email,
  };
});
console.log(contactAvecMapReturn);

const contactAvecMapSansReturn = contacts.map((contact) => ({
  id: contact.id,
  name: `${contact.prenom} ${contact.nom}`,
  email: contact.email,
}));
console.log(contactAvecMapSansReturn);

// Mettre tous les nombres à la puissance 2
const numbers = [2, 3, 4, 5, 6, 7];
const numbersPowerOf2 = numbers.map((number) => Math.pow(number, 2));
console.log(numbersPowerOf2);
