var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body1 = document.getElementById("gradient");
var body2 = document.getElementById("particles-js");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");

function setGradient() {
  body1.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";

  css.textContent = body1.style.background + ";";
}

function randomButton() {
  var randomRGB1 = '#'+Math.floor(Math.random()*16777215).toString(16);
  var randomRGB2 = '#'+Math.floor(Math.random()*16777215).toString(16);

  color1.value = randomRGB1;
  color2.value = randomRGB2;

  setGradient();
}

function effectsToggle() {
  body2.classList.toggle("disable");
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button1.addEventListener("click", randomButton);
button2.addEventListener("click", effectsToggle);