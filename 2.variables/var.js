// Typage dynamique
var name = "Christian";
name = 45;
name = true;

// Hoisting
console.log("Avant déclaration : ", pays);
var pays = "France"; //-> pays=undefined
console.log("Après déclaration : ", pays);

// var : Variables globales
for (var i = 0; i < 10; i++) {
  console.log(`Dans la boucle : ${i}`);
}
console.log(`En dehors de la boucle : ${i}`);
