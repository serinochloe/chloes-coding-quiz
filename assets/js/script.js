


var startButton = document.getElementById("start");
var welcomeCard = document.getElementById("welcome-card");
var quizCard = document.getElementById("quiz-card");
var questionText = document.querySelector(".question-text");
var resultsCard = document.getElementById("results-card");
var questionText = document.getElementById("question-text");
var answerOptionsText = document.querySelector("#answer-options");
var quizFooter = document.getElementById("quiz-footer");


//  question array 
let questions = [
    {
        id: 0,
        question: "This is the first question?",
        answer: "This is the first answer",
        options: [
            "This is an incorrect option",
            "This is another incorrect option",
            "This is another wrong choice",
        ]
    },
    {
        id: 1,
        question: "This is the second question?",
        answer: "This is the second answer",
        options: [
            "This is a wrong choice",
            "This one is wrong too",
            "This is not correct",
        ]
    },
    {
        id: 2,
        question: "This is the third question?",
        answer: "This is the thirdanswer",
        options: [
            "This is a third wrong choice",
            "This one is third wrong too",
            "This is not third correct",
        ]
    }
];

// functions

function startTimer(){
    var counter = 5;
    setInterval(function() {
        counter--;
        if (counter >=0) {
            document.getElementById("timer").innerHTML = counter + " seconds remaining";
        } if (counter ===0) {
            clearInterval(counter);
            document.getElementById("timer").innerHTML = "Sorry, out of time";
        }
    }, 1000);
};

function startQuiz() {
    welcomeCard.setAttribute("style","visibility: hidden;");
    quizCard.setAttribute("style", "visibility: visible;");
    firstQuestion();
 
};
let i=0;
// var correctAnswer = document.querySelector(questions[i].answer);

function firstQuestion() {
    questionText.innerHTML = "<h1>" + questions[0].question + "</h1>";
    answerOptionsText.innerHTML =
    "<li class = 'answer'><button onclick='logSelection(event)'>" + questions[0].answer + "</button></li>" +
    "<li class = 'option'><button onclick='logSelection(event)'>" + questions[0].options [0] + "</button></li>" +
    "<li class = 'option'><button onclick='logSelection(event)'>" + questions[0].options[1]+ "</button></li>"+
    "<li class = 'option'><button onclick='logSelection(event)'>" + questions[0].options[2]+ "</button></li>";
    questCounter();
    // logAnswer ();
    
    

};


function showQuestions() {
    var selected= document.querySelectorAll(".option");
   if (i<2) {
        i++;
        // create option buttons 
        questionText.innerHTML =
        "<h1>" + questions[i].question + "</h1>";
        answerOptionsText.innerHTML =
        "<li class = 'answer'><button onclick = 'logSelection(event)'>" + questions[i].answer + "</button></li>" +
        "<li class = 'option'><button onclick ='logSelection(event)'>" + questions[i].options[0] + "</button></li>" +
         "<li class = 'option'><button onclick='logSelection(event)'>" + questions[i].options[1]+ "</button></li>"+
        "<li class = 'option'><button onclick = 'logSelection(event)'>" + questions[i].options[2]+ "</button></li>";
        questCounter();
    } else {
        quizCard.setAttribute("style", "visibility: hidden;");
        resultsCard.setAttribute ("style","visibility:visible;");
        resultsCard.textContent = "Thanks for Playing"
        // optionSelected();
        questCounter();
        // logAnswer ();
      };
};

function logSelection(event) {
console.log(event.target.textContent);
};
   




  

function questCounter() {
   quizFooter.innerHTML = "<p> Correct: 0/3 Incorrect: 0/3 </p>";
  };

function optionSelected() {};
   
    



// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);


answerOptionsText.addEventListener("click", showQuestions);

