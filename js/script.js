// LOW BATTERY
// CCT360 Project 3 by Tony Ren

// ELEMENTS
let scenes = document.getElementsByClassName("scene");
let startBtn = document.querySelector("#startBtn");
let batteryFill = document.querySelector("#battery-fill");
let batteryText = document.querySelector("#battery-text");

// VARIABLES
let currentScene = 0; // 0 = intro, 1 = Monday ... 5 = rest
let battery = 100;

// how much battery drains every tick (10 ticks a second), one number per scene
// intro and rest don't drain. each day of the week drains faster than the last.
let drainRates = [0, 0.1, 0.2, 0.3, 0.45, 0];

// FUNCTIONS

// show one scene and hide the rest
function showScene(number) {
  for (let i = 0; i < scenes.length; i++) {
    scenes[i].className = "scene";
  }
  scenes[number].className = "scene active";
  currentScene = number;
}

function startWeek() {
  showScene(1);
  setInterval(tick, 100); // run tick() 10 times a second
}

// runs 10 times a second: drain the battery a little
function tick() {
  battery = battery - drainRates[currentScene];

  if (battery < 0) {
    battery = 0;
  }

  updateBattery();
}

// make the battery in the corner match the battery variable
function updateBattery() {
  batteryFill.style.width = battery + "%";
  batteryText.textContent = Math.round(battery) + "%";

  // green, then yellow, then red
  if (battery > 50) {
    batteryFill.style.backgroundColor = "#4cd964";
  } else if (battery > 20) {
    batteryFill.style.backgroundColor = "#ffcc00";
  } else {
    batteryFill.style.backgroundColor = "#ff3b30";
  }
}

// TEMPORARY: arrow key to test the scenes (will be replaced later)
function testNext(event) {
  if (event.key == "ArrowRight" && currentScene < scenes.length - 1) {
    showScene(currentScene + 1);
  }
}

// EVENT LISTENERS
startBtn.addEventListener("click", startWeek);
document.addEventListener("keydown", testNext);
