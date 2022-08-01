// array to hold sequence of colors
let buttonColors = ["red", "blue", "green", "yellow"];

// array to store color chosen from RandomChoseColor 
let gamePattern = [];

// function to generate next pattern sequence
function nextSequence() {
    let rng = Math.floor(Math.random() * 3) + 1;
    return rng
};

// store function value
let randomNumber = nextSequence();

// select random color from buttonColors array
let randomChosenColor = buttonColors.at(randomNumber);