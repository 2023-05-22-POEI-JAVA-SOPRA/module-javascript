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
let contactWithWithId1 = null;
for (const contact of contacts) {
  if (contact.id === 1) {
    contactWithWithId1 = contact;
    break;
  }
}

console.log(contactWithWithId1);
// 2. Find
const contactWithId1Find = contacts.find(({contact}) => contact.id === 1);
console.log(contactWithId1Find);
