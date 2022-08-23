var startScreen = document.querySelector(".start");
var testScreen = document.querySelector(".test");
var hsScreen = document.querySelector(".highscore");
var startToTest = document.querySelector(".startButton");
var startToHs = document.querySelector(".highscoreButton"); 
var score = 0;
var timer = 75;
var counter = 1;







// Chooses screen :)
var screenSelector = function(screen){
    if (screen == 0){
        startScreen.setAttribute("style", "display: flex;");
        testScreen.setAttribute("style", "display: none;");
        hsScreen.setAttribute("style", "display: none;");
   }
    if (screen == 1){
        startScreen.setAttribute("style", "display: none;");
        testScreen.setAttribute("style", "display: flex;");
        hsScreen.setAttribute("style", "display: none;");
   }
    if (screen == 2){
        startScreen.setAttribute("style", "display: none;");
        testScreen.setAttribute("style", "display: none;");
        hsScreen.setAttribute("style", "display: flex;");
   }

}


//the seven layers of hell

var questionGenerator = function(){

     
    //declaraction for testing phase
var questions = [
    {
        question: "Commonly used data types DO NOT include",
        answer: "Alerts",
        wrongAnswer1: "String",
        wrongAnswer2: "Number",
        wrongAnswer3: "Booleans",
    },
    {
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    }
    
]

    var questPlacement = document.querySelector(".question");
    questPlacement.textContent = "Question " + counter + ": " + questions[counter - 1].question;
    var ansPosition = Math.floor(Math.random() * 4);
    var wrongAns1 = Math.floor(Math.random()*4);
    var wrongAns2 = Math.floor(Math.random()*4);
    var wrongAns3 = Math.floor(Math.random()*4);

    console.log(ansPosition);

    while(ansPosition == wrongAns1){
        wrongAns1 = Math.floor(Math.random()* 4);
    }
    console.log(ansPosition);
    while(ansPosition == wrongAns2 || wrongAns1 == wrongAns2){
        wrongAns2 = Math.floor(Math.random() * 4)
    }
    console.log(ansPosition);
    while(ansPosition == wrongAns3 || wrongAns1 == wrongAns3 || wrongAns2 == wrongAns3){
        wrongAns3 = Math.floor(Math.random()*4);
    }
    console.log(ansPosition);
   
  
    var ansPlacement = document.querySelector(".ans" + ansPosition);
    var wrongAnsPosition1 = document.querySelector(".ans" + wrongAns1);
    var wrongAnsPosition2 = document.querySelector(".ans" + wrongAns2);
    var wrongAnsPosition3 = document.querySelector(".ans" + wrongAns3);
    console.log(ansPosition)
    console.log(ansPlacement)

    ansPlacement.textContent = questions[counter - 1].answer;
    wrongAnsPosition1.textContent = questions[counter - 1].wrongAnswer1;
    wrongAnsPosition2.textContent = questions[counter - 1].wrongAnswer2;
    wrongAnsPosition3.textContent = questions[counter - 1].wrongAnswer3;
    console.log(ansPlacement)
    console.log(ansPosition)
    return ansPosition;
}

//hell

var testing = function(){
console.log(questionGenerator() + " this is the right answer");


var answerCheck = document.querySelector(".ans" + questionGenerator())

answerCheck.addEventListener("click", function(){
    score = score + 5;
    questionGenerator();
})
}





// Initial Screen
screenSelector(2);

//Links to other screens
startToTest.addEventListener("click", function(){
    screenSelector(1);
    testing();
})

startToHs.addEventListener("click", function(){
    screenSelector(2);
})

//adds li to html page
var highscoreAdder = document.querySelector("#hsButton");
highscoreAdder.addEventListener("click", function(){
    var initials = document.querySelector("#textbox").value;
    var listEL = document.querySelector("#list");
    var miniEl = document.createElement("li");
    miniEl.textContent = initials + ": " + score;
    listEL.appendChild(miniEl);
})






