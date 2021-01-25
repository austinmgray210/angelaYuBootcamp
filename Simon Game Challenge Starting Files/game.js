"use strict";

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];



function nextSequence() {
    let randomNumber = Math.floor((Math.random()) * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $("." + randomChosenColor).fadeOut().fadeIn();
    console.log(gamePattern);
}

// Checking to see which button was pressed.
$(".btn").click(function (e) {
    let userChosenColor = [];
    userChosenColor.push(e.currentTarget.id);
    userClickedPattern.push(e.currentTarget.id);
    playSound(e.currentTarget.id);
    console.log(userClickedPattern);
});

function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
}


