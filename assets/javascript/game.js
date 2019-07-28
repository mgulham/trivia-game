
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
    $(".body").append('<div class= "gameOver">YOUR TIME IS UP! Refresh to try again.</div>');
    $("#questions").empty();
  }
}, 1000);



}

$(".startButton").click(startGame);
var correct = 0
var incorrect = 0
var unanswered = 0
var score = "Your score is"(((correct + unanswered) / 6.00) * 100) + "%"
