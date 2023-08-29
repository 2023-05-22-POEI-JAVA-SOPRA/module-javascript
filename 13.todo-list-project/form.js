const $registerForm = document.querySelector("#registerForm");

const formData = {};

$registerForm.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value;
});

$registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(formData);
  console.log(JSON.stringify(formData));
});
