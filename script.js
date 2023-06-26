function playGame(playerChoice) {
  var choices = ["steen", "papier", "schaar"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var resultElement = document.getElementById("result");

  resultElement.innerHTML = "U kiest " + playerChoice + ".<br>";
  resultElement.innerHTML += "De computer heeft <b>" + computerChoice + "</b> gekozen.<br>";

  if (playerChoice === computerChoice) {
    resultElement.innerHTML += "Gelijkspel";
  } else if (
    (playerChoice === "steen" && computerChoice === "schaar") ||
    (playerChoice === "papier" && computerChoice === "steen") ||
    (playerChoice === "schaar" && computerChoice === "papier")
  ) {
    resultElement.innerHTML += "Gefeliciteerd je wint!!";
  } else {
    resultElement.innerHTML += "Helaas je hebt verloren.";
  }

  // Update high score
  var highScoreElement = document.getElementById("high-score");
  var currentHighScore = parseInt(highScoreElement.innerText);
  if (isNaN(currentHighScore)) {
    currentHighScore = 0;
  }

  if (playerChoice === computerChoice) {
    // Tie, no change to high score
  } else if (
    (playerChoice === "steen" && computerChoice === "schaar") ||
    (playerChoice === "papier" && computerChoice === "steen") ||
    (playerChoice === "schaar" && computerChoice === "papier")
  ) {
    // Player wins, update high score if necessary
    currentHighScore++;
  } else {
    // Player loses, reset high score
    currentHighScore = 0;
  }

  highScoreElement.innerText = currentHighScore;
}