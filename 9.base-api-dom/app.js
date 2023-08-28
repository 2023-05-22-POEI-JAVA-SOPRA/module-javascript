const technos = document.querySelectorAll("li");
const titre = document.querySelector("h1");
titre.innerText = "Bonjour";

console.log("Titre : ", titre);

for (const techno of technos) {
  console.log(`#${techno.innerText} - classe : ${techno.className}`);
}

const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

// TP
for (let i = 0; i < framworks.length; i++) {
  technos[i].innerText = framworks[i];
}
