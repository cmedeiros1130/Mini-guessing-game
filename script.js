"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no input
    displayMessage("🚫 No Number");
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 correct");
    document.querySelector(".number").textContent = secretNumber;

    //when correct body changes green and font increases.
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
    score++;
    document.querySelector(".score").textContent = score;

    //when guessing is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Too low!" : "Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Loose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
