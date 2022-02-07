function makeRed() {
  document.body.style.backgroundColor = "orangered";
}
function makeBlue() {
  document.body.style.backgroundColor = "darkSlateblue";
}
function makeYellow() {
  document.body.style.backgroundColor = "Yellow";
}


const blueButton = document.getElementById("blue-button");
//just set the name of a function
blueButton.onclick =  makeBlue;

const greenButton = document.getElementById("green-button");
greenButton.onclick = function () {
  document.body.style.backgroundColor = "aquamarine";}

  const yellowButton = document.getElementById("yellow-button");
  yellowButton.addEventListener("click", makeYellow);

  const yellowGreenButton = document.getElementById("YellowGreen-button");
  yellowGreenButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "YellowGreen";
  });

  const tomatoButton = document.getElementById("Tomato-button").addEventListener("click", function(){
    document.body.style.backgroundColor= "Tomato";
  })