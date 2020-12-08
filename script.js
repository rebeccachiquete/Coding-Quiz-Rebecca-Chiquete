// variables for html
var quiz = document.getElementById("quiz");
var question = document.getElementById("questions");
var options = document.getElementById("options");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var scoreCont = document.getElementById("scoreCont");
var countdown = document.getElementById("countdown");
var timeleft = document.getElementById("Time Left");
var begin = document.getElementById("start");
var container = document.getElementById("container");
var message = document.getElementById("rightOrWrong");
var score = document.getElementById("score");
var getuser = document.getElementById("enterName")

// 3 questions (array)
var questions = [
    {
        q: "What is our instructors Name?",
        ans1: "Mike",
        ans2: "Logan",
        ans3: "Tuck",
        ans4: "Alejandro",
        correct: "ans2",
    },
    {
        q: "What Days Do we code?",
        ans1: "Mon,Wed,Sat",
        ans2: "Tues,Thurs",
        ans3: "Fri-Sun",
        ans4: "All The Above",
        correct: "ans1",
    },
    {
        q: "Where do you work on Homework",
        ans1: "Word",
        ans2: "Power Point",
        ans3: "VS Code",
        ans4: "Excel",
        correct: "ans3",
    }
]

// variables for timer and score 
var quizT = 60;
var userScore = 0;
var questionsfollowing = 0;
var timerInv;
var timeComplete;
// var showMessage;

// need to start quiz when hit begin need to hide other page.
container.addEventListener("click", beginQuiz);

// functions for questions when quiz begins
function showQuestions (){
    question.innerHTML = "<h4>" + questions[questionsfollowing].q + "</h4>";
    answer1.textContent = questions[questionsfollowing].ans1;
    answer2.textContent = questions[questionsfollowing].ans2;
    answer3.textContent = questions[questionsfollowing].ans3;
    answer4.textContent = questions[questionsfollowing].ans4;
}

function showTimer() {
    timerInv = setInterval(function() {
    quizT--;
    countdown.textContent = "Time: " + quizT;
    
    if (quizT === 0) {
        clearInterval(timerInv);
        finalPage();
    }
    timeComplete = 60 - quizT
    }, 1000);
}

function beginQuiz() {
    container.style.display = "none";
    showQuestions();
    showTimer();
    quiz.style.display = "block";
}

// go through questions even if wrong
answer1.addEventListener("click", nextQuest);
answer2.addEventListener("click", nextQuest);
answer3.addEventListener("click", nextQuest);
answer4.addEventListener("click", nextQuest);

// next questions on quiz - right and wrong answers 
function nextQuest(event) {
    if (event.target.value === questions[questionsfollowing].correct) {
        userScore++;
        message.style.color = "green"
        message.innerHTML = "You Got It!"
    } 
    else {
        message.style.color = "red"
        message.innerHTML = "Incorrect Time Subtracted"
        quizT -= 5;
        countdown.innerHTML = "Time : "+ quizT;
    }
    if(questionsfollowing < questions.length -1){
        questionsfollowing++;
    }
    else {
    clearInterval(timerInv);
    finalPage();
    }
    
    showQuestions();
};
 
// complete all questions - show final page - show score 
function finalPage() {
    container.style.display = "none";
    question.style.display = "none";
    quiz.style.display = "none"; 
    scoreCont.style.display = "block";
    score.innerHTML = userScore + " point(s)";
    timeleft.innerHTML = "Completed in " + timeComplete + " seconds";
}

// array of user input and info
var users = [];
var results = [];
var time = [];

function storeInput(event) {
    event.preventDefult();
//     // store user input
    var userSaved = getuser.value;
//     // array
    users.push(userSaved);
    results.push(userScore);
    time.push(timeComplete);
//     // string of array

}