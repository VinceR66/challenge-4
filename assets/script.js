
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
    // main()
    // new code
    jack();

}
//new code
console.log(questionsList.length, 'total number of questions');

var questionsTextElement = document.getElementById("question");
var choicesContainerElement = document.getElementById("buttonAnswers");
var k = 0;
//new code
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
    document.getElementById("containerStart").classList.add("hide");
    document.getElementById("containerEnd").classList.remove("hide");
    document.getElementById("containerEnd").classList.add("show");
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")
    } else {
        if (correctEl.classList = "show") {
            correctEl.classList.remove("banner")
            correctEl.classList.add("hide")

        }
    }
    var showScore = document.createElement("p");
    showScore.innerText = ('Final Score:  ' + score);
    containerEnd.appendChild(showScore);
};

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




/*function showScore() {
    <h1>Game Over</h1>;
}*/



/*var questionIndex = 0

function questionSelect() {
    answerReset()
    questionDisplay(questionsList[questionIndex])

}

var buttonAnswers = (document.getElementById("buttonAnswers");

function answerReset() {
    while (buttonAnswers.firstChild) {
        buttonAnswers.removeChild(buttonAnswers.firstChild)
    };
};

var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("buttonAnswers");

function newQuestion() {
    questionEl.innerText = index.questionText
    for (var i = 0; i < index.choices.length; i++) {
        var answerButton = document.createElement('button');
        answerButton.innerText = index.choices[i].choice
        answerButton.classList.add("btn")
        answerButton.classList.add("answerbtn")
        answerButton.addEventListener("click", answerCheck)
        answerButtonEl.appendChild(answerButton)
    }
};
*/










