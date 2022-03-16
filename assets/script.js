var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timeInterval);
            console.log("Show times up message here")
        }
    }, 1000);
}

var startBtn = document.querySelector("#start");

console.log(countdown);

startBtn.addEventListener("click", countdown);