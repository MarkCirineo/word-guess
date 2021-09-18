var startButton = $(".start-button");
var timerCounter = $(".timer-count");
var wordBlanks = $(".word-blanks");
var wins = $(".win");
var losses = $(".lose");
var resetButton = $(".reset-button");

var secondsLeft = 10;
var randomWord = "";
var randomWordArr = [];
var underscore = [];
var numOfBlanks = 0;
var win = false;
var timer;
var winCount = 0;
var lossCount = 0;

function startTimer() {    
    timer = setInterval(() => {
        secondsLeft--;
        timerCounter.text(secondsLeft)
        if (secondsLeft > 0) {
            if(win && secondsLeft > 0) {
                clearInterval(timer)
                // console.log("win")
                gameWin();
            }
        }    
        if (secondsLeft === 0) {
            clearInterval(timer);
            gameLoss();
        }
    }, 1000);
}

var words = ["blue", "green", "purple", "orange", "red", "yellow", "brown"];

function startGame() {
    win = false;
    secondsLeft = 10;
    startTimer();
    
    randomWord = words[Math.floor(Math.random() * words.length)];
    randomWordArr = randomWord.split("");
    numOfBlanks = randomWordArr.length;
    underscore = []
    console.log(randomWordArr)
    for (let i = 0; i < numOfBlanks; i++) {
        underscore.push("_");
    }
    wordBlanks.text(underscore.join(" "))
}

function checkLetter(letter) {
    var letterInWord = false;
    for (var i = 0; i < numOfBlanks; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numOfBlanks; j++) {
            if (randomWord[j] === letter) {
                underscore[j] = letter;
            }        
        }
        wordBlanks.text(underscore.join(" "))
    }
}

document.addEventListener("keydown", function (e) {
    if (secondsLeft === 0) {
        return;
    }
    var key = e.key.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz ".split("");
    if (alphabet.includes(key)) {
        var letterGuessed = e.key;
        checkLetter(letterGuessed);
        if (randomWord === underscore.join("")) {
            win = true;
            // console.log(win);
        }
    }
})

startButton.on("click", startGame);

function gameWin() {
    wordBlanks.text("YOU WIN!")
    winCount++;
    // console.log(winCount)
    wins.text(winCount);
    localStorage.setItem("wins", winCount);
}

function gameLoss() {
    wordBlanks.text("YOU LOSE!")
    lossCount++;
    losses.text(lossCount);
    localStorage.setItem("losses", lossCount);
}

function getWins() {
    var storedWins = localStorage.getItem("wins")
    if (storedWins === null) {
        winCount = 0;
    } else {
        winCount = storedWins;
    }
    wins.text(winCount);
}

function getLosses() {
    var storedLosses = localStorage.getItem("losses");
    if (storedLosses === null) {
        lossCount = 0;
    } else {
        lossCount = storedLosses;
    }
    losses.text(lossCount);
}

function init() {
    getWins();
    getLosses();
}

init();

function resetScore() {
    winCount = 0;
    lossCount = 0;

    wins.text(winCount);
    losses.text(lossCount);
    localStorage.setItem("wins", winCount);
    localStorage.setItem("losses", lossCount);
}

resetButton.on("click", resetScore);