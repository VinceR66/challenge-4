
var timerEl = document.querySelector("#timer");

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " second(s) left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Game Over";
}

setTime();

var questionsList = [
    {
        questionText: "how do I declare a variable in JavaScript",
        choices: ["var", "for", "while", "if"],
        correctAnswer: "var",
    },
    {
        questionText: "how do I declare a variable in JavaScript",
        choices: ["var", "for", "while", "if"],
        correctAnswer: "var",
    },
    {
        questionText: "how do I declare a variable in JavaScript",
        choices: ["var", "for", "while", "if"],
        correctAnswer: "var",
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
}

main();