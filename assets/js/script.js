var startButton = $(".start-button");
var timerCounter = $(".timer-count");
var wordBlanks = $(".word-blanks");

var secondsLeft = 10;
var randomWord = "";
var randomWordArr = [];
var underscore = [];
var numOfBlanks = 0;

function startTimer() {    
    var timer = setInterval(() => {
        secondsLeft--;
        timerCounter.text(secondsLeft)    
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

var words = ["blue", "green", "purple", "orange", "red", "yellow", "brown"];

function startGame() {
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
    // console.log(letter)
    var letterInWord = false;
    for (var i = 0; i < numOfBlanks; i++) {
        console.log(randomWord[i])
        if (randomWord[i] === letter) {
            letterInWord = true;
            console.log(letter)
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numOfBlanks; j++) {
            if (randomWord[j] === letter) {
                underscore[j] = letter;
                console.log(letter)
            }        
        }
        console.log(underscore)
        console.log(underscore.join(" "));
        wordBlanks.text(underscore.join(" "))
    }
}

document.addEventListener("keydown", function (e) {
    if (secondsLeft === 0) {
        return;
    }
    var key = e.key.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz ".split("");
    // console.log(alphabet)
    if (alphabet.includes(key)) {
        var letterGuessed = e.key;
        console.log(letterGuessed)
        checkLetter(letterGuessed);
    }
})

startButton.on("click", startGame);