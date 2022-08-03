// array to hold sequence of colors
let buttonColors = ["red", "blue", "green", "yellow"];

// array to store color chosen from RandomChoseColor
let gamePattern = [];

// array to store id of button clicked
let userClickedPattern = [];

// variable to track if game has been started
let started = false;

// variable to track levels
let level = 0;

// detect when btn classes are clicked and log id in new variable and push into userClickedPattern array
$(".btn").on("click", function () {
  let userChoseColor = $(this).attr("id");
  userClickedPattern.push(userChoseColor);

  playSound(userChoseColor);

  animatePress(userChoseColor);
  // call checkAnswer function checking the color pattern picked and lastIndex of chosen color in array
  checkAnswer(userClickedPattern.length - 1);
});

// detect when key has been pressed and calls nextSequence function
$(document).on("keydown", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// function to generate next pattern sequence
function nextSequence() {
  // when nextSequence is triggered, reset to empty array ready for next level
  userClickedPattern = [];

  // incriment level each time function is called
  level++;

  //   update h1 each time function is called
  $("#level-title").text("Level " + level);

  // random number generator (rng)
  let randomNumber = Math.floor(Math.random() * 4);
  //  chooses color from array using rng
  let randomChosenColor = buttonColors[randomNumber];
  //  logs rng color to gamePattern array
  gamePattern.push(randomChosenColor);

  // animation for random color button to flash when clicked
  $("#" + randomChosenColor).on("keydown", function () {
    $("#" + randomChosenColor)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
  });

  // call playSound to play sound from rng when nextSequence is triggered
  playSound(randomChosenColor);

  // call animatePress to show color from rng when nextSequence is triggered
  animatePress(randomChosenColor);
}

// function to check user answer
function checkAnswer(currentLevel) {
  // checks if the most recent answer matches game pattern then executes code
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success!");
    // checks to see if user has finished their sequence if previous statement is true
    if (userClickedPattern.length === gamePattern.length) {
      //   call nextSequence after 1000 milisecond delay
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    // if previous statements are false execute code
  } else {
    // call playSound function to play "wrong" sound
    playSound("wrong");
    // adds game-over class to body when answer is wrong
    $("body").addClass("game-over");
    // removes game-over class and 200 ms
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    // query title to change text to notify user game over
    $("#level-title").text("Game Over, Press Any Key to Restart!");
  }
}

// function to play sound
function playSound(name) {
  let randomSound = new Audio("sounds/" + name + ".mp3");
  randomSound.play();
}

// function to add animation class and timeout remove class to button pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
