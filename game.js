console.log("Hello World, I Am Building My First Clicking (IDLE) Game!")

// DOM elements and total pizza count and CPS 

let pizzaAmount = document.getElementById("pizzaAmount");
let cpsAmount = document.getElementById("cps");
let toggleSoundBtn = document.getElementById("toggle-sound");
let clickContainer = document.getElementById("click-animation-container");

let pizzaSound = new Audio("Click.mp3");
    pizzaSound.volume = 1;
let soundOn = true;

let state = {
    pizzaCount: 0,
    cps: 0,
};
