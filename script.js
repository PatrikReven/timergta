
let elapsedSeconds = Number(localStorage.getItem("elapsedSeconds")) || 0;
let timerInterval = null;
let running = false;

const startBtn = document.getElementById("startBtn");

function updateTimer() {
    const days = Math.floor(elapsedSeconds / 86400);
    const hours = Math.floor((elapsedSeconds % 86400) / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

function saveTimer() {
    localStorage.setItem("elapsedSeconds", elapsedSeconds);
}

function startTimer() {
    if (running) return;

    running = true;
    startBtn.textContent = "PAUSE TIMER";

    timerInterval = setInterval(() => {
        elapsedSeconds++;
        updateTimer();
        saveTimer();
    }, 1000);
}

function pauseTimer() {
    running = false;
    clearInterval(timerInterval);
    startBtn.textContent = "RESUME TIMER";
    saveTimer();
}

startBtn.addEventListener("click", () => {
    if (running) {
        pauseTimer();
    } else {
        startTimer();
    }
});

updateTimer();
startBtn.textContent = "START TIMER";
