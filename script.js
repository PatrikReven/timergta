
let elapsedSeconds = 0;
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

startBtn.addEventListener("click", () => {

    if (!running) {
        running = true;

        startBtn.textContent = "PAUSE TIMER";

        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateTimer();
        }, 1000);

    } else {
        running = false;

        clearInterval(timerInterval);

        startBtn.textContent = "RESUME TIMER";
    }

});

updateTimer();
