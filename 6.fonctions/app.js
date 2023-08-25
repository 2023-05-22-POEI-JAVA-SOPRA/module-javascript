// Fonctions/Méthodes en Java
// int sum(int a,int b){
//     return a+b;
// }

// Fonctions en Javascript
function sum(a, b) {
  return a + b;
}

// Fonction qui ne retourne rien(void) en Java
// void sayHello(String name){
//     System.out.printf("Hello %s",name);
// }

// Fonction qui ne retourne rien(void) en Javascript
function sayHello(name) {
  console.log(`Hello ${name}`);
}

// Mini projet
const nombre1 = Number(prompt("Veuillez entrer la première valeur : "));
const nombre2 = Number(prompt("Veuillez entrer la deuxième valeur : "));
const somme = sum(nombre1, nombre2);
alert(`${nombre1} + ${nombre2} = ${sum(nombre1, nombre2)}`);
// alert(`${nombre1} + ${nombre2} = ${sum(nombre1,nombre2)}`)
