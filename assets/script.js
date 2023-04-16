
var startGame = document.querySelector("#gameStart");
startGame.addEventListener('click', start)
var score = 0

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


function start() {
    document.getElementById("containerStart").classList.add("hide");
    document.getElementById("containerStart").classList.remove("show");
    document.getElementById("containerQuestion").classList.remove("hide");
    document.getElementById("containerQuestion").classList.add("show");
    timer()
    jack();

}

console.log(questionsList.length, 'total number of questions');

var questionsTextElement = document.getElementById("question");
var choicesContainerElement = document.getElementById("buttonAnswers");
var k = 0;

var t = 0
function jack() {
    if (t < questionsList.length) {
        t++;
        console.log(t, 'value of t');
        main();
    } else {
        console.log('finished');
        endScore();
    }
}



function main() {

    questionsTextElement.textContent = questionsList[k].questionText;

    for (var i = 0; i < questionsList[k].choices.length; i++) {
        var newChoiceButton = document.createElement("button");
        newChoiceButton.textContent = questionsList[k].choices[i];
        choicesContainerElement.append(newChoiceButton);
        newChoiceButton.addEventListener('click', checkAnswer);
    }
    k = k + 1;
    console.log("main...added question and answers");
    console.log(k, 'value of k');
}


var checkAnswer = function (e) {
    e.preventDefault();
    console.log(questionsList[k - 1].correctAnswer);
    var selectedAnswer = e.target
    if (questionsList[k - 1].correctAnswer === selectedAnswer.innerText) {
        score = score + 10;
        console.log(score, 'score');
        correctAnswer();
    }
    else {
        score = score - 3;
        secondsLeft = secondsLeft - 5;
        console.log(score);
        console.log(secondsLeft, 'time left');
        wrongAnswer()
    };
}

var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

function correctAnswer() {
    console.log("correct answer");
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
    }
    newQuestion();
};

function wrongAnswer() {
    console.log('wrong answer');
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
    newQuestion()
}


function newQuestion() {
    console.log('new question');
    answerReset();
}


function answerReset() {
    while (choicesContainerElement.firstChild) {
        choicesContainerElement.removeChild(choicesContainerElement.firstChild)
    }
    console.log('answer reset');
    //main();
    //new code
    jack();

}

function endScore() {
    //document.getElementById("containerQuestion").classList.remove("show");
    document.getElementById("containerQuestion").classList.add("hide");
    document.getElementById("containerEnd").classList.remove("hide");
    document.getElementById("containerEnd").classList.add("show");

    var showScore = document.createElement("p");
    showScore.innerText = ('Final Score:  ' + score);
    containerEnd.appendChild(showScore);
};

var initialsInput = document.getElementById("initialsForm");
initialsInput.addEventListener("submit", highScore);

function highScore(e) {
    e.preventDefault();
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        console.log('highScore')
        alert("Enter your initials");
        return;
    }
    //may not need to call yet - possibly after high score (li) list
    highScoreList();
}

initialsInput.reset();

var scoreInput = [];

var inputScore = {
    initials: initials,
    score: score
}

scoreInput.push(inputScore);
scoreInput.sort((a, b) => { return b.score - a.score });

var hScoreList = document.getElementById("list");

while (hScoreList.firstChild) {
    hScoreList.removeChild(hScoreList.firstChild);
}

for (var i = 0; i < scoreInput.length; i++) {
    var hScore = document.createElement("li");
    hScore.className = "highScore";
    hScore.innerHTML = scoreInput[i].initials + " --- " + scoreInput[i].score;
    hScoreList.appendChild(hScore);
}

//saveHighScore();
//highScoreList();

function saveHighScore() {
    localStorage.setItem("scoreInput", JSON.stringify(scoreInput))
}



function highScoreList() {
    document.getElementById("containerHighScore").classList.remove("hide");
    document.getElementById("containerHighScore").classList.add("show");

    if (document.getElementById("containerEnd").className = "show") {
        document.getElementById("containerEnd").classList.remove("show");
        document.getElementById("containerEnd").classList.add("hide");
    }

    if (document.getElementById("containerQuestion").className = "show") {
        document.getElementById("containerQuestion").classList.remove("show");
        document.getElementById("containerQuestion").classList.add("hide");
    }

    if (document.getElementById("containerStart").className = "show") {
        document.getElementById("containerStart").classList.remove("show");
        document.getElementById("containerStart").classList.add("hide");
    }

    if (document.getElementById("correct").className = "show") {
        document.getElementById("correct").classList.add("hide");
        document.getElementById("correct").classList.remove("show");
    }

    if (document.getElementById("wrong").className = "show") {
        document.getElementById("wrong").classList.add("hide");
        document.getElementById("wrong").classList.remove("show");
    }
}



var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

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















