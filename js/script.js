// LOW BATTERY
// CCT360 Project 3 by Tony Ren

// ELEMENTS
let scenes = document.getElementsByClassName("scene");
let startBtn = document.querySelector("#startBtn");

// VARIABLES
let currentScene = 0; // 0 = intro, 1 = Monday ... 5 = rest

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
