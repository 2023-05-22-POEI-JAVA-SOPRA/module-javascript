// Afficher les carré de tous les nombres de 2 à 10
for (let c = 2; c <= 10; c++) {
  //   console.log("Le carré de " + c + " est " + Math.pow(c, 2));
  console.log(`Le carré de ${c} est ${Math.pow(c, 2)}`);
}

// Afficher la table de multiplication d'une valeur saisie à partir du clavier
let nombre = prompt("Entrez un nombre : "); // "7"
nombre = parseFloat(nombre);

let debut = parseInt(prompt("Première valeur : "));
let fin = parseInt(prompt("Dernière valeur: "));
console.log(`Table de multiplication de ${nombre}`);

// System.out.printf("Table de multiplication de %f",nombre)
// System.out.println("====================================");

console.log("===================================\n");
for (let i = debut; i <= fin; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
