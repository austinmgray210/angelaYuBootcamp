"use strict";

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor((Math.random()) * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeOut().fadeIn();
    new Audio("sounds/" + randomChosenColor + ".mp3").play();
    console.log(gamePattern);
}


