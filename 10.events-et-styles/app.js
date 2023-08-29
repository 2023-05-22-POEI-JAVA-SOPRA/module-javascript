const technos = document.querySelectorAll("li");

//1. CSS in JS
// for (const techno of technos) {
//   techno.style.backgroundColor = "indigo";
//   techno.style.color = "orangered";
//   techno.style.fontSize = "20px";
//   techno.style.border = "1px solid orangered";
// }

// Callback/Rappel
for (const techno of technos) {
  techno.addEventListener("click", function (/*event*/) {
    // alert(`${techno.innerText}`);
    // alert(`${this.innerText}`);
    // alert(event.target.innerText);
    // console.dir(this);
    // this.className = "tech"; Mauvaise pratique

    // Mauvaise pratique : Code legacy
    // if (this.classList.contains("tech")) {
    //   this.classList.remove("tech");
    // } else {
    //   this.classList.add("tech");
    // }

    // Bonne pratique : Utilisation de toggle
    this.classList.toggle("tech");
  });
}

// const numbers = [2, 3, 4, 5, 6];
// numbers.map(function (number) {
//   return number * number;
// });

const title = document.querySelector("h1");
document.body.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  // event.preventDefault();
  // console.log("Ouaisss");
  // title.classList.toggle("tech");
});
