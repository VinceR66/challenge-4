
document.querySelector("#gameStart");
document.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
    const element = document.getElementById("containerFirst");
    element.remove();
    start();
    main();
});

var timerEl = document.querySelector("#timer");
var secondsLeft = 10;

function sendMessage() {
    timerEl.textContent = "Game Over";
};

function start() {

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
];

var questionsTextElement = document.getElementById("question-text");
var choicesContainerElement = document.getElementById("choices-container");

function main() {
    questionsTextElement.textContent = questionsList[0].questionText;

    for (var i = 0; i < questionsList[0].choices.length; i++) {
        var newChoiceButton = document.createElement("button");
        newChoiceButton.textContent = questionsList[0].choices[i];
        choicesContainerElement.append(newChoiceButton);
    }
    console.log("This is my example");
};

