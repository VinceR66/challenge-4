
var startGame = document.querySelector("#gameStart");
startGame.addEventListener('click', start)

function start() {
    document.getElementById("containerStart").classList.add("hide");
    document.getElementById("containerStart").classList.remove("show");
    document.getElementById("containerQuestion").classList.remove("hide");
    document.getElementById("containerQuestion").classList.add("show");
    questionsShuffled = questionsList.sort(() => Math.random() - .05)


    timer()
}

var questionsShuffled

function questionSelect() {
    answerReset()
    questionDisplay(questionsList[QuestionIndex])

}

var timerEl = document.querySelector("#timer");
var secondsLeft = 10;

function sendMessage() {
    timerEl.textContent = "Game Over";
};

function timer() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " second(s) left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
};



var questionsList = [
    {
        questionText: "How do you declare a variable in JavaScript?",
        choices: ["Use 'var'", "Use 'for'", "Use 'while'", "Use 'if'"],
        correctAnswer: "Use 'var'",
    },
    {
        questionText: "Arrays in JavaScript can be used to store _________.",
        choices: ["numbers", "booleans", "strings", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        questionText: "What does DOM stand for?",
        choices: ["Done On Monday", "Document Object Module", "Data Over Method", "Delete Over Mode"],
        correctAnswer: "Document Object Module",
    },
    {
        questionText: "When did JavaScript first appear?",
        choices: ["2000", "2005", "1995", "2008"],
        correctAnswer: "1995",
    },
    {
        questionText: "What HTML tag is not included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        correctAnswer: "header",
    },
];




