// Exercice 1
// const tab = [];
// for (let i = 0; i < 10; i++) {
//   tab.push(Math.floor(Math.random() * 100) + 1);
// }

// let min = tab[0];
// let max = tab[0];
// for (let i = 1; i < tab.length; i++) {
//   if (tab[i] < min) {
//     min = tab[i];
//   }
//   if (tab[i] > max) {
//     max = tab[i];
//   }
// }
// console.log("Tableaux : ", tab);
// console.log("Min :", min);
// console.log("Max :", max);

// Exercice 2
// const alphabet = [];
// // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// for (let i = 0; i < 26; i++) {
//   alphabet.push(String.fromCharCode(97 + i));
// }

// let indice = parseInt(prompt("Entrez un nombre entre 0 et 25 :"));
// console.log(alphabet[indice ]);

// Exercice 3
// const tab1 = [];
// const tab2 = [];

// for (let i = 0; i < 5; i++) {
//   tab1.push(Math.random());
//   tab2.push(Math.random());
// }

// let identiques = true;
// if (tab1.length === tab2.length) {
//   for (let i = 0; i < tab1.length; i++) {
//     if (tab1[i] !== tab2[i]) {
//       identiques = false;
//       break;
//     }
//   }
// } else {
//   identiques = false;
// }
// console.log(identiques);

// Exercice 4
// const tab = [];
// for (let i = 0; i < 10; i++) {
//   tab.push(Math.random() * 10);
// }

// let sommePairs = 0;
// let sommeImpairs = 0;
// for (let i = 0; i < tab.length; i++) {
//   if (i % 2 === 0) {
//     sommePairs += tab[i];
//   } else {
//     sommeImpairs += tab[i];
//   }
// }

// console.log("Somme pairs :", sommePairs);
// console.log("Somme impairs :", sommeImpairs);

// Exercice 5
// const mots = prompt("Entrez une phrase :").split(" ");
// const phraseInverse = [];

// for (let i = mots.length - 1; i >= 0; i--) {
//   phraseInverse.push(mots[i]);
// }

// console.log(phraseInverse.join(" "));

// Exercice 6
// const taille1 = Math.floor(Math.random() * 5) + 1;
// const taille2 = Math.floor(Math.random() * 5) + 1;

// const tab1 = [];
// const tab2 = [];

// for (let i = 0; i < taille1; i++) {
//   tab1.push(i + 1);
// }

// for (let i = 0; i < taille2; i++) {
//   tab2.push(String.fromCharCode(97 + i));
// }

// let tabFusion = [];
// for (let i = 0; i < taille1 || i < taille2; i++) {
//   if (i < taille1) {
//     tabFusion.push(tab1[i]);
//   }
//   if (i < taille2) {
//     tabFusion.push(tab2[i]);
//   }
// }
// console.log("Tableau 1: ", tab1);
// console.log("Tableau 2: ", tab2);
// console.log("Résultat : ", tabFusion);

// Exercice 7
// const tab = [];
// for (let i = 0; i < 10; i++) {
//   tab.push(Math.floor(Math.random() * 10) - 5);
// }

// let produit = 1;
// for (let i = 0; i < tab.length; i++) {
//   if (tab[i] > 0) {
//     produit *= tab[i];
//   }
// }

// console.log("Tableau : ", tab);
// console.log("Produit des positifs :", produit);
