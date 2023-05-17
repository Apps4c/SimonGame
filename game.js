let started = false
let level=0;
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(document).on('keypress',function(e) {
  if(e.which == 13 && !started) {
      alert('we gonna start');
      started=true
      document.getElementById("level-title").innerHTML ="TOUR LEVEL : "+ level;
      nextSequence()
      
  }
});

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)  
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
  });

  function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[checkAnswer]){
      console.log("winner")
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }else{
      console.log('loser')
    }
  }

function nextSequence() {
  userClickedPattern=[]
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour)
}



function playSound(name){
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#"+ currentColour).addClass( "pressed" );
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

