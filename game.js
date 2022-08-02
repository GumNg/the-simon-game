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

  // random color button plays sound when clicked corresponding to color
  playSound(randomChosenColor);
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

// function to check user answer
function checkAnswer(currentLevel) {

};