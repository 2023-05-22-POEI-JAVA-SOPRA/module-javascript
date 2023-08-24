const notes = parseInt(prompt("Combien de notes voulez-vous insérer?"));

const notesCoursPhysique = [];

// Insertion
for (let i = 0; i < notes; i++) {
  notesCoursPhysique[i] = parseFloat(
    prompt(`Entrez la note numero ${i + 1} : `)
  );
}

// Calcul de la somme
let sommeNotes = 0;
for (let note of notesCoursPhysique) {
  sommeNotes += note;
}

// calcul de la moyenne
const moyenne = sommeNotes / notesCoursPhysique.length;

// Affichage du résultat
console.log(`
    Somme : ${sommeNotes}
    Moyenne : ${moyenne}
`);
