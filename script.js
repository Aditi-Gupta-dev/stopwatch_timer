const stopwatchTime = document.getElementById("stopwatchTime");
const startStopwatchButton = document.getElementById("startStopwatch");
const resetStopwatchButton = document.getElementById("resetStopwatch");

let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

startStopwatchButton.addEventListener("click", () => {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    startStopwatchButton.textContent = "Resume";
  } else {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    startStopwatchButton.textContent = "Pause";
  }
  stopwatchRunning = !stopwatchRunning;
});

resetStopwatchButton.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchSeconds = 0;
  stopwatchTime.textContent = "00:00:00";
  startStopwatchButton.textContent = "Start";
});

function updateStopwatch() {
  stopwatchSeconds++;
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  stopwatchTime.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}
const lapStopwatchButton = document.getElementById("lapStopwatch");
const clearLapsButton = document.getElementById("clearLaps");
const lapTimesContainer = document.getElementById("lapTimes");
let lapCounter = 1;

lapStopwatchButton.addEventListener("click", () => {
  if (stopwatchRunning) {
    const lapTime = stopwatchTime.textContent;
    const lapElement = document.createElement("div");
    lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapTimesContainer.appendChild(lapElement);
    lapCounter++;
  }
});

clearLapsButton.addEventListener("click", () => {
  while (lapTimesContainer.firstChild) {
    lapTimesContainer.removeChild(lapTimesContainer.firstChild);
  }
  lapCounter = 1;
});

// Timer

const timerInput = document.getElementById("timerInput");
const timerTime = document.getElementById("timerTime");
const startTimerButton = document.getElementById("startTimer");
const resetTimerButton = document.getElementById("resetTimer");

let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

startTimerButton.addEventListener("click", () => {
  if (!timerRunning) {
    const inputTime = timerInput.value.split(":");
    if (inputTime.length === 3) {
      const hours = parseInt(inputTime[0]);
      const minutes = parseInt(inputTime[1]);
      const seconds = parseInt(inputTime[2]);
      if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
        timerSeconds = hours * 3600 + minutes * 60 + seconds;
        if (timerSeconds > 0) {
          updateTimer(); // Update the timer immediately once started
          timerInterval = setInterval(updateTimer, 1000);
          startTimerButton.textContent = "Pause";
          timerRunning = true;
        }
      }
    }
  } else {
    clearInterval(timerInterval);
    startTimerButton.textContent = "Resume";
    timerRunning = false;
  }
});

resetTimerButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  timerInput.value = "";
  timerTime.textContent = "00:00:00";
  startTimerButton.textContent = "Start";
});

function updateTimer() {
  if (timerSeconds <= 0) {
    clearInterval(timerInterval);
    timerRunning = false;
    timerTime.textContent = "00:00:00";
    startTimerButton.textContent = "Start";
    return;
  }

  timerSeconds--;
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  timerTime.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("lightmode");
    
}