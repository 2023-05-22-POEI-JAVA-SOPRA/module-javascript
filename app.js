const technos = document.querySelector(".technos");

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

for (const framwork of framworks) {
  //   technos.innerHTML = technos.innerHTML+`<li>${framwork}</li>`;
  technos.innerHTML += `<li>${framwork}</li>`;
}
