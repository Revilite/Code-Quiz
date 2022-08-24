var startScreen = document.querySelector(".start");
var testScreen = document.querySelector(".test");
var hsScreen = document.querySelector(".highscore");
var score = 0;
var timer = 60;

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


    //declaraction of questions and answers
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
    },
    {
        question: "Javascript is what type of language",
        answer: "Object Oriented",
        wrongAnswer1: "Markup",
        wrongAnswer2: "Cascading style sheets",
        wrongAnswer3: "None of the above",
    },
    {
        question: "Which Javascript command is a loop",
        answer: "for",
        wrongAnswer1: "console.log",
        wrongAnswer2: "var",
        wrongAnswer3: "window.alert",
    },
    {
        question: "Javascript can be used for",
        answer: "All of the above",
        wrongAnswer1: "Changing values",
        wrongAnswer2: "Changing elements in HTML",
        wrongAnswer3: "Changing styles",
    },
    {
        question: "Which function is used to change a element into a string",
        answer: "stringify()",
        wrongAnswer1: "parse()",
        wrongAnswer2: "global()",
        wrongAnswer3: "string()",
    },
    {
        question: ".pop() does what to a array or string",
        answer: "Removes last item",
        wrongAnswer1: "Makes array most important variable",
        wrongAnswer2: "removes the first item",
        wrongAnswer3: "nothing",
    },
]

var counter = 0;

counter ++;

//Randomizes questions
   var questionGenerator = function(){


   
    if(counter > questions.length){
        screenSelector(2);
        counter = 0;
    }
 //Creates Question Header
    var questPlacement = document.querySelector(".question");
    questPlacement.textContent = "Question " + counter + ": " + questions[counter - 1].question;

    //Randomizes answers 
    var ansPosition = Math.floor(Math.random() * 4);
    var wrongAns1 = Math.floor(Math.random()*4);
    var wrongAns2 = Math.floor(Math.random()*4);
    var wrongAns3 = Math.floor(Math.random()*4);
    

    //confirms that the answers are different
    while(ansPosition == wrongAns1){
        wrongAns1 = Math.floor(Math.random()* 4);
    }
 

    while(ansPosition == wrongAns2 || wrongAns1 === wrongAns2){
        wrongAns2 = Math.floor(Math.random() * 4)
    }
  
    while(ansPosition == wrongAns3 || wrongAns1 === wrongAns3 || wrongAns2 === wrongAns3){
        wrongAns3 = Math.floor(Math.random()*4);
    }
    

   
  
          //collect list positioning
          var ansPlacement = document.querySelector(".ans" +ansPosition);
          var wrongAnsPosition1 = document.querySelector(".ans" + wrongAns1);
          var wrongAnsPosition2 = document.querySelector(".ans" + wrongAns2);
          var wrongAnsPosition3 = document.querySelector(".ans" + wrongAns3);
      
              //sets consisitent right answer
              ansPlacement.setAttribute("data-rAns", "True");
      
      
          //places answers in list
          ansPlacement.textContent = questions[counter - 1].answer;
          wrongAnsPosition1.textContent = questions[counter - 1].wrongAnswer1;
          wrongAnsPosition2.textContent = questions[counter - 1].wrongAnswer2;
          wrongAnsPosition3.textContent = questions[counter - 1].wrongAnswer3;

    
    var tester = [ansPosition, wrongAns1, wrongAns2, wrongAns3] + " Original answers";
    console.log(tester);

    return [ansPosition, wrongAns1, wrongAns2, wrongAns3];
    }

   
// Quiz Screen
var testing = function(){

    timerText();

    var answerList = document.querySelector(".answerList");
    answerList.addEventListener("click", function(event){
        var element = event.target;
        var global = questionGenerator();
        console.log(global + " answers after global")
        
         if (element.matches(".ans" + global[0])){
            score += 15;
            console.log("Right answer");
            counter++;
          
         }
        else if( element.matches(".ans" + global[1])
        || element.matches(".ans" + global[2]) || element.matches(".ans" + global[3])){
            timer -= 10;
           console.log("Wrong anser");
           counter++;
        }
    }
    )
}
    
    
    





//Timer Function
var timerText = function(){
    var timeLeft = document.querySelector(".timerText");
    timer = 60;
    timeLeft.textContent = "Time: " + timer + " seconds";
    timer--;
    var timerInterval = setInterval(function()
    {
        if(timer > 1){
            timeLeft.textContent = "Time: " + timer + " seconds";
            timer--;
        }
        else if (timer == 1){
            timeLeft.textContent = "Time: " + timer + " second";
            timer--;
        }
        else{
            timeLeft.texContent = "Time: " + timer + " seconds";
            clearInterval(timerInterval);
            screenSelector(2);
        }
    }, 1000);
}










//Links to other screens
var startToTest = document.querySelector(".startButton");
startToTest.addEventListener("click", function(){
    counter = 1;
    screenSelector(1);
    testing();
})
var startToHs = document.querySelector(".highscoreButton"); 
startToHs.addEventListener("click", function(){
    screenSelector(2);
})
var hsToStart = document.querySelector(".goBack");
hsToStart.addEventListener("click", function(){
    screenSelector(0);
    score = 0;
    counter = 1;
})

var highscores = {
    initial: document.querySelector(".textbox").value,
    score: score,
};


var renderList = function(){
    var lastList = JSON.parse(localStorage.getItem("highscores"));
    if (lastList !== null){

        document.querySelector(".list").textContent = initial + " " + score;
    }
}


localStorage.setItem("highscores", JSON.stringify(highscores))

//adds lists to scoreboard

var listCounter = 0;
var listEL = document.querySelector(".list");
var miniEl = document.createElement("li");
var highscoreAdder = document.querySelector(".hsButton");
var scoreText = document.querySelector(".score");
scoreText.textContent = "Your score is: " + score;
highscoreAdder.addEventListener("click", function(){

    var initials = document.querySelector(".textbox").value;
    listEL = document.querySelector(".list");
    miniEl = document.createElement("li");
    miniEl.textContent = initials + ": " + score;
    listEL.appendChild(miniEl);
    listCounter++;
    console.log(listCounter);

})

//Reset button for highscore
var resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function(){
    while(listEL.children.length > 0){
        listEL.children[0].remove();
        console.log("should Remove");
    }
})




screenSelector(0);


