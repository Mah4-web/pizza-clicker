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

// Fetch upgrade options from an API

async function displayUpgrades() {
    const upgrades = await getUpgrades();
    const upgradeContainer = document.getElementById("upgrades");

    for (let i = 0; i < upgrades.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = `${upgrades[i].name} - Cost: ${upgrades[i].cost} pizzas`;
    btn.className = "upgradeButtons";
    btn.setAttribute("index", i);
    upgradeContainer.appendChild(btn);

    btn.addEventListener("click", function () {
    const index = this.getAttribute("index");
    if (state.pizzaCount >= upgrades[index].cost) {
        state.pizzaCount -= upgrades[index].cost;
        state.cps += upgrades[index].increase;
        updatePizzaAmount();
    } else {
        alert("You don't have enough pizzas!");
    }
    });
}
}