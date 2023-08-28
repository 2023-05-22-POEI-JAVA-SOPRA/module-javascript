const numbers = [2, 3, 4, 5, 6, 7];
const numbersGreaterThan4 = [];
// Sans filter
for (const number of numbers) {
  if (number > 4) {
    numbersGreaterThan4.push(number);
  }
}
console.log(numbersGreaterThan4);

// Avec filter : API déclarative
const numbersGreaterThan4WithFilter = numbers.filter((number) => number > 4);
console.log(numbersGreaterThan4WithFilter);

const numbersGreaterThan6 = numbers.filter((number) => number > 6);
console.log(numbersGreaterThan6);

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
const contactWithGmail = [];
for (const contact of contacts) {
  if (contact.email.endsWith("@gmail.com")) {
    contactWithGmail.push(contact);
  }
}

console.log(contactWithGmail);

// 2. Avec filter
const contactAvecGmailFilter = contacts.filter((contact) =>
  contact.email.endsWith("@gmail.com")
);
console.log(contactAvecGmailFilter);

// 3. Enchainement de filter et map
const contactAvecGmailFilterEtMap = contacts
  .filter((contact) => contact.email.endsWith("@gmail.com"))
  .map((contact) => ({
    id: contact.id,
    name: `${contact.prenom} ${contact.nom}`,
    email: contact.email,
  }));
console.log(contactAvecGmailFilterEtMap);
