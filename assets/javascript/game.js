
var correct = 0  //defining our global variables
var incorrect = 0
var timeleft = 120;

// object that runs function when submit is clicked. Makes sure page doesn't refresh.
const myForm = document.getElementById("myForm"); 
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
  handleClick();
  setTimeout(endGame, 500);
});

let myQuestions = [
  {
    question: "Who directed the 1994 film Pulp Fiction",
    answers: {
      a: "Christopher Nolan",
      b: "Quentin Tarantino",
      c: "Martin Scorsese"
    },
    correctAnswer: "b"
  },
  {
    question: "Which actor or actress has won the most Academy Awards?",
    answers: {
      a: "Meryl Streep",
      b: "Daniel Day-Lewis",
      c: "Katharine Hepburn"
    },
    correctAnswer: "c"
  },
  {
    question: "Who played Agent J in the Men in Black Trilogy?",
    answers: {
      a: "Tommy Lee Jones",
      b: "Will Smith",
      c: "Josh Brolin",
    },
    correctAnswer: "b"
  },
  {
    question: "How many actors have portrayed James Bond in film?",
    answers: {
      a: "8",
      b: "6",
      c: "9",
    },
    correctAnswer: "a"
  },
  {
    question: "What is the highest grossing movie of all time?",
    answers: {
      a: "The Titanic",
      b: "Avatar",
      c: "Avengers: Endgame",
    },
    correctAnswer: "c"
  }
];

//When page loads, questions are ready but are hidden until called.
$( document ).ready(function() {
  $("#questions").hide();
});

//calculates score by looping through inputs and pulling clicked values. Those values are stored and looped through themselves to see if correct or not. Pulled from stackoverflow.
function handleClick() {         
           
  for(var i = 1; i <= 5; i++) {
    var radios = document.getElementsByName('answer'+i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value == "correct" && radio.checked) {
        correct++;
      }
      }
   }                   
      ;
      
    } //

//Function that pushes score to html when game is complete
function pushScore(){
  incorrect = 5 - correct;
  $("#questions").append(`<p class= "endScore">Correct: ${correct}</p>
      <p class= "endScore">Incorrect: ${incorrect}</p>`)
    
};

//function that pushes questions from array to html. 
function pushQuestions(){
    $("#q1").html(`${myQuestions[0].question}`);
    $("#q1a1").append(`${myQuestions[0].answers.a}`);
    $("#q1a2").append(`${myQuestions[0].answers.b}`);
    $("#q1a3").append(`${myQuestions[0].answers.c}`);
    $("#q2").html(`${myQuestions[1].question}`);
    $("#q2a1").append(`${myQuestions[1].answers.a}`);
    $("#q2a2").append(`${myQuestions[1].answers.b}`);
    $("#q2a3").append(`${myQuestions[1].answers.c}`);
    $("#q3").html(`${myQuestions[2].question}`);
    $("#q3a1").append(`${myQuestions[2].answers.a}`);
    $("#q3a2").append(`${myQuestions[2].answers.b}`);
    $("#q3a3").append(`${myQuestions[2].answers.c}`);
    $("#q4").html(`${myQuestions[3].question}`);
    $("#q4a1").append(`${myQuestions[3].answers.a}`);
    $("#q4a2").append(`${myQuestions[3].answers.b}`);
    $("#q4a3").append(`${myQuestions[3].answers.c}`);
    $("#q5").html(`${myQuestions[4].question}`);
    $("#q5a1").append(`${myQuestions[4].answers.a}`);
    $("#q5a2").append(`${myQuestions[4].answers.b}`);
    $("#q5a3").append(`${myQuestions[4].answers.c}`);
    $("#questions").show();
    
}

//function that starts game and resets values on start button click
function startGame(){
startTime();
correct = 0;
incorrect = 0;



setTimeout(pushQuestions, 500);

$(".mainHeaderHello").empty();
}

//starts timer
function startTime(){
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft--; 
  //when time runs out. Game will end.
  if(timeleft < 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Times Up!"
    $(".body").append('<div class="gameOver"><a href="https://mgulham.github.io/trivia-game/" target="_self" style="color: red">The Test is Complete! Click here to try again.</a></div>');
    $("#questions").empty();
    handleClick()
    pushScore();
  
  }
}, 1000);
}
//Empties questions so score can be shown
function endGame(){
  $("#countdown").empty();
  $("#questions").empty();
  pushScore();
}



$(".startButton").click(startGame)


