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

// const contactAvecMapSansReturn = contacts.map(({ id, prenom, nom, email }) => ({
//   id: id,
//   name: `${prenom} ${nom}`,
//   email: email,
// }));

const contactAvecMapSansReturn = contacts.map(({ id, prenom, nom, email }) => ({
  id, // id:id
  email, //email:email
  name: `${prenom} ${nom}`,
}));
