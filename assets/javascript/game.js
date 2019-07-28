
function rightAnswer(){
    correct++
}

function wrongAnswer(){
    incorrect++
}
function pushQuestions(){
    $("#questions").html("Hello")
}
function startGame(){

setTimeout(pushQuestions, 1000);

$(".mainHeaderHello").empty();

var timeleft = 3;

var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft--;
  if(timeleft < 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
    $(".body").append('<div class="gameOver"><a href= "https://mgulham.github.io/trivia-game/" style="color: red">YOUR TIME IS UP! Click here to try again.</a></div>');
    $("#questions").empty();
    
    $("#questions").append(`<p class= "endScore">Correct:${correct}</p>
      <p class= "endScore">Incorrect:${incorrect}</p> 
      <p class= "endScore">Unanswered:${unanswered}</p>`)
    
  }
}, 1000);



}

$(".startButton").click(startGame);
var correct = 0
var incorrect = 0
var unanswered = 0
var score = "Your score is"(((correct + unanswered) / 6.00) * 100) + "%"
