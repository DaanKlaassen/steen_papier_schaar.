var player1Choice = null;
var player2Choice = null;

function chooseOption(option) {
    if (player1Choice === null) {
        player1Choice = option;
        document.getElementById("player1").textContent = option;
        document.getElementById("player1-img").src = choiceToImage(option);
        clearResult();
    } else if (player2Choice === null) {
        player2Choice = option;
        document.getElementById("player2").textContent = option;
        document.getElementById("player2-img").src = choiceToImage(option);
        determineWinner();
    }
}

function clearResult() {
    document.getElementById("player2").textContent = "";
    document.getElementById("player2-img").src = "";
    document.getElementById("result").textContent = "";
}

function determineWinner() {
    if (player1Choice && player2Choice) {
        if (player1Choice === player2Choice) {
            document.getElementById("result").textContent = "Gelijkspel!";
        } else if (
            (player1Choice === "steen" && player2Choice === "schaar") ||
            (player1Choice === "papier" && player2Choice === "steen") ||
            (player1Choice === "schaar" && player2Choice === "papier")
        ) {
            document.getElementById("result").textContent = "Speler 1 heeft gewonnen!";
        } else {
            document.getElementById("result").textContent = "Speler 2 heeft gewonnen!";
        }
    }
}

function choiceToImage(choice) {
    if (choice === "steen") {
        return "steen.jpg";  
    } else if (choice === "papier") {
        return "papier.jpg"; 
    } else if (choice === "schaar") {
        return "schaar.jpg";  
    }
}

function resetGame() {
    player1Choice = null;
    player2Choice = null;
    document.getElementById("player1").textContent = "";
    document.getElementById("player2").textContent = "";
    document.getElementById("player1-img").src = "";
    document.getElementById("player2-img").src = "";
    document.getElementById("result").textContent = "";
}