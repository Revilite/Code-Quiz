var startScreen = document.querySelector(".start");
var testScreen = document.querySelector(".test");
var hsScreen = document.querySelector(".highscore");
var startToTest = document.querySelector(".startButton");
var startToHs = document.querySelector(".highscoreButton"); 



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



var testing = function(){
    
    //declaraction for testing phase
var questions = [
    {
        question: "Commonly used data types DO NOT include",
        answer: "alerts",
        wrongAnswer1: "string",
        wrongAnswer2: "number",
        wrongAnswer3: "booleans",
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

var questionGenerator = function(){
    
}
}



// Initial Screen
screenSelector(1);

//Links to other screens
startToTest.addEventListener("click", function(){
    screenSelector(1);
    testing();
})

startToHs.addEventListener("click", function(){
    screenSelector(2);
})






//Delete later

testing();