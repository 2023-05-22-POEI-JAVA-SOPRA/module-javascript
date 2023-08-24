// 1. Interdire la saisir des strings
let nombre = 0;
do {
  nombre = prompt("Entrez un nombre : ");
  nombre = parseFloat(nombre);
  if (nombre > 0) {
    break;
  }
  alert("Le nombre doit être > 0");
} while (nombre <= 0);

// Dans une seule boucle while:
// 2. Verifier que debut et fin soient > 0
// 3. Si la valeur de début est supérieure à la valeur de fin, faire un swap
// 4. debut et fin ne doivent pas être égaux
// 5. Interdire la saisie des strings

let debut = parseInt(prompt("Première valeur : "));
let fin = parseInt(prompt("Dernière valeur: "));
console.log(`Table de multiplication de ${nombre}`);

console.log("===================================\n");
for (let i = debut; i <= fin; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
