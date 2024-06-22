//
//For timer
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString()
        .padStart(2, "0")}:${seconds.toString()
            .padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

function startColor() {
    const clockEl = document.getElementById("clock");
    clockEl.style.backgroundColor = "#27ae60";
}

function stopColor() {
    const clockEl = document.getElementById("clock");
    clockEl.style.backgroundColor = "#c0392b";
}

function resetColor() {
    const clockEl = document.getElementById("clock");
    clockEl.style.backgroundColor = "#7f8c8d";
}
startEl.addEventListener("click", startTimer);
startEl.addEventListener("click", startColor);
stopEl.addEventListener("click", stopTimer);
stopEl.addEventListener("click", stopColor);
resetEl.addEventListener("click", resetTimer);
resetEl.addEventListener("click", resetColor);
// 
//For tasks
const input = document.querySelector("input");
const list = document.querySelector(".task-container");
const taskBtn = document.querySelector(".taskBtn");

taskBtn.addEventListener("click", () => {
    const newTask = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = newTask;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});
//
//For Finished Tasks