// array to hold sequence of colors
let buttonColors = ["red", "blue", "green", "yellow"];

// array to store color chosen from RandomChoseColor
let gamePattern = [];

// function to generate next pattern sequence
function nextSequence() {
  let rng = Math.floor(Math.random() * 4);
  return rng;
}

// store function value
let randomNumber = nextSequence();

// select random color from buttonColors array
let randomChosenColor = buttonColors.at(randomNumber);

// stores random color value inside gamePattern array
gamePattern.push(randomChosenColor);

// animation for random color button to flash when clicked
$("#" + randomChosenColor).on("click", function () {
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
});

// random color button plays sound when clicked corresponding to color
$("#" + randomChosenColor).on("click", function () {
  let randomSound = new Audio("sounds/" + randomChosenColor + ".mp3");
  randomSound.play();
});

// detect when btn classes are clicked and log id in new variable and push into userClickedPattern array
$(".btn").on("click", function() {
    let userChoseColor = $(this).attr("id");
    userClickedPattern.push(userChoseColor);
});