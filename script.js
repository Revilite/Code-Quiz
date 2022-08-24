


var startScreen = document.querySelector(".start");
var testScreen = document.querySelector(".test");
var hsScreen = document.querySelector(".highscore");
var score = 0;
var timer = 75;







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


// // Initial Screen
// screenSelector(1);
// testing();
var counter = 0;
//the seven layers of hell


   counter++;

   var questionGenerator = function(){
    //declaraction for testing phase
    var ansPlacement = document.querySelector(".ans0");
    var wrongAnsPosition1 = document.querySelector(".ans1");
    var wrongAnsPosition2 = document.querySelector(".ans2");
    var wrongAnsPosition3 = document.querySelector(".ans3");


    ansPlacement.setAttribute("data-rAns", "False");
    wrongAnsPosition1.setAttribute("data-rAns", "False");
    wrongAnsPosition2.setAttribute("data-rAns", "False");
    wrongAnsPosition3.setAttribute("data-rAns", "False");


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
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    },
    {
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    },
    {
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    },
    {
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    },
    {
        question: "If statements check for",
        answer: "True Values",
        wrongAnswer1: "False Values",
        wrongAnswer2: "Other If statements",
        wrongAnswer3: "Numbers",
    },
    

    
]
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
     ansPlacement = document.querySelector(".ans" + ansPosition);
     wrongAnsPosition1 = document.querySelector(".ans" + wrongAns1);
     wrongAnsPosition2 = document.querySelector(".ans" + wrongAns2);
     wrongAnsPosition3 = document.querySelector(".ans" + wrongAns3);

    
        //sets consisitent right answer
        ansPlacement.setAttribute("data-rAns", "True");


    //places answers in list
    ansPlacement.textContent = questions[counter - 1].answer;
    wrongAnsPosition1.textContent = questions[counter - 1].wrongAnswer1;
    wrongAnsPosition2.textContent = questions[counter - 1].wrongAnswer2;
    wrongAnsPosition3.textContent = questions[counter - 1].wrongAnswer3;
 


    
    var ansSaver = ansPlacement.getAttribute("data-rAns");

    return [ansPosition, wrongAns1, wrongAns2, wrongAns3];
    }

   


    

var testing = function(){


    // timerText();

    questionGenerator();

    var answerList = document.querySelector(".answerList");
    answerList.addEventListener("click", function(event){
        
        var global = questionGenerator();
  
        var element = event.target;
    
    if( element.matches(".ans" + global[1])
     || element.matches(".ans" + global[2]) || element.matches(".ans" + global[3])){
        console.log("Wrong anser");
        counter++;
        questionGenerator();

     }
     else if (element.matches(".ans" + global[0])){
        console.log("Right answer");
        counter++;
        questionGenerator();
     }
    }
    )
}
    
    
    





//Timer Function
var timerText = function(){
    var timeLeft = document.querySelector(".timerText");
   
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



//hell







//Links to other screens
var startToTest = document.querySelector(".startButton");
startToTest.addEventListener("click", function(){
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


