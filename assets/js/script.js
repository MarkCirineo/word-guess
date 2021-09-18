var startButton = $(".start-button");
var timerCounter = $(".timer-count");

var secondsLeft = 10;

function startTimer() {    
    var timer = setInterval(() => {
        secondsLeft--;
        timerCounter.text(secondsLeft)    
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.on("click", startTimer)