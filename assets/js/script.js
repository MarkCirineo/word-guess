var startButton = $(".start-button");
var timerCounter = $(".timer-count");
var wordBlanks = $(".word-blanks");

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

startButton.on("click", startGame);

var words = ["blue", "green", "purple", "orange", "red", "yellow", "brown"];

function startGame() {
    startTimer();
    var underscore = [""];
    var randomWord = words[Math.floor(Math.random() * words.length)];
    // console.log(randomWord);
    for (let i = 0; i < randomWord.length; i++) {
        underscore.push("_");
    }
    underscore = underscore.join(" ")
    wordBlanks.text(underscore)

}