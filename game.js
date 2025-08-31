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

// Save and load progress from localStorage

const loadSave = JSON.parse(localStorage.getItem("state"));
if (loadSave) {
    state.pizzaCount = loadSave.pizzaCount || 0;
    state.cps = loadSave.cps || 0;
}

function updatePizzaAmount() {
    pizzaAmount.innerText = "You have " + state.pizzaCount + " pizzas";
    cpsAmount.innerText = "CPS: " + state.cps;
}

function saveData() {
    localStorage.setItem("state", JSON.stringify(state));
}

// Plays sound effects when the pizza is clicked and animates a slice on each click

function showClickAnimation() {
    const anim = document.createElement("img");
    anim.src = "slice.png";
    anim.className = "click-animation";
    anim.style.left = `${Math.random() * 30 + 35}%`;
    clickContainer.appendChild(anim);

    setTimeout(() => anim.remove(), 1000);
}

document.getElementById("pizza").addEventListener("click", () => {
    state.pizzaCount++;
    updatePizzaAmount();
    if (soundOn) {
    pizzaSound.currentTime = 0;
    pizzaSound.play();
}
showClickAnimation();
});

// Sound toggle

toggleSoundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    toggleSoundBtn.textContent = soundOn ? "🔊 Sound: On" : "🔇 Sound: Off";
});

// Fetches upgrade options from an API with fallback

async function getUpgrades() {
    try {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const upgrades = await response.json();
    return upgrades;
    } catch (error) {
    console.warn("Failed to fetch upgrades from API. Using fallback upgrades.", error);

    // Fallback upgrade data
    return [
        { name: "Extra Cheese", cost: 10, increase: 1 },
        { name: "Faster Oven", cost: 50, increase: 5 },
        { name: "Pizza Robot", cost: 200, increase: 20 },
    ];
    }
}


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
// Upgrades

displayUpgrades();

setInterval(() => {
state.pizzaCount += state.cps;
updatePizzaAmount();
saveData();
}, 1000);

updatePizzaAmount();
