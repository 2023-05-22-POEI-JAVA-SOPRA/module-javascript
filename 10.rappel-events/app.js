const alarmButton = document.querySelector("#alarm-button");

const audio = new Audio("./alarm.wav");
alarmButton.addEventListener("click", function () {
  audio.play();
});
